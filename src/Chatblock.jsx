import Chat from './chatComponents/chat/Chat';
import Detail from './chatComponents/detail/Details';
import List from './chatComponents/list/List';
import Login from './chatComponents/login/Login';
import "./chat.css"
import ChatList from './chatComponents/list/chatList/ChatList';
const Chatblock = ()=>{
   const user = false;

    return(
        <div className='container'>
            {user? (
            <>
                <List/>
                <Chat/>
                <Detail/>
            </>
            ):(
                <Login/>
            )}
        </div>
        
    );
};
export default Chatblock