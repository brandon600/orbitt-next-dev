import { VisitData } from "./VisitData";

export interface CustomerData {
    _id: string;
    visits: VisitData[];
 //   receivedBlasts: BlastMessageData[];
 //   updates: UpdateData[];
    customerid: string;
    date: string;
    signUpDate: string;
    lastTransactionDate: string;
    user: string;
    userMemberstackId: string;
    firstName: string;
    lastName: string;
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

