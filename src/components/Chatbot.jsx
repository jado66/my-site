import { useState, useRef, useEffect } from "react";
// Import styles from chat-ui-kit-styles
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// Import components from chat-ui-kit-react
import { MainContainer, Button, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, MessageSeparator, Avatar, SendButton, AttachmentButton, InfoButton, MessageGroup, CustomMessage } from "@chatscope/chat-ui-kit-react";
import {  X, XCircleFill } from "react-bootstrap-icons";

const virtualAssistantContext = [
    {"role": "system", "content": "Try to answer the question using the below context"},
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "system", "content": "Do not guess an answer to a question. If it is not in the context do not answer."},
    {"role": "system", "content": "If the person is trying to get in touch with a representative say \" Let me forward you to a representative\""},

]

const Chatbot = () => {

    const [isMinimized, setIsMinimized] = useState(true);
    const [isAmyTyping, setIsAmyTyping] = useState(false);
    const inputRef = useRef();

    const [msgInputValue, setMsgInputValue] = useState("");

    const [messages, setMessages] = useState([]);
    const [conversationContext, setConversationContext] = useState([]);
    const [domain, setDomain] = useState("deijidesigns.com");

    const [isStoredMessages, setIsStoredMessages] = useState(false);

    const [isChatbotOpen, setIsChatbotOpen] = useState(true);

    // When convo context changes, check if last message was from user, if so, trigger response
    useEffect(() => {

        if (conversationContext.length === 0){
            return
        }
        if (conversationContext[conversationContext.length - 1].role === "user"){
            triggerResponse()
        }
    }, [conversationContext])

    // When domain changes, check if there are stored messages, if so, grab them
    useEffect(() => {

        // If there are no stored messages, check if there are stored messages
        const storedMessages = JSON.parse(localStorage.getItem(domain+"_messages"))

        if (storedMessages){
            if (storedMessages.length !== 0){
                setIsStoredMessages(true)
            }
            return
        }
        else{
            console.log(domain)
            sendInitialMessage()
        }
    }, [domain])


    useEffect(() => {
        
        if (messages.length === 0){
            return
        }

        localStorage.setItem(domain+"_messages", JSON.stringify(messages))
        localStorage.setItem(domain+"_conversationContext", JSON.stringify(conversationContext))

    }, [messages])

    const sendInitialMessage = () => {
        
        console.log("sending initial message")

        if (messages.length !== 0){
            return
        }

        setIsAmyTyping(true)
        
        // wait 1 second before sending message
        setTimeout(() => {
            setIsAmyTyping(false)
            setMessages(prevstate=>[...prevstate,  {
                message:`Hi, I'm Amy. I'm here to help you with your questions about ${domain}.`,
                direction: 'incoming'
            }]);
        }, 1000);
    }

    const grabStoredMessages = () => {
        const storedMessages = JSON.parse(localStorage.getItem(domain+"_messages"))
        const storedConversationContext = JSON.parse(localStorage.getItem(domain+"_conversationContext"))
        setMessages(storedMessages)
        setConversationContext(storedConversationContext)
        setIsStoredMessages(false)
    }

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
            const response = await fetch("https://amy-ai.azurewebsites.net/api/v1/request_ai_response", {
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
        setConversationContext(prevstate=>[...prevstate, newAssistantContent])
        setMsgInputValue("");
        inputRef.current.focus();
    };

    const clearMessages = () => {

        if (messages.length === 0){
            return
        }

        setMessages([])
        setConversationContext([])
        localStorage.removeItem(domain+"_messages")
        localStorage.removeItem(domain+"_conversationContext")

        setIsAmyTyping(true)

        setTimeout(() => {
            setIsAmyTyping(false)
            setMessages(prevstate=>[...prevstate,  {
                message:`Hi, I'm Amy. I'm here to help you with your questions about ${domain}.`,
                direction: 'incoming'
            }]);
            setConversationContext(prevstate=>[...prevstate,  {
                role: "assistant",
                content: `Hi, I'm Amy. I'm here to help you with your questions about ${domain}.`
            }]);

        }, 1000);
    }
    
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
                    
                    {
                        messages.length === 0 && isStoredMessages &&
                        <Message.CustomContent>
                            <button className="btn btn-outline-info text-dark my-2 w-100" onClick={grabStoredMessages}>Load previous conversation</button>
                        </Message.CustomContent>
                    }
                    
                        
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
                        <Button icon={<XCircleFill/>} className = "d-flex align-items-center me-2" style={{
                            fontSize: "1.2em",
                            paddingLeft: "0.2em",
                            paddingRight: "0.2em"
                            }} 
                            onClick={clearMessages}
                            ></Button> 
                    </div>
                   
                        
                </ChatContainer>
            </MainContainer>
            </div>
           
            
        </div>
    );
}

export default Chatbot