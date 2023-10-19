import styled from 'styled-components';
import StyledMediaQuery from '../../../src/constants/StyledMediaQuery';
import Colors from '@/constants/Colors';

const FlexDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100vw;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px 16px;
        box-sizing: border-box;
        min-height: 100vh;
        background: ${Colors.primary100};
        overflow: hidden;
    }

    @media ${StyledMediaQuery.S} {
        padding: 24px;
        align-items: center;
    }

    @media ${StyledMediaQuery.L} {
        margin-left: 260px;
        width: calc(100vw - 260px);
    }
`;

const PTCContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
    }

    @media ${StyledMediaQuery.S} {
        width: 558px;
        align-items: center;
        gap: 40px;
        padding-top: 88px;
    }

    @media ${StyledMediaQuery.L} {
        width: 100%;
        flex-direction: row;
        align-items: flex-start;
        padding-top: 0px;
    }
`;

const PTCTopContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 24px;
    }

    @media ${StyledMediaQuery.S} {
        gap: 40px;
    }

    @media ${StyledMediaQuery.L} {
        gap: 48px;
    }
`;

const PTCBackButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 40px;
        height: 40px;
        position: static;
        
        svg {
            width: 100%;
            height: 100%;
        }
    }

    @media ${StyledMediaQuery.S} {
        position: fixed;
        left: 24px;
        top: 24px;
    }

    @media ${StyledMediaQuery.L} {
        position: static;
    }
`;

const PTCAllCustomerInfo = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    @media ${StyledMediaQuery.S} {
        gap: 40px;
    }
`;

const PTCTopCustomerInfo = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    @media ${StyledMediaQuery.S} {
        gap: 12px;
    }
`;

const TopCustomerInfoName = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral600};
        p {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
        }
    }

    @media ${StyledMediaQuery.S} {
        justify-content: center;
        p {
            text-align: center;
            font-size: 40px;
            line-height: 48px;
        }
    }

    @media ${StyledMediaQuery.L} {
        justify-content: flex-start;
        p {
            text-align: left;
            font-size: 48px;
            line-height: 58px;
        }
    }
`;

const TopCustomerInfoCI = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
    }

    @media ${StyledMediaQuery.S} {
        align-items: center;
    }

    @media ${StyledMediaQuery.L} {
        align-items: flex-start;
        gap: 12px;
    }
`;

const TCINumber = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral700};
        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            text-align: center;
            font-size: 24px;
            line-height: 29px;
        }
    }

    @media ${StyledMediaQuery.L} {
        p {
            text-align: left;
            font-size: 32px;
            line-height: 39px;
        }
    }
 `

const TCIBirthday = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral700};
        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            text-align: center;
            font-size: 24px;
            line-height: 29px;
        }
    }
 `


const PTCCustomerPointInfo = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

const CustomerPointInfoAvailable = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.warning500};
        p {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
        }
    }

    @media ${StyledMediaQuery.S} {
        justify-content: center;
        p {
            text-align: center;
        }
    }

    @media ${StyledMediaQuery.L} {
        justify-content: flex-start;
        p {
            text-align: left;
        }
    }
`;

const CustomerPointInfoVisits = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral500};
        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
        }
    }

    @media ${StyledMediaQuery.S} {
        justify-content: center;

        p {
            text-align: center;
            font-size: 24px;
            line-height: 29px;
        }
    }


    @media ${StyledMediaQuery.L} {
        justify-content: flex-start;

        p {
            text-align: left;
        }
    }
`;

const PTCBottomContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
        width: 100%;
    }

    @media ${StyledMediaQuery.S} {
        gap: 32px;
        align-items: center;
    }

    @media ${StyledMediaQuery.L} {
        gap: 48px;
        padding-top: 88px;
    }
`;

const PTCFieldsAndButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;

const PTCFields = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`;

const PTCOption = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-height: calc(100vh - 344px);
        overflow-y: auto;  // Enables vertical scroll
        &::after { // Pseudo-element
            content: "";
            display: block;
            height: 24px;
        }
    }

    @media ${StyledMediaQuery.S} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0px;
        max-height: calc(100vh - 456px);
    }

    @media ${StyledMediaQuery.L} {
        gap: 16px;
        max-height: calc(100vh - 200px);
    }
`;

export {
    FlexDiv, 
    PTCContent, 
    PTCTopContent, 
    PTCBackButton, 
    PTCAllCustomerInfo, 
    PTCTopCustomerInfo, 
    TopCustomerInfoName, 
    TopCustomerInfoCI, 
    TCINumber, 
    TCIBirthday, 
    PTCCustomerPointInfo, 
    CustomerPointInfoAvailable, 
    CustomerPointInfoVisits, 
    PTCBottomContent, 
    PTCFieldsAndButton, 
    PTCFields, 
    PTCOption
}