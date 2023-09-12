import { VisitData } from "./VisitData";
import { BlastMessageData } from "./BlastMessageData";

export interface CustomerData {
    _id: string;
    visits: VisitData[];
    receivedBlasts: BlastMessageData[];
    customerid: string;
    userClass: string;
    date: string;
    signUpDate: string;
    lastTransactionDate: string;
    user: string;
    userMemberstackId: string;
    firstName: string;
    lastName: string;
    fullName: string;
    areaCodeNumber: string;
    phoneNumber1: string;
    fullPhoneNumber: string;
    rewardNumber: number;
    active: boolean;
    atRisk: boolean;
    totalVisits: number;
    starsEarned: number;
    rewardsRedeemed: number;
    birthdayMonth: string;
    birthdayDay: string;
    birthdayYear: string;
    fullBirthday: string;
    index: number;
    // Add other properties as needed
  }

