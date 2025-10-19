import { useState} from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

 export function ChatInput({chatMessages,setChatMessages}){
        const [inputText,setInputText] =useState('');
        function saveInputText(event){
          setInputText(event.target.value);
        }
        function sendMessage(){
            const newChatMessages =[ 
                ...chatMessages, // regenerate the html by adding the existing and new message 
                {
              message: inputText,
              sender:'user',
              id:crypto.randomUUID()
                }
              ];
               setChatMessages(newChatMessages); 
const response =  Chatbot.getResponse(inputText);
           setChatMessages([
                ...newChatMessages, // regenerate the html by adding the existing and new message 
                {
              message: response,
              sender:'robot',
              id:crypto.randomUUID()
                }
              ]); 
           setInputText('');
        }
            return ( 
                <div className="chat-input-container">
            <input 
            placeholder="send a message to chatbot" size="30" 
            value={inputText}  // controlled input 
            onChange={saveInputText}
           className="chat-input"
            />
            <button onClick={sendMessage}
            className="send-button"
            > Send</button>
            </div>);
}