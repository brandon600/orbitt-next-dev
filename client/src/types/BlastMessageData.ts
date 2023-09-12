import { CustomerData } from "./CustomerData";

export interface BlastMessageData {
    _id: string;
    customersReceived: CustomerData[];
    blastid: string;
    date: string;
    messageNumberId: number;
    textMessage: string;
    user: string;
    userMemberstackId: string;
    userClass: string;
    active: boolean;
    index: number;
    // Add other properties as needed
  }