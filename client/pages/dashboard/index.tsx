import Text from '../../src/components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../../src/constants/StyledMediaQuery';
import Button from '../../src/components/atoms/Button';
import Colors from '@/constants/Colors';
import React, { FC, useState, useEffect, useCallback } from 'react';
import GlobalStyle from '../../src/GlobalStyle';
import { useStore, AppState, fetchData, UserData, initialData } from '../../src/store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import BottomSaveNotice from '@/components/molecules/BottomSaveNotice';
import io from "socket.io-client";
import DataCard from '@/components/atoms/DataCard';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import PillBar from '@/components/molecules/PillBar';
import { DropdownOption } from '@/components/atoms/DropdownField';
import DropdownField from '@/components/atoms/DropdownField';
import { useMemberAuth } from '../../src/util/global/globalHooks';
import { GetServerSidePropsContext } from 'next';
import Cookie from 'js-cookie';
import { FlexDiv, DashboardContent, PageTitle, DataCards, DataCardsRow, ScrollableContainer, PillsPlusDataCards, DataCardsDataCharts, Div, DataCharts, DataBarChatContainer, DoughnutContainer, DropdownContainer } from '../../src/pagesource/dashboard/styles';

  
type DailyVisit = {
    year: number;
    month: number;
    day: number;
    count: number;
    totalRewards: number;
};

type WeeklyVisit = {
    year: number;
    week: number;
    count: number;
    totalRewards?: number;
};

type MonthlyVisit = {
    year: number;
    month: number;
    count: number;
    totalRewards?: number;
};


type DashboardData = {
    totalCustomers?: number;
    totalVisits?: number;
    rewardsRedeemed?: number;
    totalPoints?: number;
    smsBlastsSent?: number;
    dailyCustomers?: number;
    dailyVisits?: {
        year: number;
        month: number;
        day: number;
        count: number;
        totalRewards: number;
    }[];
    weeklyVisits?: {
        year: number;
        week: number;
        count: number;
        totalRewards?: number;
    }[];
    monthlyVisits?: {
        year: number;
        month: number;
        count: number;
        totalRewards?: number;
    }[];
};

interface DashboardProps {
    userData: UserData;
    initialDashboardData: DashboardData | null;
}

interface DoughnutChartData {
    labels: string[];
    datasets: {
        data: number[];
        backgroundColor: string[];
        hoverOffset: number;
    }[];
}

interface DoughnutChartComponentProps {
    data: DoughnutChartData;
}

interface BarChartProps {
    dailyVisits: DailyVisit[];
    weeklyVisits: WeeklyVisit[];
    monthlyVisits: MonthlyVisit[];
}

const timelineFilterOptions: DropdownOption[] = [
    { label: "All Time", value: "allTime" },
    { label: "Within Last Week", value: "lastWeek" },
    { label: "Within Last 2 Weeks", value: "last2Weeks" },
    { label: "Within Last Month", value: "lastMonth" },
    { label: "Within Last 3 Months", value: "last3Months" },
    { label: "Within Last 6 Months", value: "last6Months" },
    { label: "Within Last Year", value: "lastYear" }
  ];

  export async function getServerSideProps(context: GetServerSidePropsContext) {
    const userCookie = context.req.cookies.user;
    let userData: UserData = initialData;
    const defaultActiveOption = 'Transactions';

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
            props: {
                error: "no user data", // Move the "error" key under "props"
                notFound: true
            }
        };
    }

    try {
        const userId = userData.userid;
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${apiUrl}/api/dashboard?userId=${userId}&activeOption=${defaultActiveOption}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const dashboardData = await response.json();

        return {
            props: {
                userData: userData,
                initialDashboardData: dashboardData
            }
        };
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return {
            props: {
                error: 'Error fetching dashboard data',
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
ChartJS.defaults.backgroundColor = '#7AC1FF'
ChartJS.defaults.font.size = 14;
ChartJS.defaults.borderColor = 'rgba(54, 162, 235, 0)';


function generateBarChartDataForMonth(weeklyVisits: WeeklyVisit[], weeks: number, propertyName: keyof WeeklyVisit): WeeklyVisit[] {
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
            count: 0,  // default value
            totalRewards: 0
        };
    });


    pastWeeks.forEach(week => {
        const matchingVisit = weeklyVisits.find(
            visit => visit.year === week.year && visit.week === week.week
        );
        if (matchingVisit && matchingVisit[propertyName] !== undefined) {
            week[propertyName] = matchingVisit[propertyName] as number; // you can use type assertion here since you've checked it's not undefined
        } else {
            week[propertyName] = 0; // default value when not found or undefined
        }
    });
    
    return pastWeeks.reverse();
}

function getGradient(ctx: CanvasRenderingContext2D, chartHeight: number, colorStart: string, colorEnd: string): CanvasGradient {
    const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
}


function generateBarChartData(dailyVisits: DailyVisit[], numOfDays: number = 7, propertyName: keyof DailyVisit, ctx?: CanvasRenderingContext2D) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(numOfDays)

    const defaultColor = 'rgba(54, 162, 235, 0.2)';
    const gradientColor = ctx ? getGradient(ctx, ctx.canvas.height, 'rgba(212, 100, 50, 1)', 'rgba(212, 187, 56, 0)') : defaultColor;
    
    // Generate an array of dates for the last numOfDays
    const dates = Array.from({ length: numOfDays }).map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return d.toISOString().split('T')[0]; // YYYY-MM-DD format
    }).reverse();  // Make sure it's in ascending order

    const dataValues = dates.map(date => {
        const entry = dailyVisits.find(item => 
            `${item.year}-${String(item.month).padStart(2, '0')}-${String(item.day).padStart(2, '0')}` === date
        );

        console.log('Date:', date, 'Entry:', entry, 'Property Name:', propertyName, 'Value:', entry ? entry[propertyName] ?? 0 : 0);

        return entry ? entry[propertyName] ?? 0 : 0; // Make sure to use propertyName here
    });

    return {
        labels: dates.map(date => days[new Date(date).getDay()]),
        datasets: [{
            label: 'Visits',
            data: dataValues,
            backgroundColor: '#7AC1FF',
        }]
    };
}

const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: "#8598AD", // Note: fontColor has been changed to color based on newer versions of Chart.js
                font: {
                    size: 14
                }
            }
        }
    },
    scales: {
        y: { // 'y' is the default ID for the y-axis
            ticks: {
                color: "#8598AD", // Note: fontColor has been changed to color
                font: {
                    size: 14
                },
                stepSize: 1,
                beginAtZero: true
            }
        },
        x: { // 'x' is the default ID for the x-axis
            ticks: {
                color: "#8598AD", // Note: fontColor has been changed to color
                font: {
                    size: 14
                },
                stepSize: 1,
                beginAtZero: true
            }
        }
    }
};


function DoughnutChartComponent({ data }: DoughnutChartComponentProps) {
    const doughnutOptions = {
        maintainAspectRatio: false
    };

    return (
        <Div>
            <Doughnut data={data} width={'100%'} height={310} options={doughnutOptions} />
        </Div>
    );
}

function Dashboard({ initialDashboardData, userData }: DashboardProps) {
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(initialDashboardData);
    const { data, fetchData, toast, showToast, hideToast } = useStore();
    const [timeFilter, setTimeFilter] = useState('allTime');
    const [barChartData, setBarChartData] = useState<any | null>(null);
    const [activeOption, setActiveOption] = useState<string>('Transactions');
    const propertyName = activeOption === 'Total Points Given' ? 'totalRewards' : 'count';
    const [doughnutChartData, setDoughnutChartData] = useState<DoughnutChartData | null>(null);
    const { userId } = useMemberAuth();
    const [loading, setLoading] = useState<boolean>(true);

    console.log(activeOption);

    
    const storeData = useStore.getState();
    console.log('Store Data:', storeData);
    console.log('Dashboard Data:', dashboardData);
    console.log(userData)
    
    const companyName = userData?.companyName || 'Company Name';

    const BarChartComponent: React.FC<BarChartProps> = ({ dailyVisits, weeklyVisits, monthlyVisits }) => {
        let labels, dataValues, datasetLabel;

        console.log(dailyVisits)
        console.log(propertyName)

         if (weeklyVisits && weeklyVisits.length > 0) {
            labels = weeklyVisits.map(visit => `Week ${visit.week}`);
            dataValues = weeklyVisits.map(visit => visit[propertyName as keyof WeeklyVisit]);
            datasetLabel = 'Weekly Visits';
        }  else if (monthlyVisits && monthlyVisits.length > 0) {
            labels = monthlyVisits.map((_, idx) => `Month ${idx + 1}`);
            dataValues = monthlyVisits.map(visit => visit[propertyName as keyof MonthlyVisit]);
            datasetLabel = 'Monthly Visits';
        } else {
            labels = dailyVisits.map(visit => `${visit.month}/${visit.day}`);
            dataValues = dailyVisits.map(visit => visit[propertyName as keyof DailyVisit] ?? 0);
            datasetLabel = 'Daily Visits';
        }
    
        const data = {
            labels,
            datasets: [
                {
                    label: datasetLabel,
                    data: dataValues,
                    backgroundColor: '#7AC1FF',
                    // ...rest of the settings
                }
            ]
        };
    
        return <Bar data={data} width={'100%'} height={310} options={chartOptions} />;
    };

    useEffect(() => {
        if ((timeFilter === 'lastWeek' || timeFilter === 'last2Weeks') && dashboardData?.dailyVisits) {
            const numOfDays = timeFilter === 'lastWeek' ? 7 : 14;
            const newData = generateBarChartData(dashboardData.dailyVisits as DailyVisit[], numOfDays, propertyName);
            setBarChartData(newData);
        } else if (timeFilter === 'lastMonth' && dashboardData?.weeklyVisits) {
                const newData = generateBarChartDataForMonth(dashboardData.weeklyVisits, 4, propertyName as keyof WeeklyVisit);
                setBarChartData(newData);
        }  else if (timeFilter === 'last3Months' && dashboardData?.monthlyVisits) {
            const newData = {
                labels: dashboardData.monthlyVisits.map((_, idx) => `Month ${idx + 1}`),
                datasets: [{
                    label: 'Monthly Transactions',
                    data: dashboardData.monthlyVisits.map(visit => visit.count),
                    // ... rest of the settings
                }]
            };
            setBarChartData(newData);
        } else if (timeFilter === 'last6Months' && dashboardData?.monthlyVisits) {
            const newData = {
                labels: dashboardData.monthlyVisits.map((_, idx) => `Month ${idx + 1}`),
                datasets: [{
                    label: 'Monthly Transactions',
                    data: dashboardData.monthlyVisits.map(visit => visit.count),
                    // ... rest of the settings
                }]
            };
            setBarChartData(newData);
        } else if (timeFilter === 'lastYear' && dashboardData?.monthlyVisits) {
            const newData = {
                labels: dashboardData.monthlyVisits.map((_, idx) => `Month ${idx + 1}`),
                datasets: [{
                    label: 'Monthly Transactions',
                    data: dashboardData.monthlyVisits.map(visit => visit.count),
                    // ... rest of the settings
                }]
            };
            setBarChartData(newData);
        }  else if (timeFilter === 'allTime' && dashboardData?.monthlyVisits) {
            const newData = {
                labels: dashboardData.monthlyVisits.map((_, idx) => `Month ${idx + 1}`),
                datasets: [{
                    label: 'Monthly Transactions',
                    data: dashboardData.monthlyVisits.map(visit => visit.count),
                    // ... rest of the settings
                }]
            };
            setBarChartData(newData);
        }    else {
            setBarChartData(null);
        }
    }, [timeFilter, dashboardData, activeOption, propertyName]);
    


    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        if (!apiUrl) {
            throw new Error("API_BASE_URL is not defined");
        }

        const socket = io(apiUrl);
        console.log("Setting up socket connection.");

        // Listen for a hypothetical 'dashboard-updated' event from server
        socket.on("dashboard-updated", (updatedDashboardData) => {
            console.log("Dashboard data received from WebSocket:", updatedDashboardData);
            setDashboardData(updatedDashboardData);
        });

        socket.on('error', (error) => {
            console.error('Socket Error:', error);
        });

        return () => {
            // Cleanup: Disconnect socket when component is unmounted
            socket.off("dashboard-updated"); // stop listening to this specific event
        };
    }, []);

    useEffect(() => {
        if (userId) {
          fetchData(userId);
        }
      }, [fetchData, userId]);



    useEffect(() => {
        console.log(activeOption)
        const fetchDataWithFilter = async () => {
            try {
                setLoading(true);
                const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
                const response = await fetch(`${apiUrl}/api/dashboard?userId=${userData.userid}&timeFilter=${timeFilter}&activeOption=${activeOption}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const updatedData = await response.json()
                setDashboardData(updatedData);
                setDashboardData(updatedData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching dashboard data with filter:', error);
                showToast('Failed to update dashboard data.', 'error');
                setLoading(false);
            }
        };
    
        fetchDataWithFilter();
    }, [userData?.userid, timeFilter, showToast, activeOption]);


    const handleActivePillChange = (activeLabel: string) => {
        setActiveOption(activeLabel);
    };

    useEffect(() => {
        if (barChartData && barChartData.datasets && barChartData.datasets[0]) {
            const doughnutData: DoughnutChartData = {
                labels: barChartData.labels,
                datasets: [{
                    data: barChartData.datasets[0].data,
                    backgroundColor: [
                        '#B8E0FF',
                        '#7AC1FF',
                        '#3D9EFF',
                        '#0177FE',
                        '#0064D6',
                        '#003E84',
                        '#002B5C',
                        '#29323D',
                        '#364B63',
                        '#3D638F',
                        '#597DA6'
                    ],
                    hoverOffset: 4
                }]
            };
            setDoughnutChartData(doughnutData);
        } else {
            setDoughnutChartData(null);
        }
    }, [barChartData]);

    console.log(dashboardData?.totalPoints)

    return (
        <FlexDiv>
            <GlobalStyle />
                <PageTitle>
                    <Text text={companyName} />
                </PageTitle>
                <DashboardContent>
            <DropdownContainer>
                <DropdownField
                    value={timeFilter} 
                    onChange={(value) => setTimeFilter(value)}
                    label="Timeline Filter" 
                    useDefaultDropdown={false} 
                    options={timelineFilterOptions}
                />
            </DropdownContainer>
            <PillsPlusDataCards>
                <ScrollableContainer>
                    <PillBar
                        options={['Transactions', 'Customers', 'Sign-Ups', 'Rewards Redeemed', 'Total Points Given', 'Surveys Completed']}
                        onActiveChange={handleActivePillChange}
                    />
                </ScrollableContainer>
                <DataCardsDataCharts>
                <DataCharts>
            <DataBarChatContainer>
                {
                    (timeFilter === 'lastWeek' || timeFilter === 'last2Weeks' || timeFilter === 'lastMonth' || timeFilter === 'last3Months' || timeFilter === 'last6Months' || timeFilter === 'lastYear'  || timeFilter === 'allTime') && (dashboardData?.dailyVisits || dashboardData?.weeklyVisits || dashboardData?.monthlyVisits) && 
                    <BarChartComponent dailyVisits={dashboardData?.dailyVisits || []} weeklyVisits={dashboardData?.weeklyVisits || []} monthlyVisits={dashboardData?.monthlyVisits || []} />
                }
            </DataBarChatContainer>
            <DoughnutContainer>
                {
                    doughnutChartData && <DoughnutChartComponent data={doughnutChartData} />
                }
            </DoughnutContainer>
            </DataCharts>
            <DataCards>
                <DataCardsRow>
                    <DataCard
                        label='Customers'
                        number1={dashboardData?.totalCustomers?.toString()}
                        number2=''
                    />
                    <DataCard
                        label='Transactions'
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
                        number1={dashboardData?.totalPoints?.toString()}
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
            </DataCardsDataCharts>
            </PillsPlusDataCards>
            </DashboardContent>
        </FlexDiv>
    );
}

export default Dashboard;