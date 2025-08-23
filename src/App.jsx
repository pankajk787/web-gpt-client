import './App.css'
import LeftPanel from './components/LeftPanel';
import ChatCenter from './containers/ChatCenter';
function App() {

  return (
    <div className='root bg-neutral-900 text-slate-50 h-[100vh] flex overflow-hidden'>
      <LeftPanel />
      <div className="chat-container flex-1">
        <ChatCenter />
      </div>
    </div>
  )
}

export default App
