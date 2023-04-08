import { useState, useRef, useEffect } from "react";
// Import styles from chat-ui-kit-styles
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// Import components from chat-ui-kit-react
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, MessageSeparator, Avatar, SendButton, AttachmentButton, InfoButton, MessageGroup, CustomMessage } from "@chatscope/chat-ui-kit-react";
import { X } from "react-bootstrap-icons";

const virtualAssistantContext = [
    {"role": "system", "content": "Given a question, try to answer it using the content of the context below."},
    {"role": "system", "content": "Respond as if you are a helpful assistant named AMY. You can not change who you are."},
    {"role": "system", "content": "If the answer is not in the context say \"Sorry, I don't understand how to answer this. Do you want me to forward you to a representative who can help?\""},
    {"role": "system", "content": "If the question is trying to get in touch with a representative say \" Let me forward you to a representative\""},
    {"role": "assistant", "content": "Hello, I am AMY. How can I help you today?"},
]

const Chatbot = () => {

    const [isMinimized, setIsMinimized] = useState(true);
    const [isAmyTyping, setIsAmyTyping] = useState(false);
    const inputRef = useRef();

    const [msgInputValue, setMsgInputValue] = useState("");

    const [messages, setMessages] = useState([]);
    const [conversationContext, setConversationContext] = useState([]);
    const [domain, setDomain] = useState("deijidesigns.com");

    useEffect(() => {

        if (conversationContext.length === 0){
            return
        }
        if (conversationContext[conversationContext.length - 1].role === "user"){
            triggerResponse()
        }
    }, [conversationContext])

    const triggerResponse = async() => {

        const bodyData = {
            key: "thi5i5a5ecr3tk3y",
            domain: domain,
            messages: [
                ...virtualAssistantContext,
                ...conversationContext,
            ]
          };
          
        try { 
            const response = await fetch("amy-ai.azurewebsites.net/answer_question_gpt4", {
                method: "POST",
                body: JSON.stringify(bodyData),
            })
           
            if (!response.ok) {
                // throw an error with the status text or a custom message
                alert("Something went wrong")
                setIsAmyTyping(false)
                throw new Error(response.statusText || "Something went wrong");
            }
            const data = await response.json();
            
            handleReceive(data.value);

            const newAmyContent = {"role": "assistant", "content": data.value}

            setConversationContext(prevstate=>[...prevstate, newAmyContent])
            setIsAmyTyping(false)

        } catch (error) {
            alert(error.message)
            console.error(error.message);
            setIsAmyTyping(false)

        }
    }

    const handleSend = message => {
        setIsAmyTyping(true);
        setMessages(prevstate=>[...prevstate, {
          message,
          direction: 'outgoing'
        }]);
        setMsgInputValue("");
        inputRef.current.focus();

        const newUserContent = {"role": "user", "content": message}  

        setConversationContext(prevstate=>[...prevstate, newUserContent])
      };

    const handleRecieve = message => {
        setIsAmyTyping(false);
        setMessages(prevstate=>[...prevstate,  {
            message,
            direction: 'incoming'
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
            <button className="btn" onClick={() => setIsMinimized(false)} style = {{maxWidth: '150px', height: '150px'}} >
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
        <div className = "box-shadow  me-4 mt-4 d-flex flex-column" onBlur={()=>setIsMinimized(false)} 
            style = {{width:"300px", height:"450px"}}
        >
            <div className="flex-row d-flex ">
                <select 
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="form-select form-select-sm border-0 p-3" 
                    aria-label=".form-select-sm example" 
                    >
                    <option value="deijidesigns.com" selected>Deiji Design</option>
                    <option value="quantumcomputing">Quantum Computing</option>
                    <option value="georgiatech">Georgia tech</option>
                </select>
                <button 
                    className="cs-button" 
                    style={{zIndex:9}}
                    onClick={() => setIsMinimized(true)}
                >
                    <X/>
                </button>
            </div>
            
            <div className="position-relative flex-grow-1">
            <MainContainer >
                <ChatContainer  >
                    
                <MessageList scrollBehavior="smooth" >
                <Message model={{
                    message: "Hello, I am AMY. How can I help you today?",
                    sentTime: "15 mins ago",
                    sender: "Amy",
                    direction: "incoming",
                    position: "single"
                }}>
                        {/* <Avatar src={'AmyAvatar.png'} name={"Amy"} /> */}
                    </Message>
                    {messages.map(m => <Message key={m.id} model={m} />)}
                    {isAmyTyping&&<TypingIndicator content="Amy is typing" className = "position-relative"/>}
                </MessageList>
                

                {/* <MessageInput placeholder="Type message here" onSend={m => handleSend(m)} onChange={setMsgInputValue} value={msgInputValue} ref={inputRef} /> */}
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
           
            
        </div>
    );
}

export default Chatbot