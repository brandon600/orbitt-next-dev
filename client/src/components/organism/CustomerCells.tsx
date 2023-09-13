import React from 'react';
import RewardItem from '../molecules/RewardItem'; // Import your RewardItem component here
import Text from '../subatomic/Text';
import StyledMediaQuery from '@/constants/StyledMediaQuery';
import { styled } from 'styled-components';
import Colors from '@/constants/Colors';
import RewardTableHead from '@/components/atoms/RewardTableHead';
import { CustomerData } from '@/types/CustomerData';
import CustomerCell from '@/components/molecules/CustomerCell';


interface CustomerCellsProps {
  customersData: CustomerData[]; // An array of RewardData objects
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
    }
`

const CustomerCells: React.FC<CustomerCellsProps> = ({ customersData }) => {
    console.log(customersData)
    if (!customersData) {
        // Handle the case when rewardsData is not defined (e.g., still loading)
        return <p>Loading...</p>; // You can display a loading message or spinner
      }
  return (
    <CustomerCellsContainer>
        <CustomerCellsList>
        <RewardTableHead 
            label1='Rewards'
            label2='Cost'
            label3='Terms'
            label4='Active'
            label5='Edit'
        />
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
            />
        ))}
        </CustomerCellsList>
    </CustomerCellsContainer>
  );
};

export default CustomerCells;