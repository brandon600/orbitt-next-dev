import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
import { CustomerData } from '@/types/CustomerData';

// Define the props interface for RewardItem
interface CustomerCellProps extends CustomerData {
    onCustomerSelection: (customerId: string, isSelected: boolean) => void;
    isSelected: boolean;
}

const CustomerCellContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        padding: 20px 0px;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid ${Colors.neutral200};
    }

    @media ${StyledMediaQuery.S} {
        gap: 16px;
    }

    @media ${StyledMediaQuery.L} {
        gap: 24px;
    }
`

const CustomerCellCheckboxNameNumber = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        flex: 1 0 0;
    }

    @media ${StyledMediaQuery.S} {
        gap: 16px;
    }

    @media ${StyledMediaQuery.L} {
        align-items: center;
    }
`

const CustomerCellCheckbox = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 24px;
        height: 24px;
        background: ${Colors.neutral200};
        border-radius: 4px;
    }

    input {
        margin: 0px;
        width: 100%;
        height: 100%;
    }
`

//Mobile only styled components
const MobileNameNumber = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        flex: 1 0 0;

        h4 {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral700};
        }

        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            color: ${Colors.neutral400};
        }
    }

    @media ${StyledMediaQuery.S} {
        h4 {
            font-size: 20px;
            line-height: 24px;
        }
    }

    @media ${StyledMediaQuery.L} {
        display: none;
    }
`

//Desktop Only Styled Components
const CustomerName = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
        flex: 1 0 0;
    }

    @media ${StyledMediaQuery.L} {
        display: flex;

        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 32px;
            color: ${Colors.neutral700};
        }
    }
`

const CustomerPhoneNumber = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
    }

    @media ${StyledMediaQuery.L} {
        display: flex;
        width: 120px;

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
            color: ${Colors.neutral700};
        }
    }
`

const CustomerBirthday = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
    }

    @media ${StyledMediaQuery.L} {
        display: flex;
        width: 104px;

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
            color: ${Colors.neutral700};
        }
    }
`

const RemainingContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    @media ${StyledMediaQuery.S} {
        gap: 16px;
    }

    @media ${StyledMediaQuery.L} {
        gap: 24px;
    }
`

const RCPoints = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 56px;

        p {
            font-size: 24px;
            font-weight: 500;
            line-height: 29px;
            color: ${Colors.neutral700};
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 16px;
            line-height: 19px;
        }
    }

    @media ${StyledMediaQuery.L} {
        width: 48px;
    }
`

const RCVisits = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
        width: 56px;
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        p {
            font-size: 16px;
            line-height: 19px;
            color: ${Colors.neutral700};
        }
    }

    @media ${StyledMediaQuery.L} {
        width: 48px;
    }
`

const RCSUDate = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
        width: 92px;
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        p {
            font-size: 16px;
            line-height: 19px;
            color: ${Colors.neutral700};
        }
    }
`

const RCLTDate = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
        width: 92px;
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        p {
            font-size: 16px;
            line-height: 19px;
            color: ${Colors.neutral700};
        }
    }
`

const RCViewButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

// Define the type for the RewardItem component itself
const CustomerCell: React.FC<CustomerCellProps> = ({
    visits,
    receivedBlasts,
    customerid,
    date,
    signUpDate,
    lastTransactionDate,
    firstName,
    lastName,
    fullName,
    areaCodeNumber,
    phoneNumber1,
    fullPhoneNumber,
    rewardNumber,
    active,
    atRisk,
    totalVisits,
    starsEarned,
    rewardsRedeemed,
    birthdayMonth,
    birthdayDay,
    birthdayYear,
    fullBirthday,
    isSelected,
    onCustomerSelection
  }) => {


    const [isChecked, setIsChecked] = useState(isSelected);

    const handleCheckboxToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        onCustomerSelection(customerid, newState);
    }

    const handleClick = () => {
        console.log('handled clicked.')
    }

    // FORMATTING VALUES
    const formattedPhoneNumber = formatPhoneNumber(fullPhoneNumber);
    const starsEarnedString = String(starsEarned)
    const totalVisitsString = String(totalVisits)

    // FORMATTING SIGN UP DATE
    const suDate = new Date(signUpDate);
    const suMonth = String(suDate.getMonth() + 1).padStart(2, '0'); // months are 0-based
    const suDay = String(suDate.getDate()).padStart(2, '0');
    const suYear = suDate.getFullYear();
    const formattedSUDate = `${suMonth}/${suDay}/${suYear}`;

    // FORMATTING LAST TRANSACTION DATE
    const ltDateNumber = Number(lastTransactionDate)
    const ltDate = new Date(ltDateNumber);
    const ltMonth = String(ltDate.getMonth() + 1).padStart(2, '0'); // months are 0-based
    const ltDay = String(ltDate.getDate()).padStart(2, '0');
    const ltYear = ltDate.getFullYear();
    const ltFormattedDate = `${ltMonth}/${ltDay}/${ltYear}`;


    return (
      <CustomerCellContainer>
        <CustomerCellCheckboxNameNumber>
            <CustomerCellCheckbox>
            <Checkbox 
                checked={isChecked} 
                onChange={handleCheckboxToggle} 
            />
            </CustomerCellCheckbox>
            <MobileNameNumber>
                <h4>{fullName}</h4>
                <Text
                    text={formattedPhoneNumber}
                />
            </MobileNameNumber>
            <CustomerName>
                <Text
                    text={fullName}
                />
            </CustomerName>
        </CustomerCellCheckboxNameNumber>
        <RemainingContent>
            <CustomerPhoneNumber>
                <Text
                    text={formattedPhoneNumber}
                />
            </CustomerPhoneNumber>
            <CustomerBirthday>
                <Text
                    text={fullBirthday}
                />
            </CustomerBirthday>
            <RCPoints>
                <Text
                    text={starsEarnedString}
                />
            </RCPoints>
            <RCVisits>
                <Text
                    text={totalVisitsString}
                />
            </RCVisits>
            <RCSUDate>
                <Text
                    text={formattedSUDate}
                />
            </RCSUDate>
            <RCLTDate>
                <Text
                    text={ltFormattedDate}
                />
            </RCLTDate>
            <RCViewButton>
            <Button
                buttonTypeVariant="neutral"
                sizeVariant="small"
                label="View"
                buttonWidthVariant="content"
                onClick={handleClick}
            />
            </RCViewButton>
        </RemainingContent>
      </CustomerCellContainer>
    );
  };
  
export default CustomerCell;

function formatPhoneNumber(number: string): string {
    const areaCode = number.slice(1, 4);
    const firstPart = number.slice(4, 7);
    const secondPart = number.slice(7, 11);
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}