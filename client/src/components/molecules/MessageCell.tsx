import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Button from '../atoms/Button';
import Textarea from '../atoms/Textarea';
import ToggleSwitch from '../atoms/ToggleSwitch';
import { TriggeredMessageData } from '@/types/TriggeredMessageData';

interface MessageCellProps extends TriggeredMessageData {
}


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

        p {
            color: ${Colors.neutral700};
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
        }
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


const handleClicked = () => {
    console.log('Clicked');
}

const MessageCell: React.FC<MessageCellProps> = ({
    messageNumberId: triggeredMessageNumberId, 
    messageTitle: triggeredMessageTitle, 
    messageSubtitle: triggeredMessageSubtitle,
    textMessageDefaultStart: triggeredMessageDefaultStart,
    textMessageCustomText: triggeredMessageCustomText,
    textMessageDefaultEnd1: triggeredMessageDefaultEnd1,
    textMessageDefaultEnd2: triggeredMessageDefaultEnd2,
    active: triggeredMessageActive,
    id,
  }) => {

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [originalMessage, setOriginalMessage] = useState<string>('Message Cell Value here');
    const [stagedMessage, setStagedMessage] = useState<string>(originalMessage);

    useEffect(() => {
        if (isEditing) {
            textareaRef.current?.focus();
        }
    }, [isEditing]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setOriginalMessage(stagedMessage); // Save staged changes to original message
        setIsEditing(false);
    };

    const handleCancel = () => {
        setStagedMessage(originalMessage); // Revert staged changes to original message
        setIsEditing(false);
    };


    return (
      <MessageCellContainer>
        <MessageTop>
            <HeadingAndSubhead>
                <h4>{triggeredMessageTitle}</h4>
                <p>{triggeredMessageSubtitle}</p>
            </HeadingAndSubhead>
            <ToggleSwitch
                active={true}
                onChange={handleClicked}
            />
        </MessageTop>
        <MessageContainer>
            <p>Message Custom Text</p>
            <TextareaAndButtons>
                <Textarea
                    value={stagedMessage}
                    onChange={(value) => setStagedMessage(value)}
                    disabled={!isEditing}
                    ref={textareaRef}
                />
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
                            buttonTypeVariant="secondary"
                            sizeVariant="large"
                            label="Edit Custom Text"
                            buttonWidthVariant="fill"
                            onClick={handleEdit}
                        />
                    </ButtonContainer>
                )}
            </TextareaAndButtons>
        </MessageContainer>
    </MessageCellContainer>
    );
  };
  
  export default MessageCell;