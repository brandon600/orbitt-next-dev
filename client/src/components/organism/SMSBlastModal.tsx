import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import ModalTop from '../atoms/ModalTop';
import Textarea from '../atoms/Textarea';
import Button from '../atoms/Button';
import { useStore, AppState } from '../../store/store'; // Import your store
import DropdownField, { DropdownOption } from '../atoms/DropdownField';

type SMSBlastModalProps = {
    onClose: () => void;
    selectedCustomers: string[];
    onBlastSent: () => void;
}

const tokenOptions: DropdownOption[] = [
    { label: "Select a token", value: "" },
    { label: "Business Name", value: "{{business_name}}" },
    { label: "First Name", value: "{{first_name}}" },
    { label: "Last Name", value: "{{last_name}}" },
    { label: "Current Point Total", value: "{{current_point_total}}" },
    { label: "Total Points Earned", value: "{{total_points_earned}}" },
    { label: "Total Visits", value: "{{total_visits}}" },
  ];

const BlastModalContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        background: ${Colors.shades100};
        position: fixed;
        z-index: 901;
        top: 24px;
        bottom: 24px;
        left: 24px;
        right: 24px;
        border-radius: 12px;
    }

    @media ${StyledMediaQuery.S} {
        width: 442px;
        height: 592px;
        left: 50%;  // Moves the left edge to the center of the screen
        top: 120px;  // Set to 120px from the top
        transform: translateX(-50%);  // Shifts the container back by half its width
    }

    @media ${StyledMediaQuery.L} {
        width: 608px;
        height: 592px;
        left: 50%;  // Moves the left edge to the center of the screen
        top: 50%;   // Moves the top edge to the center of the screen
        transform: translate(-50%, -50%);  // Shifts the container back by half its width and height
    }
`

const BlastModalContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding: 24px 16px 16px 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        flex: 1 0 0;
        align-self: stretch;
    }

    @media ${StyledMediaQuery.S} {
        gap: 24px;
    }
`

const BlastModalLabel = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding-top: 0px;
        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral600};
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 20px;
            line-height: 24px;
        }
    }

    @media ${StyledMediaQuery.L} {
        padding-top: 8px;
    }
`

const BlastTextareaContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        flex: 1 0 0;
        align-self: stretch;
        height: 100%;
    }
`

const DropdownFieldContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
    }

    @media ${StyledMediaQuery.L} {
        width: 320px;
    }
`

const SMSBlastModal: React.FC<SMSBlastModalProps> = ({ onClose, selectedCustomers, onBlastSent }) => {
    const [blastMessage, setBlastMessage] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [selectedToken, setSelectedToken] = useState('');
    const { showToast } = useStore((state: AppState) => ({ showToast: state.showToast }));

    const handleSendMesssage = async () => {
        const { data } = useStore.getState(); // Directly access Zustand state
        console.log(data)

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const response = await fetch(`${apiUrl}/send-blast-message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messageContent: blastMessage,
                    customerIds: selectedCustomers,
                    user: data
                })
            });

            const blastData = await response.json();
            if (!response.ok) {
                throw new Error(blastData.message || 'Failed to send SMS.');
            }
            onBlastSent();
            showToast("SMS blast sent successfully!", 'success');
            console.log('SMS sent successfully!');
            onClose();  // Close the modal after sending
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error:', error.message);
            } else {
                console.error('Unknown error:', error);
            }
        }
    }

    const handleTokenClick = (token: string) => {
        const messageBeforeCursor = blastMessage.substring(0, cursorPosition);
        const messageAfterCursor = blastMessage.substring(cursorPosition);
        const newMessage = `${messageBeforeCursor}${token}${messageAfterCursor}`;
        setBlastMessage(newMessage);

        // Move cursor position after token
        const newCursorPosition = cursorPosition + token.length;
        setCursorPosition(newCursorPosition);

        // Focus the textarea and set the new cursor position
        if (textAreaRef.current) {
            textAreaRef.current.focus();
            textAreaRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
        }
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const token = event.target.value;
        handleTokenClick(token);
        // Reset the select dropdown to the placeholder after inserting a token
        setSelectedToken('');
      };    

    const handleTextareaChange = (newValue: string) => {
        setBlastMessage(newValue);
    };

    const handleTextareaClick = (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {
        setCursorPosition(event.currentTarget.selectionStart);
    };


    const handleKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (textAreaRef.current) {
        setCursorPosition(textAreaRef.current.selectionStart);
        }
    };
  
    const handleDropdownChange = (value: string) => {
        handleTokenClick(value); // Insert the token where the cursor is
        setSelectedToken(''); // Reset the dropdown to the placeholder value
      };

    return (
      <BlastModalContainer>
        <ModalTop
            label='Send SMS Blast'
            onClose={onClose}
        />
        <BlastModalContent>
            <BlastModalLabel>
                <Text
                    text={`You've selected ${selectedCustomers.length} customer(s) to send this SMS Blast message to`}
                />
            </BlastModalLabel>
            <DropdownFieldContainer>
                <DropdownField 
                    value={selectedToken} 
                    onChange={handleDropdownChange}
                    label="" 
                    useDefaultDropdown={false} 
                    options={tokenOptions}
                />
            </DropdownFieldContainer>
            <BlastTextareaContainer>
                <Textarea 
                    ref={textAreaRef}
                    value={blastMessage}
                    onChange={handleTextareaChange}
                    onKeyUp={handleKeyUp}
                    onClick={handleTextareaClick}
                    height='100%'
                />
            </BlastTextareaContainer>
            <Button
                buttonTypeVariant="primary"
                sizeVariant="large"
                label="Send Message"
                buttonWidthVariant="fill"
                onClick={handleSendMesssage}
            />
        </BlastModalContent>
      </BlastModalContainer>
    );
  };
  
export default SMSBlastModal;