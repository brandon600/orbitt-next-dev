import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import ModalTop from '../atoms/ModalTop';
import Textarea from '../atoms/Textarea';
import Button from '../atoms/Button';
import { useStore, AppState } from '../../store/store'; // Import your store

type SMSBlastModalProps = {
    onClose: () => void;
    selectedCustomers: string[];
}

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


const SMSBlastModal: React.FC<SMSBlastModalProps> = ({ onClose, selectedCustomers }) => {
    const [blastMessage, setBlastMessage] = useState('');
    const { showToast } = useStore((state: AppState) => ({ showToast: state.showToast }));

    const handleSendMesssage = async () => {
        const { data } = useStore.getState(); // Directly access Zustand state
        console.log(data)

        try {
            const response = await fetch('http://localhost:5000/send-blast-message', {
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
            <BlastTextareaContainer>
                <Textarea 
                    value={blastMessage}
                    onChange={(value) => setBlastMessage(value)}
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