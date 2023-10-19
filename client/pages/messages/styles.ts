import styled from 'styled-components';
import StyledMediaQuery from '../../src/constants/StyledMediaQuery';
import Colors from '@/constants/Colors';

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 40px;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
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
}
`

const MessagesPageTitle = styled.div`
 @media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 32px;
        line-height: 39px;
        font-weight: 800;
    }
 }
 @media ${StyledMediaQuery.S} {
    color: ${Colors.neutral700};
    p {
        font-size: 40px;
        line-height: 48px;
    }
 }

 @media ${StyledMediaQuery.L} {
    color: ${Colors.neutral700};
    p {
        font-size: 48px;
        line-height: 58px;
    }
 }
 `

const MessageCellsContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 64px;
        width: 100%;
    }
 `

 export {
    FlexDiv, 
    MessagesPageTitle, 
    MessageCellsContainer
 }