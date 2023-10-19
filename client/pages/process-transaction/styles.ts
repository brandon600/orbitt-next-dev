import styled from 'styled-components';
import StyledMediaQuery from '../../src/constants/StyledMediaQuery';
import Colors from '@/constants/Colors';

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background: ${Colors.primary100};
    min-height: 100vh;
}

@media ${StyledMediaQuery.S} {
    padding: 120px 24px 24px 24px;
    align-items: center;
}

@media ${StyledMediaQuery.L} {
    margin-left: 260px;
    width: calc(100vw - 260px);
}
`

const ProcessTransactionContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
}

@media ${StyledMediaQuery.S} {
    gap: 32px;
    width: 442px;
}
`

const TitlePlusSubhead = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

@media ${StyledMediaQuery.S} {
    gap: 8px;
}
`

const Title = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral600};
    p {
        font-size: 32px;
        line-height: 39px;
        font-weight: 800;
    }
}

@media ${StyledMediaQuery.S} {
    p {
        text-align: center;
        font-size: 48px;
        line-height: 58px;
    }
}
`

const Subhead = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral400};
    p {
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;
    }
}

@media ${StyledMediaQuery.S} {
    p {
        text-align: center;
        font-size: 20px;
        line-height: 24px;
    }
}
`

const FieldAndButton = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
`

export {
    FlexDiv, 
    ProcessTransactionContainer, 
    TitlePlusSubhead, 
    Title, 
    Subhead, 
    FieldAndButton
}