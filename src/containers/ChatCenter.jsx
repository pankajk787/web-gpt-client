import { useState } from 'react'
import ChatMessages from '../components/ChatMessages'
import UserInputContainer from '../components/UserInputContainer'

const ChatCenter = () => {
    const [messages, setMessages] = useState([]);
  return (
    <div>
      <div id='chat-center' className="chat-center max-h-[100vh] overflow-y-auto pb-[180px]">
          
          {
            messages.length > 0 ? <>
                <ChatMessages messages={messages} />
                <UserInputContainer setMessages={setMessages}/>
            </> :
            <div className='flex flex-col gap-5 items-center justify-center h-[70vh] mt-4'>
                <Greet />
                <p className='text-2xl mb-5'>How can I help you today?</p>
                <UserInputContainer type="initial" setMessages={setMessages}/>
            </div>
          }
        </div>
    </div>
  )
}

export default ChatCenter;

const Greet = () => {
    const currentHour = new Date().getHours();
    let greet = "Morning";
    if(currentHour >= 0 && currentHour < 12) {
        greet = "Morning";
    } else if(currentHour >= 12 && currentHour <= 18 ) {
        greet = "Afternoon"
    } else {
        greet  ="Evening"
    }
    return (
        <p className='text-4xl'>Hi, Good {greet}!</p>
    )
}
