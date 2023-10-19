import styled from 'styled-components';
import Colors from '../../src/constants/Colors';
import StyledMediaQuery from '../../src/constants/StyledMediaQuery';


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

    @media ${StyledMediaQuery.S} {
        padding: 24px;
    }

    @media ${StyledMediaQuery.L} {
        margin-left: 260px;
        width: calc(100vw - 260px);
    }
}
`

const TitlePlusButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

const RewardsPageTitle = styled.div`
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

const RewardOfferingsAndSettings = styled.div`
 @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 64px;
 }
`

const ButtonWrap = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    width: 100%;
   
}

 @media ${StyledMediaQuery.S} {
    width: auto;
    align-self: flex-start;
  }
`

export {
    FlexDiv,
    TitlePlusButton,
    RewardsPageTitle,
    RewardOfferingsAndSettings,
    ButtonWrap,
};