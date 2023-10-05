// store.ts
import { create } from 'zustand';
import { useAuth } from "@memberstack/react"
import Cookie from 'js-cookie';

export interface UserData {
  userid: string;
  companyName?: string;
  monthlyMessagesLeft?: number;
  totalMessagesSent?: number;
  messagingPhoneNumber: string;
  termsConditions?: string;
  // Add other properties here as needed
}

interface Toast {
  visible: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface AppState {
  data: UserData;
  fetchData: (memberstackId: string) => Promise<void>;

    // toast state
    toast: Toast;

    // actions
    showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
    hideToast: () => void;
}

export const initialData: UserData = {
  userid: '',
  messagingPhoneNumber: '',
  // Add initial values for other properties as needed
};

const initialState: Toast = {
  visible: false,
  message: '',
  type: 'success',
};

export const fetchData = async (memberstackId: string): Promise<UserData | null> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${apiUrl}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ memberstackId }), 
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: UserData = await response.json();
    Cookie.set('user', JSON.stringify(data));
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    return null;
  }
};

export const useStore = create<AppState>((set) => ({
  data: initialData,

  fetchData: async (memberstackId: string) => {
    const data = await fetchData(memberstackId);
    if (data) {
      set({ data });
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