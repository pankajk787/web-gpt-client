import Message from './Message'

const ChatMessages = ({messages}) => {
  return (
    <div className='w-[70%] m-auto mt-8'>
        {
            messages.map((message) => {
                return <Message key={message.id} message={message} />
            })
        }
    </div>
  )
}

export default ChatMessages
