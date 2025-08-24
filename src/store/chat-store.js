import { create } from "zustand";
import { devtools } from "zustand/middleware";
const store = (set) => ({
    isGenerating: false,
    setIsGenerating: (value) => set(state => ({ ...state, isGenerating: value }), false, 'setIsGenerating'),
    error: { isError: false, errorMsg: ""},
    setError: (value) => set(state => ({ ...state, error: value }), false, 'setError')
    // userChats: {},
    // addUserChat: (chatId, messages) => 
});

export const useChatStore = create(devtools(store));