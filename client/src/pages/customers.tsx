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
import MessageCell from '@/components/molecules/MessageCell';


interface CustomerProps {
    customersData: CustomerData[];
    receivedBlastsData: BlastMessageData[];
    visitsData: VisitData[];
    sentMessagesData: SentMessageData[];
}

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 40px;
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

        console.log(customersData, receivedBlastsData, sentMessagesData, visitsData);


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
    console.log(customersData)
    console.log(receivedBlastsData)
    console.log(visitsData)
    console.log(sentMessagesData)

    return (
        <FlexDiv>
            <p>Customers data is going here!!!</p>
        </FlexDiv>
    );
}

export default Customers;