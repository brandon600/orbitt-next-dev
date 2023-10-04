// components/RewardForm.tsx
import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import DropdownField from '../atoms/DropdownField';
import Text from '../subatomic/Text';
import Button from '../atoms/Button';
import { styled } from 'styled-components';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Colors from '../../constants/Colors';
import { CancelIcon } from '../subatomic/Icons/CancelIcon';
import { motion } from 'framer-motion';
import { useStore, AppState } from '../../store/store'; // Import your store
import { on } from 'events';
import { DropdownOption } from '../atoms/DropdownField';

interface AddCustomerFormProps {
  onClose: () => void;
}

const ModalCloseButton = styled.div`
    @media ${StyledMediaQuery.XS} {
      display: flex;
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;

        svg {
          width: 48px;
          height: 48px;
        }
    }

    @media ${StyledMediaQuery.S} {
      top: 24px;
      right: 24px;

        svg {
          width: 64px;
          height: 64px;
        }
    }
`

const AddCustomerFormDiv =  motion(styled.div`
    @media ${StyledMediaQuery.XS} {
      position: fixed;
      right: 0;
      top: 0;
      display: flex;
      width: 280px;
      height: 100vh;
      background: ${Colors.shades100};
      flex-direction: column;
      align-items: flex-start;
      flex-shrink: 0;
      z-index: 900;
    }

    @media ${StyledMediaQuery.S} {
        width: 400px;
    }
`)

const AddCustomerFormContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
        padding: 88px 16px 16px 16px;
        box-sizing: border-box;
        overflow-y: auto;
        max-height: 100vh - 96px;
    }

    @media ${StyledMediaQuery.S} {
      padding: 120px 24px 24px 24px;
    }
`

const AddCustomerFormHeading = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral700};

        p {
          font-size: 24px;
          font-weight: 800;
          line-height: 29px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
          font-size: 32px;
          line-height: 39px;
        }
    }
`

const FormAndButton = styled.div`
    @media ${StyledMediaQuery.XS} {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      align-self: stretch;

      form {
        display: flex;
        gap: 24px;
        width: 100%;
      }
    }
`

const RequiredLabel = styled.div`
    @media ${StyledMediaQuery.XS} {
      display: flex;
      align-items: flex-start;
      gap: 4px;
      color: ${Colors.error500};

      p {
        font-size: 16px;
      }

      h6 {
        font-size: 14px;
        font-weight: 500;
      }
    }
`

const FormFields = styled.div`
    @media ${StyledMediaQuery.XS} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      width: 100%;
    }
`

const BirthdayDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 0px;
        width: 100%;
    }
`


const BirthdayLabel = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        p {
            font-size: 16px;
            line-height: 19px;
            font-weight: 500;
            color: ${Colors.neutral700};
        }
    }
`

const BirthdayFieldsDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: row;
        flex: 1 1 calc(33.333% - 8px);
        gap: 8px;
        width: 100%;
    }
`

const birthdayMonthOptions: DropdownOption[] = [
    { label: "--", value: "" },
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" },
    { label: "07", value: "07" },
    { label: "08", value: "08" },
    { label: "09", value: "09" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
  ];

  const birthdayDayOptions: DropdownOption[] = [
    { label: "--", value: "" },
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" },
    { label: "07", value: "07" },
    { label: "08", value: "08" },
    { label: "09", value: "09" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
    { label: "26", value: "26" },
    { label: "27", value: "27" },
    { label: "28", value: "28" },
    { label: "29", value: "29" },
    { label: "30", value: "30" },
    { label: "31", value: "31" },
  ];

  const birthdayYearOptions: DropdownOption[] = [
    { label: "--", value: "" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
    { label: "2017", value: "2017" },
    { label: "2016", value: "2016" },
    { label: "2015", value: "2015" },
    { label: "2014", value: "2014" },
    { label: "2013", value: "2013" },
    { label: "2012", value: "2012" },
    { label: "2011", value: "2011" },
    { label: "2010", value: "2010" },
    { label: "2009", value: "2009" },
    { label: "2008", value: "2008" },
    { label: "2007", value: "2007" },
    { label: "2006", value: "2006" },
    { label: "2005", value: "2005" },
    { label: "2004", value: "2004" },
    { label: "2003", value: "2003" },
    { label: "2002", value: "2002" },
    { label: "2001", value: "2001" },
    { label: "2000", value: "2000" },
    { label: "1999", value: "1999" },
    { label: "1998", value: "1998" },
    { label: "1997", value: "1997" },
    { label: "1996", value: "1996" },
    { label: "1995", value: "1995" },
    { label: "1994", value: "1994" },
    { label: "1993", value: "1993" },
    { label: "1992", value: "1992" },
    { label: "1991", value: "1991" },
    { label: "1990", value: "1990" },
    { label: "1989", value: "1989" },
    { label: "1988", value: "1988" },
    { label: "1987", value: "1987" },
    { label: "1986", value: "1986" },
    { label: "1985", value: "1985" },
    { label: "1984", value: "1984" },
    { label: "1983", value: "1983" },
    { label: "1982", value: "1982" },
    { label: "1981", value: "1981" },
    { label: "1980", value: "1980" },
    { label: "1979", value: "1979" },
    { label: "1978", value: "1978" },
    { label: "1977", value: "1977" },
    { label: "1976", value: "1976" },
    { label: "1975", value: "1975" },
    { label: "1974", value: "1974" },
    { label: "1973", value: "1973" },
    { label: "1972", value: "1972" },
    { label: "1971", value: "1971" },
    { label: "1970", value: "1970" },
    { label: "1969", value: "1969" },
    { label: "1968", value: "1968" },
    { label: "1967", value: "1967" },
    { label: "1966", value: "1966" },
    { label: "1965", value: "1965" },
    { label: "1964", value: "1964" },
    { label: "1963", value: "1963" },
    { label: "1962", value: "1962" },
    { label: "1961", value: "1961" },
    { label: "1960", value: "1960" },
    { label: "1959", value: "1959" },
    { label: "1958", value: "1958" },
    { label: "1957", value: "1957" },
    { label: "1956", value: "1956" },
    { label: "1955", value: "1955" },
    { label: "1954", value: "1954" },
    { label: "1953", value: "1953" },
    { label: "1952", value: "1952" },
    { label: "1951", value: "1951" },
    { label: "1950", value: "1950" },
    { label: "1949", value: "1949" },
    { label: "1948", value: "1948" },
    { label: "1947", value: "1947" },
    { label: "1946", value: "1946" },
    { label: "1945", value: "1945" },
    { label: "1944", value: "1944" },
    { label: "1943", value: "1943" },
    { label: "1942", value: "1942" },
    { label: "1941", value: "1941" },
    { label: "1940", value: "1940" },
    { label: "1939", value: "1939" },
    { label: "1938", value: "1938" },
    { label: "1937", value: "1937" },
    { label: "1936", value: "1936" },
    { label: "1935", value: "1935" },
    { label: "1934", value: "1934" },
    { label: "1933", value: "1933" },
    { label: "1932", value: "1932" },
    { label: "1931", value: "1931" },
    { label: "1930", value: "1930" },
    { label: "1929", value: "1929" },
    { label: "1928", value: "1928" },
    { label: "1927", value: "1927" },
    { label: "1926", value: "1926" },
    { label: "1925", value: "1925" },
    { label: "1924", value: "1924" },
    { label: "1923", value: "1923" },
    { label: "1922", value: "1922" },
    { label: "1921", value: "1921" },
    { label: "1920", value: "1920" },
    { label: "1919", value: "1919" },
    { label: "1918", value: "1918" },
    { label: "1917", value: "1917" },
    { label: "1916", value: "1916" },
    { label: "1915", value: "1915" },
    { label: "1914", value: "1914" },
    { label: "1913", value: "1913" },
    { label: "1912", value: "1912" },
    { label: "1911", value: "1911" },
    { label: "1910", value: "1910" },
    { label: "1909", value: "1909" },
    { label: "1908", value: "1908" },
    { label: "1907", value: "1907" },
    { label: "1906", value: "1906" },
    { label: "1905", value: "1905" },
    { label: "1904", value: "1904" },
    { label: "1903", value: "1903" },
    { label: "1902", value: "1902" },
    { label: "1901", value: "1901" },
    { label: "1900", value: "1900" },
  ]


/**
 * Formats a phone number to the format: (XXX) XXX-XXXX.
 * @param value - The string to format.
 * @returns {string} - Formatted phone number.
 */
export const formatPhoneNumber = (value: string): string => {
    const numericValue = value.replace(/\D/g, '');  // Remove non-digit characters
    
    if (numericValue.length < 4) {
      return numericValue;
    } else if (numericValue.length < 7) {
      return `(${numericValue.substring(0, 3)}) ${numericValue.substring(3)}`;
    } else {
      return `(${numericValue.substring(0, 3)}) ${numericValue.substring(3, 6)}-${numericValue.substring(6, 10)}`;
    }
  };
  
  /**
   * Validates that a phone number contains exactly 10 digits.
   * @param phoneNumber - The phone number to validate.
   * @returns {boolean} - True if the phone number is valid, otherwise false.
   */
  export const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
    return numericPhoneNumber.length === 10;
  };

const AddCustomerForm: React.FC<AddCustomerFormProps> = ({ onClose }) => {
  const [customerFirstName, setCustomerFirstName] = useState<string>('');
  const [customerLastName, setCustomerLastName] = useState<string>('');
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState<string>('');
  const [customerBirthdayMonth, setCustomerBirthdayMonth] = useState<string>(''); 
  const [customerBirthdayDay, setCustomerBirthdayDay] = useState<string>(''); 
  const [customerBirthdayYear, setCustomerBirthdayYear] = useState<string>(''); 

  const [isCustomerFirstNameValid, setCustomerFirstNameValid] = useState<boolean>(false);
  const [isCustomerPhoneNumberValid, setCustomerPhoneNumberValid] = useState<boolean>(false);

  const { showToast } = useStore((state: AppState) => ({ showToast: state.showToast }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidPhoneNumber(customerPhoneNumber)) {
        showToast('Please enter a valid 10 digit phone number.', 'error');
        return;
      }
    
    // Get global state data
    const { data } = useStore.getState(); // Directly access Zustand state
    console.log(data)
    
    // Collect reward details and some global state data into an object/
    const payload = {
      customerDetails: {
        firstName: customerFirstName,
        lastName: customerLastName,
        phoneNumber: customerPhoneNumber,
        birthdayMonth: customerBirthdayMonth,
        birthdayDay: customerBirthdayDay,
        birthdayYear: customerBirthdayYear
      },
      user: data, // example global state data
      // include any other relevant state data
    };
  
    // Make POST request to your Express server

    try {
      const response = await fetch('http://localhost:5000/add-customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        showToast('Customer added successfully!', 'success');
        // Additional logic here (e.g., close the form, refresh rewards list, etc.)
      } else {
        console.log('Failed:', response);
        showToast('Failed to add customer.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast(`Error: Something wrong happened!`, 'error');
    }

    onClose();
  };

  return (
    <AddCustomerFormDiv
      initial={{ x: "100%" }}  // initial state (hidden to the right)
      animate={{ x: "0%" }}  // end state (appears from the right)
      exit={{ x: "100%" }}  // exit state (disappears to the right)
      transition={{ duration: 0.4, ease: [0.88, 0, 0.16, 1] }} // animation takes 400ms with easeInOut easing
    >
      <ModalCloseButton
          onClick={onClose}
        >
          <CancelIcon
            fill={Colors.neutral700} 
          />
      </ModalCloseButton>
      <AddCustomerFormContent>
      <AddCustomerFormHeading>
        <Text
          text="Add New Customer"
        />
      </AddCustomerFormHeading>
      <FormAndButton>
          <RequiredLabel>
            <Text
              text="*"
              color={Colors.error500}
            />
            <h6>Required</h6>
          </RequiredLabel>
          <form onSubmit={handleSubmit}>
            <FormFields>
                <InputField
                    label="First Name"
                    value={customerFirstName}
                    onChange={(value) => {
                    setCustomerFirstName(value);
                    setCustomerFirstNameValid(!!value); // Validate based on whether the input is not empty
                    }}
                    required={true}
                    placeholder='Ex: John'
                />
                <InputField
                    label="Last Name"
                    value={customerLastName}
                    onChange={(value) => {
                    setCustomerLastName(value);
                    }}
                    placeholder='Ex: Appleseed'
                />
                <InputField
                    label="Phone Number"
                    value={customerPhoneNumber}
                    onChange={(value) => {
                    const formattedNumber = formatPhoneNumber(value);
                    setCustomerPhoneNumber(formattedNumber);
                    setCustomerPhoneNumberValid(isValidPhoneNumber(formattedNumber));
                    }}
                    required={true}
                    placeholder='Ex: (555) 555-5555'
                />
                <BirthdayDiv>
                    <BirthdayLabel>
                        <Text
                            text="Birthday"
                        />
                    </BirthdayLabel>
                    <BirthdayFieldsDiv>
                        <DropdownField 
                            value={customerBirthdayMonth} 
                            onChange={(value) => setCustomerBirthdayMonth(value)}
                            label="" 
                            useDefaultDropdown={false} 
                            options={birthdayMonthOptions}
                        />
                        <DropdownField 
                            value={customerBirthdayDay} 
                            onChange={(value) => setCustomerBirthdayDay(value)}
                            label="" 
                            useDefaultDropdown={false} 
                            options={birthdayDayOptions}
                        />
                        <DropdownField 
                            value={customerBirthdayYear} 
                            onChange={(value) => setCustomerBirthdayYear(value)}
                            label="" 
                            useDefaultDropdown={false} 
                            options={birthdayYearOptions}
                        />
                    </BirthdayFieldsDiv>
                </BirthdayDiv>
            </FormFields>
            <Button
                  buttonTypeVariant={
                    isCustomerFirstNameValid && isCustomerPhoneNumberValid /* && Add conditions for other fields */
                      ? 'primary'
                      : 'disabled'
                  }
                  sizeVariant='large'
                  label='Submit'
                  buttonWidthVariant='fill'
                  onClick={handleSubmit}
                  type='submit'
                  disabled={
                    !isCustomerFirstNameValid ||
                    !isCustomerPhoneNumberValid /* || Add conditions for other fields */
                  }
                />
        </form>
      </FormAndButton>
      </AddCustomerFormContent>
    </AddCustomerFormDiv>
  );
};

export default AddCustomerForm;