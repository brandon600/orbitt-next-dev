// store.ts
import { create } from 'zustand';

export interface UserData {
  userid: string;
  // Add other properties here as needed
}

interface Toast {
  visible: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface AppState {
  data: UserData;
  fetchData: () => Promise<void>;

    // toast state
    toast: Toast;

    // actions
    showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
    hideToast: () => void;
}

const initialData: UserData = {
  userid: '',
  // Add initial values for other properties as needed
};

const initialState: Toast = {
  visible: false,
  message: '',
  type: 'success',
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

   // toast state
   toast: initialState,
    // actions
  showToast: (message, type = 'success') => {
    set(() => ({
      toast: {
        visible: true,
        message,
        type,
      },
    }));
  },
  
  hideToast: () => {
    set((state) => ({
      toast: {
        ...state.toast,
        visible: false,
      },
    }));
  },
}));