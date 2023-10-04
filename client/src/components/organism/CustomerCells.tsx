import React from 'react';
import RewardItem from '../molecules/RewardItem'; // Import your RewardItem component here
import Text from '../subatomic/Text';
import StyledMediaQuery from '@/constants/StyledMediaQuery';
import { styled } from 'styled-components';
import Colors from '@/constants/Colors';
import CustomerTableHead from '@/components/atoms/CustomerTableHead';
import { CustomerData } from '@/types/CustomerData';
import CustomerCell from '@/components/molecules/CustomerCell';


interface CustomerCellsProps {
  customersData: CustomerData[]; // An array of RewardData objects
  onCustomerSelection: (customerId: string, isSelected: boolean) => void;
  selectedCustomers: string[];
 // onEditClick: (reward: CustomerData) => void;
}

const CustomerCellsContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`

const CustomerCellsList = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: calc(100vh - 372px);  // Set a height
        overflow-y: auto;  // Ensure it can scroll if content inside exceeds this height
        &::after { // Pseudo-element
            content: "";
            display: block;
            height: 24px;
        }
    }

    @media ${StyledMediaQuery.S} {
        max-height: calc(100vh - 321px);
    }

    @media ${StyledMediaQuery.L} {
        max-height: calc(100vh - 323px);
    }
`

const CustomerCells: React.FC<CustomerCellsProps> = ({ customersData, onCustomerSelection, selectedCustomers }) => {
    console.log(customersData)
    if (!customersData) {
        // Handle the case when rewardsData is not defined (e.g., still loading)
        return <p>Loading...</p>; // You can display a loading message or spinner
      }
  return (
    <CustomerCellsContainer>
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
        <CustomerCellsList>
            {customersData.map((customer, index) => (
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
                onCustomerSelection={onCustomerSelection}
                isSelected={selectedCustomers.includes(customer._id)}
            />
        ))}
        </CustomerCellsList>
    </CustomerCellsContainer>
  );
};

export default CustomerCells;