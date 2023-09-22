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
import DataCard from '@/components/atoms/DataCard';





interface DashboardProps {
    initialDashboardData: {
        totalCustomers?: number,
        totalVisits?: number,
        rewardsRedeemed?: number,
        totalPointsGiven?: number,
        smsBlastsSent?: number,
        dailyCustomers?: { _id: string; count: number }[]; 
    }
}

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 24px 16px;
    box-sizing: border-box;
    background: ${Colors.primary100};
}
`

const DataCards = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;
    }
`

const DataCardsRow = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        justify-content: space-between;
        width: 100%;
    }
`

export async function getServerSideProps() {
    try {
        const response = await fetch('http://localhost:5000/api/dashboard');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const dashboardData = await response.json();

        return {
            props: {
                initialDashboardData: dashboardData
            }
        };
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return {
            props: {
                initialDashboardData: null
            }
        };
    }
}

function Dashboard({ initialDashboardData }: DashboardProps) {
    const [dashboardData, setDashboardData] = useState(initialDashboardData);
    const { data, fetchData, toast, showToast, hideToast } = useStore();
    const [timeFilter, setTimeFilter] = useState('allTime');
    
    const storeData = useStore.getState();
    console.log('Store Data:', storeData);

    console.log('Dashboard Data:', dashboardData);

    useEffect(() => {
        const socket = io("http://localhost:5000");
        console.log("Setting up socket connection.");

        // Listen for a hypothetical 'dashboard-updated' event from server
        socket.on("dashboard-updated", (updatedDashboardData) => {
            console.log("Dashboard data received from WebSocket:", updatedDashboardData);
            setDashboardData(updatedDashboardData);
        });

        return () => {
            // Cleanup: Disconnect socket when component is unmounted
            socket.off("dashboard-updated"); // stop listening to this specific event
        };
    }, []);


    useEffect(() => {
        const fetchDataWithFilter = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/dashboard?timeFilter=${timeFilter}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const updatedData = await response.json();
                setDashboardData(updatedData);
            } catch (error) {
                console.error('Error fetching dashboard data with filter:', error);
                showToast('Failed to update dashboard data.', 'error');
            }
        };
    
        fetchDataWithFilter();
    }, [timeFilter, showToast]);

    return (
        <FlexDiv>
            <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
                <option value="allTime">All Time</option>
                <option value="lastWeek">Within Last Week</option>
                <option value="last2Weeks">Within Last 2 Weeks</option>
                <option value="lastMonth">Within Last Month</option>
                <option value="last3Months">Within Last 3 Months</option>
                <option value="last6Months">Within Last 6 Months</option>
                <option value="lastYear">Within Last Year</option>
            </select>
            <DataCards>
                <DataCardsRow>
                    <DataCard
                        label='Customers'
                        number1={dashboardData.totalCustomers?.toString()}
                        number2=''
                    />
                    <DataCard
                        label='Trasnactions'
                        number1={dashboardData.totalVisits?.toString()}
                        number2=''
                    />
                </DataCardsRow>
                <DataCardsRow>
                    <DataCard
                        label='Rewards Redeemed'
                        number1={dashboardData.rewardsRedeemed?.toString()}
                        number2=''
                    />
                    <DataCard
                        label='Points Given'
                        number1={dashboardData.totalPointsGiven?.toString()}
                        number2=''
                    />
                </DataCardsRow>
                <DataCardsRow>
                    <DataCard
                        label='SMS Blasts Sent'
                        number1={dashboardData.smsBlastsSent?.toString()}
                        number2=''
                    />
                    <DataCard
                        label='Surveys Completed'
                        number1={dashboardData.totalCustomers?.toString()}
                        number2=''
                    />
                </DataCardsRow>
            </DataCards>
        </FlexDiv>
    );
}

export default Dashboard;