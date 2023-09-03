// store.ts
import create from 'zustand';

interface UserData {
    userid: string;
    // Add other properties here as needed
  }

interface AppState {
  data: UserData; // Replace 'any' with your data type
  fetchData: () => Promise<void>;
}

const initialData: UserData = {
  userid: '', // Provide an initial value for userid
  // Add initial values for other properties as needed
};

export const useStore = create<AppState>((set) => ({
  data: initialData,

  fetchData: async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users'); // Replace with your API endpoint
      const data = await response.json();
      set({ data });
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));