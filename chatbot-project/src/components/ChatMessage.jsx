import RobotProfileImage from '../assets/robot.jpg'
import GirlProfileImage from '../assets/girl.jpg'
import './ChatMessage.css';

export function ChatMessage({message,sender}){
           //  const {message,sender} =props;
    

             /*if(sender === 'robot'){
                return(
                    <div>
                     <img src="robot.jpg" width="50" />
                      {message}
                </div>
                );
             }
                */
            return (
                <div className={ sender === 'user' ? 'chat-message-user':'chat-message-robot'}>
              
               {sender === 'robot' && <img src={RobotProfileImage}  className="chat-message-profile"/>}
     <div className="chat-message-text">
              {message}
    </div>
              { sender === 'user' &&  <img src={GirlProfileImage} className="chat-message-profile"  />}
                </div>
                );}