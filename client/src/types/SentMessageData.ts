import { CustomerData } from "./CustomerData";

export interface SentMessageData {
    _id: string;
    customersReceived: CustomerData[];
    messageNumberId: number;
    user: string;
    userMemberstackId: string;
    date: string;
    messageTitle: string;
    messageContet: string;
    messageDelay: number;
    userClass: string;
    index: number;
    // Add other properties as needed
  }