import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import Colors from '@/constants/Colors';
import React, { useState, useEffect, useCallback } from 'react';
import GlobalStyle from '../GlobalStyle';
import { useStore, AppState } from '../store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import BottomSaveNotice from '@/components/molecules/BottomSaveNotice';
import io from "socket.io-client";
import { motion } from 'framer-motion';
import { CustomerData } from '@/types/CustomerData';
import { BlastMessageData } from '@/types/BlastMessageData';
import { SentMessageData } from '@/types/SentMessageData';
import { VisitData } from '@/types/VisitData';
import { UserData, initialData, fetchData } from '../store/store';
import CustomerCells from '@/components/organism/CustomerCells';
import SearchBar from '@/components/atoms/SearchBar';
import { CustomerFilter, FilterType, FILTER_CONFIGS, FilterValue } from '@/components/molecules/CustomerFilter';
import { useUniqueAreaCodes } from '@/util/pages/customers/customersHooks';
import { CustomerFilters }  from '@/components/organism/CustomerFilters';
import Overlay from '@/components/atoms/Overlay';
import SMSBlastModal from '@/components/organism/SMSBlastModal';
import AddCustomerForm from '@/components/organism/AddCustomerForm';
import { SMSIcon } from '@/components/subatomic/Icons/SMSIcon';
import { useMemberAuth } from '../util/global/globalHooks';
import { GetServerSidePropsContext } from 'next';
import Cookie from 'js-cookie';

interface CustomerProps {
    customersData: CustomerData[];
    receivedBlastsData: BlastMessageData[];
    visitsData: VisitData[];
    sentMessagesData: SentMessageData[];
    userData: UserData;
}

const TitlePlusButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        gap: 32px;
        flex-direction: column;
    }

    @media ${StyledMediaQuery.S} {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start
    }
`

const PageTitle = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        
        p {
            font-size: 32px;
            font-weight: 800;
            line-height: 39px;
            color: ${Colors.neutral700};
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 40px;
            line-height: 48px;
        }
    }

    @media ${StyledMediaQuery.L} {
        p {
            font-size: 48px;
            line-height: 58px;
        }
    }
`

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    box-sizing: border-box;
    background: ${Colors.primary100};
    min-height: 100vh;
    overflow: hidden;
    height: 100vh;
}

@media ${StyledMediaQuery.S} {
    padding: 24px;
}

@media ${StyledMediaQuery.L} {
    margin-left: 260px;
    width: calc(100vw - 260px);
}
`

const FlexContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 32px;
    flex-direction: column;
    width: 100%;
}

@media ${StyledMediaQuery.L} {
}
`

const ButtonWrapper = motion(styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
    }

    @media ${StyledMediaQuery.L} {
        display: flex;
        align-self: flex-start; 
        position: fixed;
        right: 24px;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.32);
    }
`);

const AddCusButtonWrapper = styled.div`
    @media ${StyledMediaQuery.XS} {
        width: 100%;
        align-self: flex-start; 
    }

    @media ${StyledMediaQuery.S} {
        width: auto;
    }
`;

const TableAndSearch = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        align-self: stretch;
    }

    @media ${StyledMediaQuery.S} {
        gap: 40px;
    }
`

const SearchAndFilters = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
        align-self: stretch;
    }
`

const SelectedCustomersLabel = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        p {
            font-size: 16px;
            line-height: 19px;
            font-weight: 800;
            color: ${Colors.neutral600};
        }
    }

    @media ${StyledMediaQuery.XS} {
        p {
            font-size: 20px;
            line-height: 24px;
        }
    }
`

const LabelPlusCells = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }
`

const BlastIconButton = motion(styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        position: fixed;
        z-index: 101;
        bottom: 16px;
        left: 16px;
        width: 72px;
        height: 72px;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        background: ${Colors.success700};
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.32);

        svg {
            width: 48px;
            height: 48px;
        }
    }

    @media ${StyledMediaQuery.L} {
        display: none;
    }
`)

const HideShowFilters = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding-bottom: 0px;
        align-items: flex-start;
        gap: 10px;
        border-bottom: 1px solid ${Colors.neutral600};
        p {
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
            color: ${Colors.neutral600};
        }
    }
`

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const userCookie = context.req.cookies.user;
    let userData: UserData = initialData;

    if (userCookie) {
        userData = JSON.parse(userCookie);
    } else {
        // Fetch user data if it's not in the cookie
        const memberstackId = context.req.cookies.memberstackId; // or however you're identifying the user
        if (memberstackId) {
            const fetchedData = await fetchData(memberstackId); // fetchData can return null
            if (fetchedData) {
                userData = fetchedData;
                // fetchData already sets the cookie, so you don't have to do it again here
            }
        }
    }

    if (!userData.userid) {
        return 'no user data'
    }

    try {
        // Fetch customers data
        const userId = userData.userid;
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const fetchCustomers = await fetch(`${apiUrl}/customers?userId=${userId}`);
        const fetchBlastMessages = await fetch(`${apiUrl}/blast-messages?userId=${userId}`);
        const fetchSentMessages = await fetch(`${apiUrl}/sent-messages?userId=${userId}`);
        const fetchVisits = await fetch(`${apiUrl}/customer-visits?userId=${userId}`);

        const [customersResponse, blastMessagesResponse, sentMessagesResponse, visitsResponse] = 
            await Promise.all([fetchCustomers, fetchBlastMessages, fetchSentMessages, fetchVisits]);

        if (!customersResponse.ok || !blastMessagesResponse.ok || !sentMessagesResponse.ok || !visitsResponse.ok) {
            throw new Error('One or more network responses were not ok');
        }

        const customersData = await customersResponse.json();
        const receivedBlastsData = await blastMessagesResponse.json();
        const sentMessagesData = await sentMessagesResponse.json();
        const visitsData = await visitsResponse.json();

            // Return the fetched data as props
            return {
                props: {
                    userData,
                    customersData,
                    receivedBlastsData,
                    sentMessagesData,
                    visitsData
                }
            };
        } catch (error) {
            console.error('Error fetching data:', error);
            return {
                props: {
                    customersData: [],
                    receivedBlastsData: [],
                    sentMessagesData: [],
                    visitsData: []
                }
            };
        }
    }
    
    function getMostCommonAreaCode(customers: CustomerData[]): string {
        const areaCodeCount = new Map<string, number>();
    
        for (const customer of customers) {
            const count = areaCodeCount.get(customer.areaCodeNumber) || 0;
            areaCodeCount.set(customer.areaCodeNumber, count + 1);
        }
    
        let mostCommonAreaCode = '';
        let maxCount = 0;
        
        for (const [areaCode, count] of areaCodeCount.entries()) {
            if (count > maxCount) {
                maxCount = count;
                mostCommonAreaCode = areaCode;
            }
        }
        return mostCommonAreaCode;
    }

function Customers( { customersData, receivedBlastsData, visitsData, sentMessagesData, userData }: CustomerProps) {
    const { 
        data, fetchData, toast, 
        hideToast, showToast 
      } = useStore((state: AppState) => state);

    const areaCodeOptions = useUniqueAreaCodes(customersData);
    const [newCustomerSearch, setNewCustomerSearch] = useState<string>("");
    const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
    const [isBlastModalOpen, setIsBlastModalOpen] = useState(false);
    const mostCommonAreaCode = getMostCommonAreaCode(customersData);
    const [isAddCustomerFormOpen, setIsAddCustomerFormOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [localCustomersData, setLocalCustomersData] = useState<CustomerData[]>(customersData);
    const { userId } = useMemberAuth();

   // const savedUserData = JSON.parse(Cookie.get('user') || '{}');
   // console.log(savedUserData)
    console.log(userData)

    const [filters, setFilters] = useState<Record<FilterType, FilterValue>>({
        [FilterType.POINTS]: { value: '1', active: false },
        [FilterType.VISITS]: { value: '1', active: false },
        [FilterType.LAST_TRANSACTION_DATE]: { value: '24 Hours', active: false },
        [FilterType.AREA_CODE]: { value: mostCommonAreaCode, active: false },
        [FilterType.BIRTHDAY]: { value: { startDate: '', endDate: '' }, active: false },
        [FilterType.SIGN_UP_DATE]: { value: '24 Hours', active: false },
        // initialize other filters here if needed
    });


    useEffect(() => {
        console.log("Setting up socket connection.");
        const socket = io("http://localhost:5000");
      
        socket.on("customer-added", (addedCustomer: CustomerData) => {
            setLocalCustomersData(prevCustomers => [...prevCustomers, addedCustomer]);
        });
    
        socket.on("disconnect", () => {
          console.log("Disconnected from the server");
        });
      
        return () => {
          // Cleanup: Disconnect socket when component is unmounted
          socket.disconnect();
        };
    }, []);


    /*
    useEffect(() => {
        if (userId) {
          fetchData(userId);
        }
      }, [userId]);
      */
  
    useEffect(() => {
        console.log('Updated selectedCustomers:', selectedCustomers);
    }, [selectedCustomers]);

    const handleAddCustomerFormClose = () => {
        setIsAddCustomerFormOpen(false);
      };

    const handleCustomerSelection = (customerId: string, isSelected: boolean) => {
        setSelectedCustomers(prevState => 
            isSelected 
                ? [...prevState, customerId] 
                : prevState.filter(id => id !== customerId)
        );
    }

    const toggleBlastModal = () => {
        setIsBlastModalOpen(prevState => !prevState);
    }

    const toggleAddNewCustomerModal = () => {
        setIsAddCustomerFormOpen(prevState => !prevState);
    }

    const toggleFilters = () => {
        setShowFilters(prevState => !prevState);
    }

    const filteredCustomers = localCustomersData.filter(customer => {
        if (!customer.fullName.toLowerCase().includes(newCustomerSearch.toLowerCase())) {
            return false;
        }
    
        return Object.entries(filters).every(([key, filterConfig]) => {
            if (!filterConfig.active) return true;
            const filterFunction = FILTER_CONFIGS[key as FilterType].filterFunction;
            return filterFunction(customer, filterConfig); // <-- Change here, pass the entire filterConfig
        });
    });
    
    return (
        <FlexDiv>
            <AddCusButtonWrapper>
            </AddCusButtonWrapper>
            { (isBlastModalOpen ) && <SMSBlastModal onClose={toggleBlastModal} selectedCustomers={selectedCustomers} />}
            <AnimatePresence>
                {isAddCustomerFormOpen && <AddCustomerForm onClose={handleAddCustomerFormClose} />}
            </AnimatePresence>
            <AnimatePresence>
            { (isBlastModalOpen || isAddCustomerFormOpen ) && <Overlay />}
            </AnimatePresence>
            <AnimatePresence>
            {toast.visible && (
                <Toast key="toast" />
            )}
            </AnimatePresence>
            <AnimatePresence>
                {selectedCustomers.length > 0 && (
                    <ButtonWrapper
                        initial={{ bottom: "0px", opacity: 0 }}  // initial state (hidden to the right)
                        animate={{ bottom: "24px", opacity: 1 }}  // end state (appears from the right)
                        exit={{ bottom: "0px", opacity: 0 }}  // exit state (disappears to the right)
                        transition={{ duration: 0.4, ease: [0.88, 0, 0.16, 1] }} // animation takes 400ms with easeInOut easing
                    >
                        <Button
                            label='Send SMS Blast'
                            buttonTypeVariant="smsBlast"
                            sizeVariant="large"
                            buttonWidthVariant="content"
                            onClick={toggleBlastModal}
                        />
                    </ButtonWrapper>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {selectedCustomers.length > 0 && (
                    <BlastIconButton
                        onClick={toggleBlastModal}
                        initial={{ bottom: "0px", opacity: 0 }}  // initial state (hidden to the right)
                        animate={{ bottom: "16px", opacity: 1 }}  // end state (appears from the right)
                        exit={{ bottom: "0px", opacity: 0 }}  // exit state (disappears to the right)
                        transition={{ duration: 0.4, ease: [0.88, 0, 0.16, 1] }} // animation takes 400ms with easeInOut easing
                    >
                       <SMSIcon fill={Colors.shades100} />
                   </BlastIconButton>
                )}
            </AnimatePresence>
            <GlobalStyle />
            <FlexContainer>
            <TitlePlusButton>
                <PageTitle>
                    <Text text='Customers' />
                </PageTitle>
                <AddCusButtonWrapper>
                    <Button
                        label='Add New Customer'
                        buttonTypeVariant="primary"
                        sizeVariant="large"
                        buttonWidthVariant="fill"
                        onClick={toggleAddNewCustomerModal}
                    />
                </AddCusButtonWrapper>
            </TitlePlusButton>
            <TableAndSearch>
                <SearchAndFilters>
                    <SearchBar
                        label="Search"
                        placeholder='Search for customers by name...'
                        onChange={(value) => setNewCustomerSearch(value)}
                        value={newCustomerSearch}
                    />
                    {showFilters && (
                        <CustomerFilters
                            areaCodeOptions={areaCodeOptions}
                            filters={filters}
                            setFilters={setFilters}
                        />
                    )}
                <HideShowFilters onClick={toggleFilters}>
                    <Text text={showFilters ? 'Hide Filters' : 'Show Filters'} />
                </HideShowFilters>
                </SearchAndFilters>
                <LabelPlusCells>
                    {selectedCustomers.length > 0 && (
                        <SelectedCustomersLabel>
                            <Text text={`${selectedCustomers.length} customer(s) selected`} />
                        </SelectedCustomersLabel>
                    )}
                    <CustomerCells
                        customersData={filteredCustomers}
                        onCustomerSelection={handleCustomerSelection}
                        selectedCustomers={selectedCustomers}
                    />
                </LabelPlusCells>
            </TableAndSearch>
            </FlexContainer>
        </FlexDiv>
    );
}

export default Customers;