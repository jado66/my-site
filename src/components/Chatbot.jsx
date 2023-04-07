import { useState, useRef } from "react";
// Import styles from chat-ui-kit-styles
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// Import components from chat-ui-kit-react
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, MessageSeparator, Avatar, SendButton, AttachmentButton, InfoButton, MessageGroup, CustomMessage } from "@chatscope/chat-ui-kit-react";

const Chatbot = () => {

    const [isMinimized, setIsMinimized] = useState(true);
    const [isAmyTyping, setIsAmyTyping] = useState(false);
    const lastIdRef = useRef(0);
    const inputRef = useRef();
    const [msgInputValue, setMsgInputValue] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = message => {
        setIsAmyTyping(true);
        setMessages([...messages, {
          message,
          direction: 'outgoing'
        }]);
        setMsgInputValue("");
        inputRef.current.focus();
      };
    

    const handleChatbotMessage = (e) => {
        setChatbotMessage(e.target.value);
    };
    
    const handleChatbotResponse = () => {
        setChatbotResponse(chatbotMessage);
    };
    
    if (isMinimized) {
        return (
        <div>
            <button className="btn" onClick={() => setIsMinimized(false)} style = {{width: '150px', height: '150px'}} >
                <img 
                    src='AmyAvatar.png' 
                    className='img-fluid ps-lg-5 mx-lg-0 mx-auto my-auto' 
                    alt='chatbot'
                    
                />
            </button>
        </div>
        );
    }


    return (
        <div className = "box-shadow  me-4 mt-4" onBlur={()=>setIsMinimized(false)} 
            style = {{minWidth:"300px", height:"450px"}}
        >
            <MainContainer >
                <ChatContainer  >
                <MessageList scrollBehavior="smooth" >
                <Message model={{
                    message: "Hello and welcome to J-Apps. What can I help you with?",
                    sentTime: "15 mins ago",
                    sender: "Amy",
                    direction: "incoming",
                    position: "single"
                }}>
                        <Avatar src={'AmyAvatar.png'} name={"Amy"} />
                    </Message>
                    {messages.map(m => <Message key={m.id} model={m} />)}
                    {isAmyTyping&&<TypingIndicator content="Amy is typing" />}
                </MessageList>
                <MessageInput placeholder="Type message here" onSend={m => handleSend(m)} onChange={setMsgInputValue} value={msgInputValue} ref={inputRef} />
                    <div as={MessageInput} style={{
                        display: "flex",
                        flexDirection: "row",
                        borderTop: "1px dashed #d1dbe4"
                    }}>
                        <MessageInput ref={inputRef} onChange={msg => setMsgInputValue(msg)} value={msgInputValue} sendButton={false} attachButton={false} onSend={handleSend} style={{
                            flexGrow: 1,
                            borderTop: 0,
                            flexShrink: "initial"
                            }} />                                
                        <SendButton onClick={() => handleSend(msgInputValue)} disabled={msgInputValue.length === 0} style={{
                            fontSize: "1.2em",
                            marginLeft: 0,
                            paddingLeft: "0.2em",
                            paddingRight: "0.2em"
                            }} />
                            {/* <AttachmentButton style={{
                                fontSize: "1.2em",
                                paddingLeft: "0.2em",
                                paddingRight: "0.2em"
                                }} /> */}
                        <InfoButton onClick={() => alert("Important message!")} style={{
                            fontSize: "1.2em",
                            paddingLeft: "0.2em",
                            paddingRight: "0.2em"
                            }} /> 
                    </div>
                        
                </ChatContainer>
            </MainContainer>
        </div>
    );
}

export default Chatbot