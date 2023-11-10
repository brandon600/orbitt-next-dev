import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Button from '../atoms/Button';
import Textarea from '../atoms/Textarea';
import Text from '../subatomic/Text'
import ToggleSwitch from '../atoms/ToggleSwitch';
import { TriggeredMessageData } from '@/types/TriggeredMessageData';
import { useStore, AppState } from '../../store/store'; // Import your store
import DropdownField, { DropdownOption } from '../atoms/DropdownField';

interface MessageCellProps extends TriggeredMessageData {
    onTriggeredMessageToggleChange: (index: number, newValue: boolean) => void;
    originalTriggeredMessageValue: boolean;
    editingIndex: number | null; // Add this property
    hasPendingMessageChanges: boolean; // And this property
    setEditingIndex: (index: number | null) => void;
}

const tokenOptions: DropdownOption[] = [
    { label: "Select a token", value: "" },
    { label: "First Name", value: "{{first_name}}" },
    { label: "Last Name", value: "{{last_name}}" },
    { label: "Current Reward Number", value: "{{current_reward_number}}" },
    { label: "Total Rewards Earned", value: "{{total_rewards_earned}}" },
    { label: "Total Visits", value: "{{total_visits}}" },
    { label: "Current Points Given", value: "{{current_points_given}}" },
    { label: "New Point Total", value: "{{new_point_total}}" },
  ];


const MessageCellContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`

const MessageTop = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        gap: 24px;
        width: 100%;
    }
`

const HeadingAndSubhead = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1 0 0;

        h4 {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
            color: ${Colors.neutral600};
        }

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral400};
        }
    }

    @media ${StyledMediaQuery.L} {
        h4 {
            font-size: 32px;
            font-weight: 800;
            line-height: 39px;
            color: ${Colors.neutral600};
        }

        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
            color: ${Colors.neutral400};
        }
    }
`

const MessageContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding: 16px;
        flex-direction: column;
        gap: 16px;
        border-radius: 16px;
        background: ${Colors.neutral200};
        width: 100%;
        box-sizing: border-box;
    }

    @media ${StyledMediaQuery.L} {
        padding: 20px;
    }
`

const TextareaAndButtons = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        flex: 1 0 0;
    }
`

const BottomButtons = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }

    @media ${StyledMediaQuery.S} {
        flex-direction: row;
        gap: 12px;
        width: auto;
    }
`

const ButtonContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    width: 100%;
}
@media ${StyledMediaQuery.S} {
    width: auto;
}
`

const TextMessageTop = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding: 0;
        margin: 0;

        p {
            color: ${Colors.neutral700};
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
        }
    }
`

const TextMessageBottom = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;

        p {
            color: ${Colors.neutral700};
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
        }
    }
`

const MessageCell: React.FC<MessageCellProps> = ({
    messageNumberId: triggeredMessageNumberId, 
    messageTitle: triggeredMessageTitle, 
    messageSubtitle: triggeredMessageSubtitle,
    textMessageDefaultTextStart: triggeredMessageDefaultStart,
    textMessageCustomText: triggeredMessageCustomText,
    textMessageDefaultTextEnd1: triggeredMessageDefaultEnd1,
    textMessageDefaultTextEnd2: triggeredMessageDefaultEnd2,
    active: triggeredMessageActive,
    onTriggeredMessageToggleChange,
    originalTriggeredMessageValue,
    hasPendingMessageChanges,
    editingIndex,
    setEditingIndex,
    index,
  }) => {

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [originalMessage, setOriginalMessage] = useState<string>(triggeredMessageCustomText);
    const [stagedMessage, setStagedMessage] = useState<string>(originalMessage);
    const [isActive, setIsActive] = useState(triggeredMessageActive);
    const [isDisabled, setIsDisabled] = useState(false);
    const { showToast } = useStore((state: AppState) => ({ showToast: state.showToast }));


    //NEW
    const [cursorPosition, setCursorPosition] = useState<number>(0);
    const [selectedToken, setSelectedToken] = useState<string>('');

    //NEW
    const handleTokenClick = (token: string) => {
        const messageBeforeCursor = stagedMessage.substring(0, cursorPosition);
        const messageAfterCursor = stagedMessage.substring(cursorPosition);
        const newMessage = `${messageBeforeCursor}${token}${messageAfterCursor}`;
        setStagedMessage(newMessage);
    
        const newCursorPosition = cursorPosition + token.length;
        setCursorPosition(newCursorPosition);
    
        textareaRef.current?.focus();
        textareaRef.current?.setSelectionRange(newCursorPosition, newCursorPosition);
    };
    

    //NEW
    const handleTextareaClick = (event: React.MouseEvent<HTMLTextAreaElement>) => {
        setCursorPosition(event.currentTarget.selectionStart);
    };

    //NEW
    const handleTextareaChange = (newValue: string) => {
        setStagedMessage(newValue);
    };
      
    
    //NEW
    const handleKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (textareaRef.current) {
            setCursorPosition(textareaRef.current.selectionStart);
        }
    };    

    //NEW
    const handleDropdownChange = (value: string) => {
        handleTokenClick(value); // Insert the token where the cursor is
        setSelectedToken(''); // Reset the dropdown to the placeholder value
    };
    
    


    /*
useEffect(() => {
    setIsDisabled(editingIndex !== null && editingIndex !== index);
}, [editingIndex, index]);
*/

useEffect(() => {
    setIsDisabled(editingIndex !== null);
}, [editingIndex]);

    useEffect(() => {
        setIsActive(triggeredMessageActive);
      }, [triggeredMessageActive]);


      useEffect(() => {
        setIsActive(originalTriggeredMessageValue);
        console.log("isActive state reset to:", originalTriggeredMessageValue);
    }, [originalTriggeredMessageValue]);
  

    useEffect(() => {
        if (isEditing) {
            textareaRef.current?.focus();
        }
    }, [isEditing]);


    const handleToggle = (newValue: boolean) => {
        setIsActive(newValue);
        onTriggeredMessageToggleChange(index, newValue);
    };

    const handleEdit = () => {
        if (!hasPendingMessageChanges) {
            setIsEditing(true);
            setEditingIndex(index);
        }
    };

    const handleSave = () => {
        setOriginalMessage(stagedMessage); // Save staged changes to original message
        setIsEditing(false);
        handleSaveMessage();
        setEditingIndex(null);
    };

    const handleCancel = () => {
        setStagedMessage(originalMessage); // Revert staged changes to original message
        setIsEditing(false);
        setEditingIndex(null);
    };


    const handleSaveMessage = async () => {
        // Use the global state to get user or any other required data
        const { data } = useStore.getState(); 
      
        const payload = {
          triggeredMessageDetails: {
            customText: stagedMessage, // This seems to be the custom message you want to update
            triggeredMessageId: triggeredMessageNumberId, // Assuming `id` is the identifier of the message you're updating
            // Add any other necessary details here
          },
          user: data // If you need user data, otherwise you can omit this
        };
      
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
          const response = await fetch(`${apiUrl}/update-triggered-message-content`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
      
          if (response.ok) {
            const updatedMessage = await response.json();
            showToast('Message updated successfully!', 'success');
            // Set the original message to the staged message since it's now saved
            setOriginalMessage(stagedMessage);
            // You can reset isEditing state here to show the saved message without editing capabilities
            setIsEditing(false);
            // Additional logic here (e.g., maybe refresh a list of messages if you have one)
          } else {
            showToast('Failed to update message.', 'error');
          }
        } catch (error) {
          showToast('Error: Something went wrong!', 'error');
        }
      };
    


    return (
      <MessageCellContainer>
        <MessageTop>
            <HeadingAndSubhead>
                <h4>{triggeredMessageTitle}</h4>
                <Text 
                    text={triggeredMessageSubtitle} 
                />
            </HeadingAndSubhead>
            <ToggleSwitch
                active={isActive}
                onChange={handleToggle}
                disabled={isDisabled}
            />
        </MessageTop>
        <MessageContainer>
            <TextMessageTop>
                <Text 
                    text={triggeredMessageDefaultStart} 
                />
            </TextMessageTop>
            <TextareaAndButtons>
            <DropdownField 
                value={selectedToken} 
                onChange={handleDropdownChange}
                useDefaultDropdown={false}
                options={tokenOptions} // Replace with your actual token options
            />

                <Textarea
                    value={stagedMessage}
                    onChange={handleTextareaChange}
                    onKeyUp={handleKeyUp}
                    onClick={handleTextareaClick}
                    disabled={!isEditing}
                    ref={textareaRef}
                />

                <TextMessageBottom>
                    <Text 
                        text={triggeredMessageDefaultEnd1}
                    />
                    <Text 
                        text={triggeredMessageDefaultEnd2}
                    />
                </TextMessageBottom>
                {isEditing ? (
                    <>
                    <BottomButtons>
                        <ButtonContainer>
                            <Button
                                buttonTypeVariant="neutral"
                                sizeVariant="large"
                                label="Cancel"
                                buttonWidthVariant="fill"
                                onClick={handleCancel}
                            />
                        </ButtonContainer>
                        <ButtonContainer>
                            <Button
                                buttonTypeVariant="primary"
                                sizeVariant="large"
                                label="Save"
                                buttonWidthVariant="fill"
                                onClick={handleSave}
                            />
                        </ButtonContainer>
                    </BottomButtons>
                    </>
                ) : (
                    <ButtonContainer>
                        <Button
                            buttonTypeVariant={isDisabled || hasPendingMessageChanges ? "disabled" : "secondary"}
                            sizeVariant="large"
                            label="Edit Custom Text"
                            buttonWidthVariant="fill"
                            onClick={handleEdit}
                            disabled={isDisabled || hasPendingMessageChanges}
                        />
                    </ButtonContainer>
                )}
            </TextareaAndButtons>
        </MessageContainer>
    </MessageCellContainer>
    );
  };
  
  export default MessageCell;