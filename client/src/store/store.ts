// store.ts
import create from 'zustand';

interface UserData {
    userid: string;
    // Add other properties here as needed
  }

interface AppState {
  data: UserData[]; // Replace 'any' with your data type
  fetchData: () => Promise<void>;
}

export const useStore = create<AppState>((set) => ({
  data: [],

  fetchData: async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users'); // Replace with your API endpoint
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));