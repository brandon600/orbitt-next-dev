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
                    receivedBlasts: [],
                    sentMessagesData: [],
                    visitsData: []
                }
            };
        }
    }


function Customers( { customersData, receivedBlastsData, visitsData, sentMessagesData }: CustomerProps) {
    const { data, fetchData, toast, showToast, hideToast } = useStore();

    const [newCustomerSearch, setNewCustomerSearch] = useState<string>("");

      // Filter the customersData based on the search input
      const filteredCustomers = customersData.filter(customer =>
        customer.fullName.toLowerCase().includes(newCustomerSearch.toLowerCase())
    );

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
            <CustomerCells
                customersData={filteredCustomers}
            />
            <CustomerTableHead
                label1='Name'
                label2='Phone Number'
                label3='Date of Birth'
                label4='Points'
                label5='Visits'
                label6='Sign-Up'
                label7='Last Visit'
                label8='View'
            />
            {filteredCustomers.map((customer, index) => (
            <CustomerCell
                _id={customer._id}
                key={index}
                index={index}
                visits={customer.visits}
                receivedBlasts={customer.receivedBlasts}
                customerid={customer.customerid}
                userClass={customer.userClass}
                date={customer.date}
                signUpDate={customer.signUpDate}
                lastTransactionDate={customer.lastTransactionDate}
                user={customer.user}
                userMemberstackId={customer.userMemberstackId}
                firstName={customer.firstName}
                lastName={customer.lastName}
                fullName={customer.fullName}
                areaCodeNumber={customer.areaCodeNumber}
                phoneNumber1={customer.phoneNumber1}
                fullPhoneNumber={customer.fullPhoneNumber}
                rewardNumber={customer.rewardNumber}
                active={customer.active}
                atRisk={customer.atRisk}
                totalVisits={customer.totalVisits}
                starsEarned={customer.starsEarned}
                rewardsRedeemed={customer.rewardsRedeemed}
                birthdayMonth={customer.birthdayMonth}
                birthdayDay={customer.birthdayDay}
                birthdayYear={customer.birthdayYear}
                fullBirthday={customer.fullBirthday}
            />
        ))}
        </FlexDiv>
    );
}

export default Customers;