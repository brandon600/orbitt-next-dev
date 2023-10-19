import styled from 'styled-components';
import StyledMediaQuery from '../../src/constants/StyledMediaQuery';
import Colors from '@/constants/Colors';
import { motion } from 'framer-motion';

const TitlePlusButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        gap: 32px;
        flex-direction: column;
    }

    @media ${StyledMediaQuery.S} {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start
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

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    box-sizing: border-box;
    background: ${Colors.primary100};
    min-height: 100vh;
    overflow: hidden;
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

const FlexContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 32px;
    flex-direction: column;
    width: 100%;
}

@media ${StyledMediaQuery.L} {
}
`

const ButtonWrapper = motion(styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
    }

    @media ${StyledMediaQuery.L} {
        display: flex;
        align-self: flex-start; 
        position: fixed;
        right: 24px;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.32);
    }
`);

const AddCusButtonWrapper = styled.div`
    @media ${StyledMediaQuery.XS} {
        width: 100%;
        align-self: flex-start; 
    }

    @media ${StyledMediaQuery.S} {
        width: auto;
    }
`;

const TableAndSearch = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        align-self: stretch;
    }

    @media ${StyledMediaQuery.S} {
        gap: 40px;
    }
`

const SearchAndFilters = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
        align-self: stretch;
    }
`

const SelectedCustomersLabel = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        p {
            font-size: 16px;
            line-height: 19px;
            font-weight: 800;
            color: ${Colors.neutral600};
        }
    }

    @media ${StyledMediaQuery.XS} {
        p {
            font-size: 20px;
            line-height: 24px;
        }
    }
`

const LabelPlusCells = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }
`

const BlastIconButton = motion(styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        position: fixed;
        z-index: 101;
        bottom: 16px;
        left: 16px;
        width: 72px;
        height: 72px;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        background: ${Colors.success700};
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.32);

        svg {
            width: 48px;
            height: 48px;
        }
    }

    @media ${StyledMediaQuery.L} {
        display: none;
    }
`)

const HideShowFilters = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding-bottom: 0px;
        align-items: flex-start;
        gap: 10px;
        border-bottom: 1px solid ${Colors.neutral600};
        p {
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
            color: ${Colors.neutral600};
        }
    }
`

export {
    TitlePlusButton, 
    PageTitle, 
    FlexDiv, 
    FlexContainer, 
    AddCusButtonWrapper, 
    ButtonWrapper, 
    BlastIconButton, 
    TableAndSearch, 
    SearchAndFilters, 
    HideShowFilters, 
    LabelPlusCells, 
    SelectedCustomersLabel
}