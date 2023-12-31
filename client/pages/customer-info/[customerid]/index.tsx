import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Text from '../../../src/components/subatomic/Text';
import Button from '../../../src/components/atoms/Button';
import styled from 'styled-components';
import StyledMediaQuery from '../../../src/constants/StyledMediaQuery';
import Colors from '@/constants/Colors';
import GlobalStyle from '../../../src/GlobalStyle'
import { useStore, AppState, UserData, fetchData, initialData } from '../../../src/store/store';
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import io from "socket.io-client";
import { CustomerData } from '@/types/CustomerData';
import { IOSBackIcon } from '@/components/subatomic/Icons/IOSBackIcon';
import DataCard from '@/components/atoms/DataCard';
import CustomerVisit from '@/components/molecules/CustomerVisit';
import { VisitType } from '@/components/molecules/CustomerVisit';
import { VisitData } from '@/types/VisitData';
import EditCustomerForm from '@/components/organism/EditCustomerForm';
import Overlay from '@/components/atoms/Overlay';
import { useMemberAuth } from '../../../src/util/global/globalHooks';
import { FlexDiv, TopSection, TopNavigation, BackIconDiv, TopButtonDiv, TopCustomerInfo, CustomerInfoDiv, BottomSection, CustomerStatistics, CustomerStatisticsLabel, DataCards, DataCardsRow, EditCustomerButton, CustomerRecentActivity, RecentActivityLabel, CustomerVisitCells, TopButtons, TCIName, TCINumber, TCIBirthday } from '../../../src/pagesource/customer-info/customerid/styles';

interface CustomerInfoProps {
    customer: CustomerData | null;
    userData: UserData;
    ranking: {
        rank: number;
        totalCustomers: number;
    } | null;
}


const getDefaultCustomer = (): CustomerData => ({
    _id: '0', // Default DB ID. This should be handled more appropriately in real-world scenarios.
    visits: [],
    receivedBlasts: [],
    customerid: '0',
    userClass: '',
    date: new Date().toISOString(), // Set to the current date as default
    signUpDate: '01/01/1970',
    lastTransactionDate: '01/01/1970',
    user: '', // Default system user, should be updated based on the real-world scenario
    userMemberstackId: '',
    firstName: 'Unknown',
    lastName: 'Customer',
    fullName: 'Unknown Customer',
    areaCodeNumber: '000',
    phoneNumber1: '0000000',
    fullPhoneNumber: '000-000-0000',
    rewardNumber: 0,
    active: false,
    atRisk: false,
    totalVisits: 0,
    starsEarned: 0,
    rewardsRedeemed: 0,
    birthdayMonth: '01',
    birthdayDay: '01',
    birthdayYear: '1970',
    fullBirthday: '01/01/1970',
    index: 0
    // If any other properties are added to the CustomerData type, they should be represented here as well.
});

const getDefaultRanking = () => ({
    rank: -1, // or some default value that indicates an unknown rank.
    totalCustomers: 0,
});

export async function getServerSideProps(context: any) {
    const { customerid } = context.params;
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
        return {
            error: "no user data",
            notFound: true
        }
    }

    try {
        const userId = userData.userid;
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const customerResponse = await fetch(`${apiUrl}/customers/${customerid}?userId=${userData.userid}`);
        const rankingResponse = await fetch(`${apiUrl}/customers/${customerid}/ranking?userId=${userData.userid}`);

        if (!customerResponse.ok || !rankingResponse.ok) {
            throw new Error('Failed to fetch data');
        }

        const customer: CustomerData = await customerResponse.json();
        const ranking = await rankingResponse.json();

        return {
            props: {
                userData,
                customer,
                ranking
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                customer: null,
                ranking: null
            },
        };
    }
}

function formatPhoneNumber(number: string): string {
    const cleaned = ('' + number).replace(/\D/g, '');
    const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return number;
}

function formatDateFromMilliseconds(milliseconds: string): string {
    const dateObj = new Date(Number(milliseconds));
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');  // Months are 0-indexed
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
}



function generateVisitInfoText(visit: VisitData, realCusName: string): string {
    switch (visit.visitType) {
        case 'New User':
            return `${realCusName} signed up on ${formatDateFromMilliseconds(visit.date)}`;
        case 'Reward':
            return `${realCusName} redeemed a reward on ${formatDateFromMilliseconds(visit.date)}`;
        case 'Purchase':
            return `${realCusName} made a purchase on ${formatDateFromMilliseconds(visit.date)}`;
        case 'Birthday':
            return `${realCusName} received a birthday reward on ${formatDateFromMilliseconds(visit.date)}`;
        default:
            return visit.visitid;  // fallback to provided infoText
    }
}

function useBodyScrollLock(isLocked: boolean) {
    useEffect(() => {
      if (isLocked) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
  
      return () => {
        document.body.style.overflowY = 'auto';
      };
    }, [isLocked]);
  }

const CustomerInfo: React.FC<CustomerInfoProps> = ({ customer, ranking, userData }) => {
    const router = useRouter();
    const { userId } = useMemberAuth();
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const handleTransactionClick = () => {
        if (customer) {
            router.push(`/process-transaction-customer/${customer.customerid}`);
        }
    }

    const handleGoBack = () => {
        router.back();
    }

    const [showEditForm, setShowEditForm] = useState<boolean>(false);
    useBodyScrollLock(showEditForm);
    const { 
        data, fetchData, toast,
      } = useStore((state: AppState) => state);

      const [localCustomer, setLocalCustomer] = useState<CustomerData>(customer || getDefaultCustomer());
  
      useEffect(() => {
        console.log("Setting up socket connection.");
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        if (!apiUrl) {
            throw new Error("API_BASE_URL is not defined");
        }

        const socket = io(apiUrl);
    
        // Listen for the 'customer-edited' event and update the customer
        socket.on("customer-edited", (updatedCustomer: CustomerData) => {
            setLocalCustomer(updatedCustomer);
        });

        socket.on('error', (error) => {
            console.error('Socket Error:', error);
        });
    
        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (userId) {
          fetchData(userId);
        }
      }, [fetchData, userId]);


    if (!customer) {
        return <p>Loading...</p>;
    }

    return (
        <FlexDiv>
            <AnimatePresence>
                {
                    showEditForm && <EditCustomerForm onClose={() => setShowEditForm(false)} customer={localCustomer} />
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    showEditForm && <Overlay />
                }
            </AnimatePresence>
            <AnimatePresence>
                {toast.visible && (
                    <Toast key="toast" />
                )}
            </AnimatePresence>
            <GlobalStyle />
            <TopSection>
                <TopNavigation>
                    <BackIconDiv
                        onClick={handleGoBack}
                    >
                        <IOSBackIcon fill={Colors.neutral700} />
                    </BackIconDiv>
                    <TopButtons>
                    <TopButtonDiv>
                        <Button
                            buttonTypeVariant="secondary"
                            sizeVariant='large'
                            label="Edit Customer Info"
                            buttonWidthVariant='content'
                            onClick={() => setShowEditForm(true)}
                        />
                    </TopButtonDiv>
                    <TopButtonDiv>
                        <Button
                            buttonTypeVariant="primary"
                            sizeVariant='large'
                            label="Process Transaction"
                            buttonWidthVariant='content'
                            onClick={handleTransactionClick}
                        />
                    </TopButtonDiv>
                    </TopButtons>
                </TopNavigation>
                <TopCustomerInfo>
                    <TCIName>
                        <Text
                            text={localCustomer.fullName}
                        />
                    </TCIName>
                    <CustomerInfoDiv>
                        <TCINumber>
                            <Text
                                text={formatPhoneNumber(localCustomer.fullPhoneNumber)}
                            />
                        </TCINumber>
                        <TCIBirthday>
                            <Text
                                text={localCustomer.fullBirthday}
                            />
                        </TCIBirthday>
                    </CustomerInfoDiv>
                </TopCustomerInfo>
            </TopSection>
            <BottomSection>
                <CustomerStatistics>
                    <CustomerStatisticsLabel>
                        <Text
                            text='Customer Statistics'
                        />
                    </CustomerStatisticsLabel>
                    <DataCards>
                        <DataCardsRow>
                            <DataCard
                                label='Customer Ranking'
                                number1={ranking ? ranking.rank.toString() : "N/A"}
                                number2={ranking ? `/${ranking.totalCustomers.toString()}` : "N/A"}
                            />
                            <DataCard
                                label='Number of Visits'
                                number1={localCustomer && localCustomer.totalVisits.toString()}
                                number2=''
                            />
                        </DataCardsRow>
                        <DataCardsRow>
                            <DataCard
                                label='Points Earned'
                                number1={localCustomer && localCustomer.starsEarned.toString()}
                                number2=''
                            />
                            <DataCard
                                label='Rewards Redeemed'
                                number1={localCustomer && localCustomer.rewardsRedeemed.toString()}
                                number2=''
                            />
                        </DataCardsRow>
                    </DataCards>
                </CustomerStatistics>
                <EditCustomerButton>
                    <Button
                        buttonTypeVariant="secondary"
                        sizeVariant='large'
                        label="Edit Customer Info"
                        buttonWidthVariant='fill'
                        onClick={() => setShowEditForm(true)}
                    />
                </EditCustomerButton>
                <CustomerRecentActivity>
                    <RecentActivityLabel>
                        <Text
                            text='Recent Activity'
                        />
                    </RecentActivityLabel>
                    <CustomerVisitCells>
                    {customer.visits.map((visit) => (
                        <CustomerVisit
                            key={visit.visitid} // Assuming each visit has a unique 'id'
                            visitTypeVariant={visit.visitType as VisitType}
                            visitInfoText={generateVisitInfoText(visit, localCustomer.firstName)}
                        />
                    ))}
                </CustomerVisitCells>
                </CustomerRecentActivity>
            </BottomSection>
        </FlexDiv>
    );
};

export default CustomerInfo;



