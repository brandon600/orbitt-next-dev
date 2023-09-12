import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

interface SearchProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string; // Add the 'placeholder' prop
}


const SearchContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`

const SearchLabel = styled.label`
    @media ${StyledMediaQuery.XS} {
        display: flex; 
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        color: ${Colors.neutral400};
    }
`

const SearchInput = styled.input`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        height: 32px;
        padding: 8px 12px;
        align-items: center;
        align-self: stretch;
        border-radius: 200px;
        background: ${Colors.neutral200};
        color: ${Colors.neutral600};
        border: none;

        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
        }

        &:focus {
            border: 1px solid ${Colors.primary400};
            color: ${Colors.primary400};
            background: ${Colors.neutral100};
        }

        &::placeholder {
          color: ${Colors.neutral300};
        }
    }
`



const SearchBar: React.FC<SearchProps> = ({
  label,
  value,
  onChange,
  placeholder, // Accept the 'placeholder' prop
}) => {
  return (
    <SearchContainer>
        <SearchLabel>
        {label}
        </SearchLabel>
        <SearchInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} // Pass the 'placeholder' prop
        />
    </SearchContainer>
  );
};

export default SearchBar;