export type Message = {
    user_id?: string;
    content: string;
    role: string;
}

export type MessagesListProps = {
    loading: boolean;
    messages: Message[];
    assistantLoadingMessage?: Message;
    delay: number;
}

export type SendMessagesProps = {
    loading: boolean;
    sendMessage: (message: Message) => void;
    codeRed: boolean;
};
