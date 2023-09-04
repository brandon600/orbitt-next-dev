// store.ts
import create from 'zustand';
import { RewardData } from '../types/RewardData';
import { DefaultRewardData } from '../types/DefaultRewardData';

export interface UserData {
  rewards: RewardData[]; // Define the Reward type
  defaultRewards: DefaultRewardData[];
  userid: string;
  // Add other properties here as needed
}

interface AppState {
  data: UserData;
  fetchData: () => Promise<void>;
}

const initialData: UserData = {
  rewards: [],
  defaultRewards: [],
  userid: '',
  // Add initial values for other properties as needed
};

export const useStore = create<AppState>((set) => ({
  data: initialData,

  fetchData: async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      set({ data });
      console.log(data);
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
    }
  },
}));