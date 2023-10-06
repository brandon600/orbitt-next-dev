import Text from '../src/components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../src/constants/StyledMediaQuery';
import Button from '../src/components/atoms/Button';
import Colors from '@/constants/Colors';
import React, { useState, useEffect, useCallback } from 'react';
import GlobalStyle from '../src/GlobalStyle';
import { useStore, AppState, UserData, initialData, fetchData } from '../src/store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import BottomSaveNotice from '@/components/molecules/BottomSaveNotice';
import io from "socket.io-client";
import { TriggeredMessageData } from '@/types/TriggeredMessageData';
import MessageCell from '@/components/molecules/MessageCell';
import { useMemberAuth } from '../src/util/global/globalHooks';
import { GetServerSidePropsContext } from 'next';
import Cookie from 'js-cookie';


interface MessagesProps {
    userData: UserData;
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

 export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userCookie = context.req.cookies.user;
  let userData: UserData = initialData;

  if (userCookie) {
      userData = JSON.parse(userCookie);
  } else {
      // Fetch user data if it's not in the cookie
      const memberstackId = context.req.cookies.memberstackId; // or however you're identifying the user
      if (memberstackId) {
          const fetchedData = await fetchData(memberstackId); // fetchData can return null
          if (fetchedData) {
              userData = fetchedData;
              // fetchData already sets the cookie, so you don't have to do it again here
          }
      }
  }

  if (!userData.userid) {
      return 'no user data'
  }

  console.log(userCookie)
  console.log(userData)

    try {
        // Fetch messagess data
        const userId = userData.userid;
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${apiUrl}/triggered-messages?userId=${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const triggeredMessagesData = await response.json();
        console.log(triggeredMessagesData);

        // Return the fetched data as props
        return {
            props: {
                userData,
                triggeredMessagesData,
            }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                userData,
                triggeredMessagesData: []
            }
        };
    }
}

function Messages( { triggeredMessagesData: initialTriggeredMessagesData, userData }: MessagesProps) {
    const { data, fetchData, toast, showToast, hideToast } = useStore();

const [hasPendingMessageChanges, setHasPendingMessageChanges] = useState(false);
const [originalTriggeredMessageToggles, setOriginalTriggeredMessageToggles] = useState<boolean[]>([]);
const [currentTriggeredMessageToggles, setCurrentTriggeredMessageToggles] = useState<boolean[]>([]);
const [triggeredMessagesData, setTriggeredMessagesData] = useState(initialTriggeredMessagesData);
const [editingIndex, setEditingIndex] = useState<number | null>(null);
const { userId } = useMemberAuth();

useEffect(() => {
    console.log("Setting up socket connection.");
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    if (!apiUrl) {
        throw new Error("API_BASE_URL is not defined");
    }

    const socket = io(apiUrl);
  
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

    socket.on('error', (error) => {
      console.error('Socket Error:', error);
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
        const userId = userData.userid;
      
        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
          const response = await fetch(`${apiUrl}/update-triggered-messages?userId=${userId}`, {
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