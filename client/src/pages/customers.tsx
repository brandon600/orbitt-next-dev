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
import { CustomerData } from '@/types/CustomerData';
import { BlastMessageData } from '@/types/BlastMessageData';
import { SentMessageData } from '@/types/SentMessageData';
import { VisitData } from '@/types/VisitData';
import CustomerCell from '@/components/molecules/CustomerCell';
import CustomerCells from '@/components/organism/CustomerCells';
import SearchBar from '@/components/atoms/SearchBar';
import CustomerTableHead from '@/components/atoms/CustomerTableHead';
import { CustomerFilter, FilterType, FILTER_CONFIGS, FilterValue } from '@/components/molecules/CustomerFilter';
import { useUniqueAreaCodes } from '@/util/pages/customers/customersHooks';
import { CustomerFilters }  from '@/components/organism/CustomerFilters';

interface CustomerProps {
    customersData: CustomerData[];
    receivedBlastsData: BlastMessageData[];
    visitsData: VisitData[];
    sentMessagesData: SentMessageData[];
}

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 0px;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    box-sizing: border-box;
    background: ${Colors.primary100};
}
`

 export async function getServerSideProps() {
    try {
        // Fetch rewards data
        const fetchCustomers = await fetch('http://localhost:5000/customers');
        const fetchBlastMessages = await fetch('http://localhost:5000/blast-messages');
        const fetchSentMessages = await fetch('http://localhost:5000/sent-messages');
        const fetchVisits = await fetch('http://localhost:5000/customer-visits');

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


function Customers( { customersData, receivedBlastsData, visitsData, sentMessagesData }: CustomerProps) {
    const { data, fetchData, toast, showToast, hideToast } = useStore();


    const areaCodeOptions = useUniqueAreaCodes(customersData);
    console.log("Area Code Options at declaration:", areaCodeOptions);


    const [newCustomerSearch, setNewCustomerSearch] = useState<string>("");
    const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

    const mostCommonAreaCode = getMostCommonAreaCode(customersData);

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
        console.log('Updated selectedCustomers:', selectedCustomers);
    }, [selectedCustomers]);

    const handleCustomerSelection = (customerId: string, isSelected: boolean) => {
        setSelectedCustomers(prevState => 
            isSelected 
                ? [...prevState, customerId] 
                : prevState.filter(id => id !== customerId)
        );
    }
    

    const filteredCustomers = customersData.filter(customer => {
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
            <GlobalStyle />
            <p>Customers data is going here!!!</p>
            <SearchBar
                 label="Search"
                 placeholder='Search for customers by name...'
                 onChange={(value) => setNewCustomerSearch(value)}
                 value={newCustomerSearch}
            />
            <CustomerFilters
                areaCodeOptions={areaCodeOptions}
                filters={filters}
                setFilters={setFilters}
            />
            <CustomerCells
                customersData={filteredCustomers}
                onCustomerSelection={handleCustomerSelection}
                selectedCustomers={selectedCustomers}
            />
        </FlexDiv>
    );
}

export default Customers;