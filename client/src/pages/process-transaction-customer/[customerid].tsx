import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Text from '../../components/subatomic/Text';
import Button from '../../components/atoms/Button';
import styled from 'styled-components';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Colors from '@/constants/Colors';
import GlobalStyle from '../../GlobalStyle'
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import BottomSaveNotice from '@/components/molecules/BottomSaveNotice';
import io from "socket.io-client";
import { CustomerData } from '@/types/CustomerData';
import { RewardData } from '@/types/RewardData';
import { IOSBackIcon } from '@/components/subatomic/Icons/IOSBackIcon';
import DataCard from '@/components/atoms/DataCard';
import CustomerVisit from '@/components/molecules/CustomerVisit';
import { VisitType } from '@/components/molecules/CustomerVisit';
import { VisitData } from '@/types/VisitData';
import PillBar from '@/components/molecules/PillBar';
import RedeemRewardCard from '@/components/molecules/RedeemRewardCard';
import ProcessTransactionModal from '@/components/molecules/ProcessTransactionModal';
import Overlay from '@/components/atoms/Overlay';
import InputField from '@/components/atoms/InputField';
import Textarea from '@/components/atoms/Textarea';
import { useStore, AppState } from '../../store/store'; // Import your store

interface ProcessTransactionCustomerProps {
    customer: CustomerData | null;
    rewardsData: RewardData[];
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
`;

const PTCTopContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 24px;
    }
`;

const PTCBackButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 40px;
        height: 40px;
        
        svg {
            width: 100%;
            height: 100%;
        }
    }
`;

const PTCAllCustomerInfo = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`;

const PTCTopCustomerInfo = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

const TopCustomerInfoName = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral600};
        p {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
        }
    }
`;

const TopCustomerInfoCI = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: ${Colors.neutral700};
        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    }
`;

const PTCCustomerPointInfo = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

const CustomerPointInfoAvailable = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.warning500};
        p {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
        }
    }
`;

const CustomerPointInfoVisits = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral500};
        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
        }
    }
`;

const PTCBottomContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
    }
`;

const PTCFieldsAndButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;

const PTCFields = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`;

const PTCOption = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
    }
`;



export async function getServerSideProps(context: any) {
    const { customerid } = context.params;
    try {
        const customerResponse = await fetch(`http://localhost:5000/customers/${customerid}`);
        if (!customerResponse.ok) {
            throw new Error('Failed to fetch data');
        }
        const customer: CustomerData = await customerResponse.json();

        const rewardsResponse = await fetch('http://localhost:5000/current-active-rewards');

        if (!rewardsResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const rewardsData = await rewardsResponse.json();

        return {
            props: {
                customer,
                rewardsData,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                customer: null,
                rewardsData: [],
            },
        };
    }
}


function formatPhoneNumber(number: string) {
    const strNum = number
    
    if (strNum.length !== 11) {
        return "Invalid Number";
    }

    const areaCode = strNum.substring(1, 4);  // get the digits for area code
    const centralOfficeCode = strNum.substring(4, 7); // get the next three digits
    const stationCode = strNum.substring(7); // get the last four digits

    return `(${areaCode}) ${centralOfficeCode}-${stationCode}`;
}


const ProcessTransactionCustomer: React.FC<ProcessTransactionCustomerProps> = ({ customer, rewardsData }) => {
    const [activeOption, setActiveOption] = useState<string>('Give Points');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'givePoints' | 'redeemReward' | undefined>('givePoints');
    const [selectedReward, setSelectedReward] = useState<RewardData | undefined>();
    const [pointsGive, setPointsGive] = useState<string>('');
    const [pointsGiveValid, setPointsGiveValid] = useState<boolean>(false);
    const [transactionDetails, setTransactionDetails] = useState<string>('');
    const { data, fetchData, toast, showToast, hideToast } = useStore();



    const handleActivePillChange = (activeLabel: string) => {
        setActiveOption(activeLabel);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalMode(undefined);
    };

    if (!customer) {
        return <p>Loading...</p>;
    }

    let formattedPhoneNumber;
    let formattedBirthday;
    
    if (customer) {
        formattedPhoneNumber = formatPhoneNumber(customer.fullPhoneNumber);
    }

    if (customer.fullBirthday !== null || customer.fullBirthday !== '') {
        formattedBirthday = customer.fullBirthday;
    } else {
        formattedBirthday = 'N/A';
    }

    console.log(rewardsData);
    const sortedRewardsData = [...rewardsData].sort((a, b) => a.rewardCost - b.rewardCost);


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <FlexDiv>
                <ProcessTransactionModal
                       isOpen={isModalOpen} 
                       onClose={closeModal} 
                       customer={customer}
                       mode={modalMode}
                       reward={selectedReward}
                       pointsGive={pointsGive}
                       transactionDetails={transactionDetails}
                />
                { (isModalOpen) && <Overlay />}
            <GlobalStyle />
            <PTCTopContent>
                <PTCBackButton>
                    <IOSBackIcon 
                        fill={Colors.neutral700}
                    />
                </PTCBackButton>
                <PTCAllCustomerInfo>
                    <PTCTopCustomerInfo>
                        <TopCustomerInfoName>
                            <p>{customer.fullName}</p>
                        </TopCustomerInfoName>
                        <TopCustomerInfoCI>
                            <p>{formattedPhoneNumber}</p>
                            <p>{formattedBirthday}</p>
                        </TopCustomerInfoCI>
                    </PTCTopCustomerInfo>
                    <PTCCustomerPointInfo>
                        <CustomerPointInfoAvailable>
                            <p>{`${customer.rewardNumber} Points Available`}</p>
                        </CustomerPointInfoAvailable>
                        <CustomerPointInfoVisits>
                            <p>{`${customer.totalVisits} Total Visits`}</p>
                        </CustomerPointInfoVisits>
                    </PTCCustomerPointInfo>
                </PTCAllCustomerInfo>
            </PTCTopContent>
            <PTCBottomContent>
                <PillBar
                        options={['Give Points', 'Redeem Rewards', /* ... other labels ... */]}
                        onActiveChange={handleActivePillChange}
                    />
              <PTCOption>
              {
                    activeOption === 'Give Points' ? 
                    <PTCFieldsAndButton>
                    <PTCFields>
                        <InputField
                            label="Enter the number of points you'd like to give the customer for this purchase."
                            value={pointsGive}
                            onChange={(value) => {
                                setPointsGive(value);
                                setPointsGiveValid(value === '' || !isNaN(Number(value)));
                            }}
                            placeholder='Ex: 1'
                        />
                        <Textarea
                            label='Enter details/notes about this purchase.'
                            value={transactionDetails}
                            onChange={(value) => setTransactionDetails(value)}
                            placeholder='Ex: Customer purchased a large coffee and a breakfast sandwich.'
                        />
                    </PTCFields>
                    <Button
                        label="Process Transaction"
                        onClick={() => {
                            setModalMode('givePoints');
                            setIsModalOpen(true);
                        }}
                    />
                </PTCFieldsAndButton> 
                : 
                    activeOption === 'Redeem Rewards' ?
                    sortedRewardsData.map(reward => 
                        <RedeemRewardCard 
                            key={reward.id}
                            reward={reward} 
                            customerPoints={customer.rewardNumber}
                            onClick={(selectedReward: RewardData) => {
                                setModalMode('redeemReward');
                                setSelectedReward(selectedReward);
                                setIsModalOpen(true);
                            }}
                        />
                    ) :
                    null
                }
                </PTCOption>
                </PTCBottomContent>
        </FlexDiv>
    );
};

export default ProcessTransactionCustomer;