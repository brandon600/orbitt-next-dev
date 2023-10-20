import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Text from '../../../src/components/subatomic/Text';
import Button from '../../../src/components/atoms/Button';
import styled from 'styled-components';
import StyledMediaQuery from '../../../src/constants/StyledMediaQuery';
import Colors from '@/constants/Colors';
import GlobalStyle from '../../../src/GlobalStyle'
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
import { useStore, AppState, UserData, initialData, fetchData } from '../../../src/store/store'; // Import your store
import { useMemberAuth } from '../../../src/util/global/globalHooks';
import { FlexDiv, PTCContent, PTCTopContent, PTCBackButton, PTCAllCustomerInfo, PTCTopCustomerInfo, TopCustomerInfoName, TopCustomerInfoCI, TCINumber, TCIBirthday, PTCCustomerPointInfo, CustomerPointInfoAvailable, CustomerPointInfoVisits, PTCBottomContent, PTCFieldsAndButton, PTCFields, PTCOption } from '../../../src/pagesource/process-transaction-customer/customerid/styles';

interface ProcessTransactionCustomerProps {
    customer: CustomerData | null;
    rewardsData: RewardData[];
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

export async function getServerSideProps(context: any) {
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

    const { customerid } = context.params;
    const userId = userData.userid;
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    try {
        const customerResponse = await fetch(`${apiUrl}/customers/${customerid}?userId=${userId}`);
        if (!customerResponse.ok) {
            throw new Error('Failed to fetch data');
        }
        const customer: CustomerData = await customerResponse.json();

        const rewardsResponse = await fetch(`${apiUrl}/current-active-rewards?userId=${userId}`);

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
    const { userId } = useMemberAuth();
    const { data, fetchData, toast, showToast, hideToast } = useStore();
    useBodyScrollLock(isModalOpen);

    useEffect(() => {
        if (userId) {
          fetchData(userId);
        }
      }, [fetchData, userId]);

    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    }

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

    return (
        <FlexDiv>
            <AnimatePresence>
            { (isModalOpen) && 
                <ProcessTransactionModal
                       isOpen={isModalOpen} 
                       onClose={closeModal} 
                       customer={customer}
                       mode={modalMode}
                       reward={selectedReward}
                       pointsGive={pointsGive}
                       transactionDetails={transactionDetails}
                />}
            </AnimatePresence>
            <AnimatePresence>
                { (isModalOpen) && <Overlay />}
            </AnimatePresence>
            <AnimatePresence>
                {toast.visible && (
                    <Toast key="toast" />
                )}
            </AnimatePresence>
            <GlobalStyle />
            <PTCContent>
            <PTCTopContent>
                <PTCBackButton
                    onClick={handleGoBack}
                >
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
                            <TCINumber>
                                <p>{formattedPhoneNumber}</p>
                            </TCINumber>
                            <TCIBirthday>
                                <p>{formattedBirthday}</p>
                            </TCIBirthday>
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
                </PTCContent>
        </FlexDiv>
    );
};

export default ProcessTransactionCustomer;