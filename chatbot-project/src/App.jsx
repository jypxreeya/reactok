import { useState } from 'react'
import { ChatInput } from './components/Chatinput';
import ChatMessages from './components/ChatMessages';

import './App.css'

           

      function App(){
const [chatMessages,setChatMessages]  = useState([{
         
                message:'hello babe',
                 sender:'user',
                 id:'id1'
              },{
                 message:'hey, sweetie how can i help u ?',
                 sender:'robot',
                 id:'id2'
              },{
                message:'i miss u',
                 sender:'user',
                 id:'id3'
              },{
            
                message:'oml i miss you too' ,
                 sender:'robot',
                 id:'id14'
              }]
            );
            //const [chatMessages,setChatMessages] =array;
            
            //const chatMessages = array[0] ;
         
           // const setChatMessages = array[1];
              return(
                <div className="app-container">
                
                <ChatMessages 
                chatMessages={chatMessages}/>
                <ChatInput  
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}/>
                </div>

              );
            }
      
      

export default App
