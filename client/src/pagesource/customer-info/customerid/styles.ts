import styled from 'styled-components';
import StyledMediaQuery from '../../../constants/StyledMediaQuery';
import Colors from '@/constants/Colors';

const FlexDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100vw;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        padding: 24px 16px;
        box-sizing: border-box;
        background: ${Colors.primary100};
        min-height: 100vh;
    }

    @media ${StyledMediaQuery.S} {
        padding: 24px;
    }

    @media ${StyledMediaQuery.L} {
        margin-left: 260px;
        width: calc(100vw - 260px);
        gap: 32px;
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
    }

    @media ${StyledMediaQuery.S} {
        gap: 12px;
    }
`

const CustomerInfoDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    @media ${StyledMediaQuery.L} {
        gap: 12px;
    }
`

const BottomSection = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 48px;
        width: 100%;
    }

    @media ${StyledMediaQuery.S} {
        flex-direction: row;
        gap: 32px;
    }

    @media ${StyledMediaQuery.L} {
        flex-direction: column;
        gap: 40px;
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

    @media ${StyledMediaQuery.S} {
        flex: 1;
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

    @media ${StyledMediaQuery.L} {
        flex-direction: row;
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

    @media ${StyledMediaQuery.S} {
        display: none;
    }
`;

const CustomerRecentActivity = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
    }

    @media ${StyledMediaQuery.S} {
        flex: 1;
    }
`;

const RecentActivityLabel = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral600};

        p {
            font-size: 20px;
            font-weight: 800;
            line-height: 24px; 
        }
    }
`;

const CustomerVisitCells = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        width: 100%;
    }
`

const TopButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;

    @media ${StyledMediaQuery.XS} {
        & > :first-child {
            display: none;
        }
    }

    @media ${StyledMediaQuery.S} {
        & > :first-child {
            display: flex;
        }
    }
`;

const TCIName = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        
        p {
            color: ${Colors.neutral600};
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 40px;
            line-height: 48px;
        }
    }

    @media ${StyledMediaQuery.L} {
        p {
            font-size: 48px;
            line-height: 58px;
        }
    }
`;

const TCINumber = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        
        p {
            color: ${Colors.neutral700};
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 24px;
            line-height: 29px;
        }
    }

    @media ${StyledMediaQuery.L} {
        p {
            font-size: 32px;
            line-height: 39px;
        }
    }
`;

const TCIBirthday = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        
        p {
            color: ${Colors.neutral700};
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 24px;
            line-height: 29px;
        }
    }
`;

export {
    FlexDiv, 
    TopSection, 
    TopNavigation, 
    BackIconDiv, 
    TopButtonDiv, 
    TopCustomerInfo, 
    CustomerInfoDiv, 
    BottomSection, 
    CustomerStatistics, 
    CustomerStatisticsLabel, 
    DataCards, 
    DataCardsRow, 
    EditCustomerButton, 
    CustomerRecentActivity, 
    RecentActivityLabel, 
    CustomerVisitCells, 
    TopButtons, 
    TCIName, 
    TCINumber, 
    TCIBirthday
};