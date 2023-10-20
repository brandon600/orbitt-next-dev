import styled from 'styled-components';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Colors from '@/constants/Colors';

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 32px;
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

const PageTitle = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 32px;
        line-height: 39px;
        font-weight: 800;
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 40px;
            line-height: 48px;
            font-weight: 800;
        }
    }
}`

const CompanyNameContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}

@media ${StyledMediaQuery.L} {
    width: 400px;
}
`

const InputPlusEdit = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    gap: 16px;
    width: 100%;
}
`

const CompanyNameEdit = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    justify-content: center;
    width: 48px;
    height: 48px;

    svg {
        width: 48px;
        height: 48px;
    }
}
`

const BottomButtonFlex = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

@media ${StyledMediaQuery.S} {
    flex-direction: row;
}
`

const BottomButtonDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    width: 100%;
}
@media ${StyledMediaQuery.S} {
    width: auto;
}
`

const PillTitle = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
`

const SMSContentContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;

    @media ${StyledMediaQuery.S} {
        flex-direction: row;
    }
}
`

const CreditsPlusButton = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
}
`

const SMSCreditsRemaining = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}
`


const SMSCreditsTitle = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral700};

    p {
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
    }
}
`

const SMSCreditsBarContainerNotice = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
}
`

const SMSCreditsBarContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    width: 100%;
}
`

const SMSCreditsBar = styled.div`
  @media ${StyledMediaQuery.XS} {
    display: flex;
    height: 24px; // Define a height for the bar
    background-color: ${Colors.neutral300}; // Light background to indicate the unfilled part
    border-radius: 24px; 
    width: 100%;
  }
`;

const SMSCreditsBarCount = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral600};

    p {
        font-size: 16px;
        font-weight: 800;
        line-height: 19px;
    }
}
`

const SMSCreditsBarFill = styled.div`
    @media ${StyledMediaQuery.XS} {
        height: 100%;
        background-color: ${Colors.neutral600};
        transition: width 0.3s;
        border-radius: 24px;
        min-width: 2px;
    }
`

const NoFlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
}
`

const SMSButtonsContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}
`

const SMSPhoneNumber = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}
`

const SMSPhoneNumberTextContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
}
`

const SMSPhoneNumberTitle = styled.div`
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
    }
`

const SMSPhoneNumberSubtitle = styled.div`
    display: flex;
    color: ${Colors.neutral400};
    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }
`

const SMSNoticeText = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral400};
    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }
}
`

const TermsConditionsContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
}
`

const TermsConditionsButton = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    justify-content: center;
    width: 100%;
}

@media ${StyledMediaQuery.S} {
    width: fit-content;
}
`

const TextAreaContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    height: 400px;
    width: 100%;
}

@media ${StyledMediaQuery.XS} {
    display: flex;
    height: 320px;
}
`

export {
    FlexDiv, 
    PageTitle, 
    PillTitle, 
    NoFlexDiv, 
    CompanyNameContainer, 
    InputPlusEdit, 
    CompanyNameEdit, 
    BottomButtonFlex, 
    BottomButtonDiv, 
    SMSContentContainer, 
    CreditsPlusButton, 
    SMSCreditsRemaining, 
    SMSCreditsTitle, 
    SMSCreditsBarContainerNotice, 
    SMSCreditsBarContainer, 
    SMSCreditsBar, 
    SMSCreditsBarFill, 
    SMSCreditsBarCount, 
    SMSNoticeText, 
    SMSButtonsContainer, 
    SMSPhoneNumber, 
    SMSPhoneNumberTextContainer, 
    SMSPhoneNumberTitle, 
    SMSPhoneNumberSubtitle, 
    TermsConditionsContainer, 
    TextAreaContainer, 
    TermsConditionsButton
}