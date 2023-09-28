import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Text from '../../components/subatomic/Text';
import Button from '../../components/atoms/Button';
import styled from 'styled-components';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Colors from '@/constants/Colors';
import GlobalStyle from '../../GlobalStyle'
import { useStore, AppState } from '../../store/store';
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import BottomSaveNotice from '@/components/molecules/BottomSaveNotice';
import io from "socket.io-client";
import { CustomerData } from '@/types/CustomerData';
import { IOSBackIcon } from '@/components/subatomic/Icons/IOSBackIcon';
import DataCard from '@/components/atoms/DataCard';
import CustomerVisit from '@/components/molecules/CustomerVisit';
import { VisitType } from '@/components/molecules/CustomerVisit';
import { VisitData } from '@/types/VisitData';
import EditCustomerForm from '@/components/organism/EditCustomerForm';
import Overlay from '@/components/atoms/Overlay';

interface CustomerInfoProps {
    customer: CustomerData | null;
    ranking: {
        rank: number;
        totalCustomers: number;
    } | null;
}


const FlexDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100vw;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        padding: 24px 16px;
        box-sizing: border-box;
    }
`

const TopSection = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
        align-self: stretch;
    }
`

const TopNavigation = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }
`

const BackIconDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 40px;
        height: 40px;

        svg {
            height: 100%;
            width: 100%;
        }
    }
`

const TopButtonDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
    }
`

const TopCustomerInfo = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;

        p {
            color: ${Colors.neutral600};
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
        }
    }
`

const CustomerInfoDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral700};
        }
    }
`

const BottomSection = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 48px;
        align-self: stretch;
    }
`

const CustomerStatistics = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
    }
`

const CustomerStatisticsLabel = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;

        p {
            font-size: 20px;
            font-weight: 800;
            line-height: 24px; 
            color: ${Colors.neutral600};
        }
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

const EditCustomerButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
    }
`

const CustomerRecentActivity = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
    }
`

const RecentActivityLabel = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
    }
`

const VisitsPlusCTA = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        align-self: stretch;
    }
`

const CustomerVisitCells = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
    }
`

export async function getServerSideProps(context: any) {
    const { customerid } = context.params;
    try {
        const customerResponse = await fetch(`http://localhost:5000/customers/${customerid}`);
        const rankingResponse = await fetch(`http://localhost:5000/customers/${customerid}/ranking`);

        if (!customerResponse.ok || !rankingResponse.ok) {
            throw new Error('Failed to fetch data');
        }

        const customer: CustomerData = await customerResponse.json();
        const ranking = await rankingResponse.json();

        return {
            props: {
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

function generateVisitInfoText(visit: VisitData): string {
    switch (visit.visitType) {
        case 'New User':
            return `${visit.customerName} signed up on ${new Date(visit.date).toLocaleDateString()}`;
        case 'Reward':
            return `${visit.customerName} redeemed a reward on ${new Date(visit.date).toLocaleDateString()}`;
        case 'Purchase':
            return `${visit.customerName} made a purchase on ${new Date(visit.date).toLocaleDateString()}`;
        case 'Birthday':
            return `${visit.customerName} received a birthday reward on ${new Date(visit.date).toLocaleDateString()}`;
        default:
            return visit.visitid;  // fallback to provided infoText
    }
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ customer, ranking }) => {
    const [showEditForm, setShowEditForm] = useState<boolean>(false);
    const { 
        data, fetchData, toast,
      } = useStore((state: AppState) => state);

      useEffect(() => {
        fetchData();
      }, []);

    if (!customer) {
        return <p>Loading...</p>;
    }

    return (
        <FlexDiv>
            <AnimatePresence>
                {
                    showEditForm && <EditCustomerForm onClose={() => setShowEditForm(false)} customer={customer} />
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
                    <BackIconDiv>
                        <IOSBackIcon fill={Colors.neutral700} />
                    </BackIconDiv>
                    <TopButtonDiv>
                        <Button
                            buttonTypeVariant="primary"
                            sizeVariant='large'
                            label="Process Transaction"
                            buttonWidthVariant='content'
                            onClick={() => console.log('Process Transaction')}
                        />
                    </TopButtonDiv>
                </TopNavigation>
                <TopCustomerInfo>
                    <Text
                        text={customer.fullName}
                    />
                    <CustomerInfoDiv>
                        <Text
                            text={formatPhoneNumber(customer.fullPhoneNumber)}
                        />
                        <Text
                            text={customer.fullBirthday}
                        />
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
                                number1={customer.totalVisits.toString()}
                                number2=''
                            />
                        </DataCardsRow>
                        <DataCardsRow>
                            <DataCard
                                label='Points'
                                number1={customer.starsEarned.toString()}
                                number2=''
                            />
                            <DataCard
                                label='Rewards Redeemed'
                                number1={customer.rewardsRedeemed.toString()}
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
                            visitInfoText={generateVisitInfoText(visit)}
                        />
                    ))}
                </CustomerVisitCells>
                </CustomerRecentActivity>
            </BottomSection>
        </FlexDiv>
    );
};

export default CustomerInfo;



