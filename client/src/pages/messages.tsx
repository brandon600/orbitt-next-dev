import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import Colors from '@/constants/Colors';
import React, { useState, useEffect, useCallback } from 'react';
import GlobalStyle from '../GlobalStyle';
import { useStore, AppState } from '../store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import BottomSaveNotice from '@/components/molecules/BottomSaveNotice';
import io from "socket.io-client";
import { TriggeredMessageData } from '@/types/TriggeredMessageData';
import MessageCell from '@/components/molecules/MessageCell';


interface MessagesProps {
    triggeredMessagesData: TriggeredMessageData[];
}

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 40px;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    box-sizing: border-box;
    background: ${Colors.primary100};
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

export async function getServerSideProps() {
    try {
        // Fetch rewards data
        const response = await fetch('http://localhost:5000/triggered-messages');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const triggeredMessagesData = await response.json();
        console.log(triggeredMessagesData);

        // Return the fetched data as props
        return {
            props: {
                triggeredMessagesData,
            }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                triggeredMessagesData: []
            }
        };
    }
}

function Messages( { triggeredMessagesData: initialTriggeredMessagesData }: MessagesProps) {
    const { data, fetchData, toast, showToast, hideToast } = useStore();


const [hasPendingMessageChanges, setHasPendingMessageChanges] = useState(false);
const [originalTriggeredMessageToggles, setOriginalTriggeredMessageToggles] = useState<boolean[]>([]);
const [currentTriggeredMessageToggles, setCurrentTriggeredMessageToggles] = useState<boolean[]>([]);
const [triggeredMessagesData, setTriggeredMessagesData] = useState(initialTriggeredMessagesData);
const [editingIndex, setEditingIndex] = useState<number | null>(null);



useEffect(() => {
    console.log("Setting up socket connection.");
    const socket = io("http://localhost:5000");
  
    // Listen for 'reward-updated' events
    socket.on("triggered-message-updated", (updatedTriggeredMessage) => {
      // Update the rewardsData state here
      console.log(updatedTriggeredMessage)
      const updatedTriggeredMessagesData = triggeredMessagesData.map((triggeredMessage) => {
        if (triggeredMessage.messageNumberId === updatedTriggeredMessage.messageNumberId) {
          return updatedTriggeredMessage;
        }
        return triggeredMessage;
      });
      setTriggeredMessagesData(updatedTriggeredMessagesData);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });
  
    return () => {
      // Cleanup: Disconnect socket when component is unmounted
      socket.disconnect();
    };
}, [triggeredMessagesData]);

useEffect(() => {
    fetchData();
}, []);

useEffect(() => {
    setOriginalTriggeredMessageToggles(triggeredMessagesData.map((triggeredMessage) => triggeredMessage.active));
    setCurrentTriggeredMessageToggles(triggeredMessagesData.map((triggeredMessage) => triggeredMessage.active));
  }, [triggeredMessagesData]);


const handleTriggeredMessagePendingChange = (index: number, newValue: boolean) => {
    const newCurrentTriggeredMessageToggles = [...currentTriggeredMessageToggles];
    newCurrentTriggeredMessageToggles[index] = newValue;
    setCurrentTriggeredMessageToggles(newCurrentTriggeredMessageToggles);
    setHasPendingMessageChanges(!originalTriggeredMessageToggles.every((val, i) => val === newCurrentTriggeredMessageToggles[i]));
  };

async function handleSaveMessageChanges() {
        const updatedTriggeredMessagesData = triggeredMessagesData.map((triggeredMessage, index) => ({
          ...triggeredMessage,
          active: currentTriggeredMessageToggles[index]
        }));
      
        const payload = {
          updatedTriggeredMessages: updatedTriggeredMessagesData,
        };
      
        console.log(`Sending updated data: ${JSON.stringify(payload)}`);
      
        try {
          const response = await fetch('http://localhost:5000/update-triggered-messages', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
          });
      
          if (response.ok) {
            console.log('Successfully updated messages!');
            showToast('Successfully updated messages!', 'success'); // Added toast message
            setOriginalTriggeredMessageToggles(currentTriggeredMessageToggles);
            setHasPendingMessageChanges(false);
          } else {
            console.log('Failed to update messages.');
            showToast('Failed to update messages.', 'error');
          }
        } catch (error) {
          console.error('Error updating messages:', error);
          showToast('Error updating messages.', 'error');
        }
  }


const handleCancelMessageChanges: () => void = () => {
    // Step 1: Reset Message Toggles
    setCurrentTriggeredMessageToggles([...originalTriggeredMessageToggles]);
    // Step 2: Reset the hasPendingMessageChanges flag
    setHasPendingMessageChanges(false);
  };
  

const storeData = useStore.getState(); // Get the current state of the store
console.log('Store Data:', storeData); // Log the entire store data
console.log(triggeredMessagesData);


    return (
        <FlexDiv>
            <AnimatePresence>
            {hasPendingMessageChanges && (
              <BottomSaveNotice
                key="bottom-save-notice"
                onSave={handleSaveMessageChanges}
                onCancel={handleCancelMessageChanges}
              />
            )}
            </AnimatePresence>
            <AnimatePresence>
                {toast.visible && (
                    <Toast key="toast" />
                )}
            </AnimatePresence>
            <GlobalStyle />
            <MessagesPageTitle>
                <Text text='Messages' />
            </MessagesPageTitle>
            <MessageCellsContainer>
                {triggeredMessagesData.map((
				        { messageNumberId: triggeredMessageNumberId, 
				          messageTitle: triggeredMessageTitle, 
                  messageSubtitle: triggeredMessageSubtitle,
				          textMessageDefaultTextStart: triggeredMessageDefaultStart,
                  textMessageCustomText: triggeredMessageCustomText,
                  textMessageDefaultTextEnd1: triggeredMessageDefaultEnd1,
                  textMessageDefaultTextEnd2: triggeredMessageDefaultEnd2,
                  active: triggeredMessageActive,
				        }, index) => (
                <MessageCell
                        key={triggeredMessageNumberId} // Make sure to provide a unique key for each item
                        // Pass the data to the RewardItem component as props
                        index={index}
                        messageNumberId={triggeredMessageNumberId}
                        messageTitle={triggeredMessageTitle}
                        messageSubtitle={triggeredMessageSubtitle}
                        textMessageDefaultTextStart={triggeredMessageDefaultStart}
                        textMessageCustomText={triggeredMessageCustomText}
                        textMessageDefaultTextEnd1={triggeredMessageDefaultEnd1}
                        textMessageDefaultTextEnd2={triggeredMessageDefaultEnd2}
                        active={currentTriggeredMessageToggles[index]}
                        onTriggeredMessageToggleChange={handleTriggeredMessagePendingChange}
                        originalTriggeredMessageValue={originalTriggeredMessageToggles[index]}
                        editingIndex={editingIndex}
                        setEditingIndex={setEditingIndex}
                        hasPendingMessageChanges={hasPendingMessageChanges}
                        // Add other props as needed
                    />
            ))}
            </MessageCellsContainer>
        </FlexDiv>
    );
}

export default Messages;