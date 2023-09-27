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
import { IOSBackIcon } from '@/components/subatomic/Icons/IOSBackIcon';
import DataCard from '@/components/atoms/DataCard';
import CustomerVisit from '@/components/molecules/CustomerVisit';
import { VisitType } from '@/components/molecules/CustomerVisit';
import { VisitData } from '@/types/VisitData';

interface ProcessTransactionCustomerProps {
    customer: CustomerData | null;
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
    }
`;

const PTCPillBar = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        gap: 8px;
    }
`;

const PTCPill = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        height: 40px;
        padding: 0px 20px;
        justify-content: center;
        align-items: center;
        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
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



export async function getServerSideProps(context: any) {
    const { customerid } = context.params;
    try {
        const customerResponse = await fetch(`http://localhost:5000/customers/${customerid}`);

        if (!customerResponse.ok) {
            throw new Error('Failed to fetch data');
        }

        const customer: CustomerData = await customerResponse.json();

        return {
            props: {
                customer,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                customer: null,
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

const ProcessTransactionCustomer: React.FC<ProcessTransactionCustomerProps> = ({ customer }) => {
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

    return (
        <FlexDiv>
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
                <PTCPillBar>
                    <PTCPill>
                        <p>Give Points</p>
                    </PTCPill>
                    <PTCPill>
                        <p>Redeem Rewards</p>
                    </PTCPill>
                </PTCPillBar>
                <PTCFieldsAndButton>
                    <PTCFields>
                    </PTCFields>
                    <Button
                        label="Process Transaction"
                        onClick={() => console.log('clicked')}
                    />
                </PTCFieldsAndButton>
                </PTCBottomContent>
        </FlexDiv>
    );
};

export default ProcessTransactionCustomer;