import { useChatStore } from '../store/chat-store'
import Message from './Message'

const ChatMessages = ({messages}) => {
  const isGenerating = useChatStore((store) => store.isGenerating);
  const { isError, errorMsg } = useChatStore((store) => store.error);
  return (
    <div className='w-[70%] m-auto mt-8'>
        {
            messages.map((message) => {
                return <Message key={message.id} message={message} />
            })
        }
        {
          isGenerating && <p className='animate-pulse text-lg'>Thinking....</p>
        }
        {
          isError && <p className='text-red-500 w-fit'>{errorMsg || "Something went wrong. Try again!"}</p>
        }
    </div>
  )
}

export default ChatMessages
