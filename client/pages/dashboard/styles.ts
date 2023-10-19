import styled from 'styled-components';
import StyledMediaQuery from '../../src/constants/StyledMediaQuery';
import Colors from '@/constants/Colors';

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 24px 16px;
    box-sizing: border-box;
    background: ${Colors.primary100};
    min-height: 100vh;
    gap: 24px;
    overflow-y: hidden;
    height: 100vh;
}

@media ${StyledMediaQuery.S} {
    padding: 24px;
}

@media ${StyledMediaQuery.L} {
    margin-left: 260px;
    width: calc(100vw - 260px);
}
`

const DashboardContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 16px;
    }
`

const PageTitle = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        
        p {
            font-size: 32px;
            font-weight: 800;
            line-height: 39px;
            color: ${Colors.neutral700};
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
`

const DataCards = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;
        width: 100%;
    }

    @media ${StyledMediaQuery.L} {
        width: calc(50% - 8px);
        gap: 8px;
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

    @media ${StyledMediaQuery.L} {
        gap: 8px;
    }
`

const ScrollableContainer = styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none; // Hide scrollbar for Chrome, Safari and Opera
    }

    -ms-overflow-style: none;  // Hide scrollbar for IE and Edge
`;

const PillsPlusDataCards = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 24px;
    }
`

const DataCardsDataCharts = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; // Children will wrap and take full width
        width: 100%;
        gap: 24px;
        max-height: calc(100vh - 242px);
        overflow-y: auto;  // Enables vertical scroll
        &::after { // Pseudo-element
            content: "";
            display: block;
            height: 24px;
        }
    }

    @media ${StyledMediaQuery.S} {
        max-height: calc(100vh - 251px);
    }

    @media ${StyledMediaQuery.L} {
        flex-direction: row;
        width: calc(100% - 8px);
        gap: 16px;
        max-height: calc(100vh - 261px);
    }
`

const Div = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        height: 100%;
    }
`

const DataCharts = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media ${StyledMediaQuery.XS} {
        flex-direction: column;
    }

    @media ${StyledMediaQuery.S} {
        flex-direction: row;
        gap: 16px;
    }

    @media ${StyledMediaQuery.L} {
        flex-direction: column;
        width: calc(50% - 8px);
    }
`

const DataBarChatContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        height: 310px;
    }

    @media ${StyledMediaQuery.S} {
        width: calc(50% - 8px); // 50% width minus half the gap
        height: 328px;
    }

    @media ${StyledMediaQuery.L} {
        width: 100%;
    }
`

const DoughnutContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        width: calc(50% - 8px);
        height: 328px;
    }

    @media ${StyledMediaQuery.L} 
        width: 100%;
    }
`

const DropdownContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
    }

    @media ${StyledMediaQuery.L} {
        width: 324px;
    }
`

export {
    FlexDiv, 
    DashboardContent, 
    PageTitle, 
    DataCards, 
    DataCardsRow, 
    ScrollableContainer, 
    PillsPlusDataCards, 
    DataCardsDataCharts, 
    Div, 
    DataCharts, 
    DataBarChatContainer, 
    DoughnutContainer, 
    DropdownContainer
}