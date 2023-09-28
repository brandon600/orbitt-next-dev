import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import Colors from '@/constants/Colors';
import React, { FC, useState, useEffect, useCallback } from 'react';
import GlobalStyle from '../GlobalStyle';
import { useStore, AppState } from '../store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import BottomSaveNotice from '@/components/molecules/BottomSaveNotice';
import io from "socket.io-client";
import DataCard from '@/components/atoms/DataCard';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import PillBar from '@/components/molecules/PillBar';

  
type DailyVisit = {
    year: number;
    month: number;
    day: number;
    count: number;
};

type WeeklyVisit = {
    year: number;
    week: number;
    count: number;
};

type MonthlyVisit = {
    year: number;
    month: number;
    count: number;
};


type DashboardData = {
    totalCustomers?: number;
    totalVisits?: number;
    rewardsRedeemed?: number;
    totalPointsGiven?: number;
    smsBlastsSent?: number;
    dailyCustomers?: number;
    dailyVisits?: {
        year: number;
        month: number;
        day: number;
        count: number;
    }[];
    weeklyVisits?: {
        year: number;
        week: number;
        count: number;
    }[];
    monthlyVisits?: {
        year: number;
        month: number;
        count: number;
    }[];
};

interface DashboardProps {
    initialDashboardData: DashboardData | null;
}

interface BarChartProps {
    dailyVisits: DailyVisit[];
    weeklyVisits: WeeklyVisit[];
    monthlyVisits: MonthlyVisit[];
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

export function getWeek(date: Date): number {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
}


ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


function generateBarChartDataForMonth(weeklyVisits: WeeklyVisit[], weeks: number): WeeklyVisit[] {
    const currentWeek = getWeek(new Date());
    const currentYear = new Date().getFullYear();
    const pastWeeks: WeeklyVisit[] = Array.from({ length: weeks }).map((_, i) => {
        let year = currentYear;
        let week = currentWeek - i;

        if (week <= 0) {
            week = 52 + week; // We consider 52 weeks in a year for simplicity
            year -= 1;       // Move to the previous year
        }

        return {
            year,
            week,
            count: 0  // default value
        };
    });

    pastWeeks.forEach(week => {
        const matchingVisit = weeklyVisits.find(
            visit => visit.year === week.year && visit.week === week.week
        );
        if (matchingVisit) {
            week.count = matchingVisit.count;
        }
    });

    return pastWeeks.reverse();
}


function generateBarChartData(dailyVisits: DailyVisit[], numOfDays: number = 7) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(numOfDays)
    
    // Generate an array of dates for the last numOfDays
    const dates = Array.from({ length: numOfDays }).map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return d.toISOString().split('T')[0]; // YYYY-MM-DD format
    }).reverse();  // Make sure it's in ascending order

    const counts = dates.map(date => {
        const entry = dailyVisits.find(item => `${item.year}-${String(item.month).padStart(2, '0')}-${String(item.day).padStart(2, '0')}` === date);
        return entry ? entry.count : 0;
    });

    return {
        labels: dates.map(date => days[new Date(date).getDay()]),
        datasets: [{
            label: 'Visits',
            data: counts,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };
}


function DoughnutChartComponent() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <div>
            <Doughnut data={data} />
        </div>
    );
}

function Dashboard({ initialDashboardData }: DashboardProps) {
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(initialDashboardData);
    const { data, fetchData, toast, showToast, hideToast } = useStore();
    const [timeFilter, setTimeFilter] = useState('allTime');
    const [barChartData, setBarChartData] = useState<any | null>(null);
    const [activeOption, setActiveOption] = useState<string>('Visits');

    
    const storeData = useStore.getState();
    console.log('Store Data:', storeData);

    console.log('Dashboard Data:', dashboardData);

    const BarChartComponent: React.FC<BarChartProps> = ({ dailyVisits, weeklyVisits, monthlyVisits }) => {
        let labels, dataValues;

        console.log(dailyVisits);
        console.log(weeklyVisits);
    
        if (weeklyVisits && weeklyVisits.length > 0) {
            labels = weeklyVisits.map(visit => `Week ${visit.week}`);
            dataValues = weeklyVisits.map(visit => visit.count);
        }   else if (monthlyVisits && monthlyVisits.length > 0) {
            labels = monthlyVisits.map((_, idx) => `Month ${idx + 1}`);
            dataValues = monthlyVisits.map(visit => visit.count);
        } else {
            labels = dailyVisits.map(visit => `${visit.month}/${visit.day}`);
            dataValues = dailyVisits.map(visit => visit.count);
        }
    
        const data = {
            labels,
            datasets: [
                {
                    label: weeklyVisits ? 'Weekly Visits' : 'Daily Visits',
                    data: dataValues,
                    // ...rest of the settings
                }
            ]
        };
    
        return <Bar data={data} />;
    };

    useEffect(() => {
        if ((timeFilter === 'lastWeek' || timeFilter === 'last2Weeks') && dashboardData?.dailyVisits) {
            const numOfDays = timeFilter === 'lastWeek' ? 7 : 14;
            const newData = generateBarChartData(dashboardData.dailyVisits as DailyVisit[], numOfDays);
            setBarChartData(newData);
        } else if (timeFilter === 'lastMonth' && dashboardData?.weeklyVisits) {
            const newData = generateBarChartDataForMonth(dashboardData.weeklyVisits as WeeklyVisit[], 4);
            setBarChartData(newData);
        }    else if (timeFilter === 'last3Months' && dashboardData?.monthlyVisits) {
            const newData = {
                labels: dashboardData.monthlyVisits.map((_, idx) => `Month ${idx + 1}`),
                datasets: [{
                    label: 'Monthly Visits',
                    data: dashboardData.monthlyVisits.map(visit => visit.count),
                    // ... rest of the settings
                }]
            };
            setBarChartData(newData);
        } else if (timeFilter === 'last6Months' && dashboardData?.monthlyVisits) {
            const newData = {
                labels: dashboardData.monthlyVisits.map((_, idx) => `Month ${idx + 1}`),
                datasets: [{
                    label: 'Monthly Visits',
                    data: dashboardData.monthlyVisits.map(visit => visit.count),
                    // ... rest of the settings
                }]
            };
            setBarChartData(newData);
        } else if (timeFilter === 'lastYear' && dashboardData?.monthlyVisits) {
            const newData = {
                labels: dashboardData.monthlyVisits.map((_, idx) => `Month ${idx + 1}`),
                datasets: [{
                    label: 'Monthly Visits',
                    data: dashboardData.monthlyVisits.map(visit => visit.count),
                    // ... rest of the settings
                }]
            };
            setBarChartData(newData);
        }  else if (timeFilter === 'allTime' && dashboardData?.monthlyVisits) {
            const newData = {
                labels: dashboardData.monthlyVisits.map((_, idx) => `Month ${idx + 1}`),
                datasets: [{
                    label: 'Monthly Visits',
                    data: dashboardData.monthlyVisits.map(visit => visit.count),
                    // ... rest of the settings
                }]
            };
            setBarChartData(newData);
        }    else {
            setBarChartData(null);
        }
    }, [timeFilter, dashboardData]);
    




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


    const handleActivePillChange = (activeLabel: string) => {
        setActiveOption(activeLabel);
    };


    return (
        <FlexDiv>
            {
                (timeFilter === 'lastWeek' || timeFilter === 'last2Weeks' || timeFilter === 'lastMonth' || timeFilter === 'last3Months' || timeFilter === 'last6Months' || timeFilter === 'lastYear'  || timeFilter === 'allTime') && (dashboardData?.dailyVisits || dashboardData?.weeklyVisits || dashboardData?.monthlyVisits) && 
                <BarChartComponent dailyVisits={dashboardData?.dailyVisits || []} weeklyVisits={dashboardData?.weeklyVisits || []} monthlyVisits={dashboardData?.monthlyVisits || []} />
            }
            <DoughnutChartComponent />
            <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
                <option value="allTime">All Time</option>
                <option value="lastWeek">Within Last Week</option>
                <option value="last2Weeks">Within Last 2 Weeks</option>
                <option value="lastMonth">Within Last Month</option>
                <option value="last3Months">Within Last 3 Months</option>
                <option value="last6Months">Within Last 6 Months</option>
                <option value="lastYear">Within Last Year</option>
            </select>
                <PillBar
                        options={['Visits', 'Customers', /* ... other labels ... */]}
                        onActiveChange={handleActivePillChange}
                    />
            <DataCards>
                <DataCardsRow>
                    <DataCard
                        label='Customers'
                        number1={dashboardData?.totalCustomers?.toString()}
                        number2=''
                    />
                    <DataCard
                        label='Trasnactions'
                        number1={dashboardData?.totalVisits?.toString()}
                        number2=''
                    />
                </DataCardsRow>
                <DataCardsRow>
                    <DataCard
                        label='Rewards Redeemed'
                        number1={dashboardData?.rewardsRedeemed?.toString()}
                        number2=''
                    />
                    <DataCard
                        label='Points Given'
                        number1={dashboardData?.totalPointsGiven?.toString()}
                        number2=''
                    />
                </DataCardsRow>
                <DataCardsRow>
                    <DataCard
                        label='SMS Blasts Sent'
                        number1={dashboardData?.smsBlastsSent?.toString()}
                        number2=''
                    />
                    <DataCard
                        label='Surveys Completed'
                        number1={dashboardData?.totalCustomers?.toString()}
                        number2=''
                    />
                </DataCardsRow>
            </DataCards>
        </FlexDiv>
    );
}

export default Dashboard;