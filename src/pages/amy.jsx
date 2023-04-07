import Head from 'next/head';
import { useState, useEffect } from 'react';

const Amy = () => {
  
    const [jobTitleIndex, setJobTitleIndex] = useState(0);
    const colors = ['#FF0000','#00FF00','#FFA500','#0000FF']
    const jobTitles = ['Receptionist', 'Customer Support', 'Call Center Representative', 'Service Manager'];

    useEffect(() => {
        const intervalId = setInterval(() => {
          setJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, [jobTitles.length]);

    return (
        <>
        <Head>
            <title>AMY - AutoMate Your </title>
        </Head>
        <div className='container pb-5 col-lg-8 col-12'>
            
            <Card className = 'd-flex flex-column mb-3 text-center mt-5 p-5'>
                <h1 >Introducing Your Personal AI Assistant - AMY </h1>
                <hr/>
                <p className='h1 text-primary mb-3'><strong className= "text-dark">A</strong>uto<strong className= "text-dark">M</strong>ate <strong className= "text-dark">Y</strong>our</p>
                <p className='h1' style={{color:colors[jobTitleIndex]}}>{jobTitles[jobTitleIndex]}</p>
            </Card>
           
            
            <Card className = 'd-flex flex-lg-row flex-col mb-3'>
                <div className='col-lg-3 col-12 my-auto w-100 d-flex mt-lg-0 mt-5'>
                    <img src = 'Amy.png' className = 'img-fluid ps-lg-5 mx-lg-0 mx-auto' alt = 'chatbot'/>
                </div>
                <div className='col-lg-9 col-12 p-5'>
                    <h2 className = "text-center mt-4 mb-5 ">Introducing AMY - Your Personal AI Assistant</h2>
                    <p className='fs-5'>With AMY, you can optimize your business operations by automating customer service tasks with human-like responses. AMY is highly customized and learns from your unique data, delivering exceptional service with perfect precision.</p>
                </div>  
            </Card>
           
            <Card className = 'd-flex flex-column mb-3 p-5'> 
                <h2 className = "text-center mt-4 mb-3 ">What is AMY?</h2>
                <p className='fs-5'>AMY is a powerful AI platform that offers customized solutions to the unique needs of your business. Using trillions of parameters, AMY delivers a human-like experience by learning from your website and data. AMY can connect with your customer and handle their requests with ease through a chat module, phone call system and text message service.</p>
            </Card>
           
            <Card className = 'd-flex flex-column mb-3 p-5'>
                <div className='flex-column mb-4'>
                    <h2 className = "text-center mt-4 mb-3 ">AMY's Capabilities</h2>
                    <p className='fs-5'>AMY can provide a range of services for your business from managing appointments, processing orders and providing exceptional support to your customers. AMY's capabilities are vast and can be tailored to meet the unique needs of your business.</p>
                </div>
                <div className='flex-row d-flex'>
                    <div className='col-4 flex-column px-3'>
                        <img src = 'https://www.taskcloset.com/wp-content/uploads/2019/07/optimized-banner.png' className = 'img-fluid mb-3' alt = 'chatbot'/>
                        <h3 className = "text-center h5">Create Appointments</h3>
                        <p className=''>AMY can create and schedule appointments for your business with ease and precision.</p>

                    </div>
                    <div className='col-4 flex-column px-3'>
                        <img src = 'Shopping.png' className = 'img-fluid mb-3 rounded-3' alt = 'chatbot'/>
                        <h3 className = "text-center h5">Take Orders</h3>
                        <p>AMY can manage and process orders, freeing up valuable resources in your organization.</p>
                    </div>
                    <div className='col-4 flex-column px-3'>
                        <img src = 'Support.png' className = 'img-fluid mb-3' alt = 'chatbot'/>
                        <h3 className = "text-center h5">Handle Customer Inquiries</h3>
                        <p>AMY can handle all customer inquiries and provide human-like responses that match your brand.</p>
                    </div>

                </div>
               
            </Card>

            <Card className = 'd-block column mb-3 p-5'> 
                <h2 className = "text-center mt-4 mb-5 ">Benefits of Using AMY</h2>
                
                <div class="row g-3">
                    <div class="col-6">
                        <div className='p-3 rounded-3 border border-dark h-100 text-start' style={{backgroundColor:"#DCDDEF"}}>
                            <h3 className = "text-start h5 mb-3 fw-bold">Cost-Efficient</h3>
                            <p className='fs-5'>By using AMY, you can reduce your costs related to hiring additional employees, especially for customer service.</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div className='p-3 rounded-3 border border-dark h-100 text-start' style={{backgroundColor:"#DCDDEF"}}>
                            <h3 className = "text-start h5 mb-3 fw-bold">Time Saving</h3>
                            <p className='fs-5'>AMY can work 24/7, providing personalized customer service, freeing up your team's time to focus on what they do best.</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div className='p-3 rounded-3 border border-dark h-100 text-start' style={{backgroundColor:"#DCDDEF"}}>
                            <h3 className = "text-start h5 mb-3 fw-bold">Improved Customer Satisfaction</h3>
                            <p className='fs-5'>With AMY's human-like responses, your customers will feel that they are interacting with a human and get personalized assistance. This enhances customer experience and satisfaction.</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div className='p-3 rounded-3 border border-dark h-100 text-start' style={{backgroundColor:"#DCDDEF"}}>
                            <h3 className = "text-start h5 mb-3 fw-bold">Customized</h3>
                            <p className='fs-5'>With AMY's human-like responses, your customers will feel that they are interacting with a human and get personalized assistance. This enhances customer experience and satisfaction.</p>
                        </div>
                    </div>
                </div>
               
            </Card>

            <Card className = 'd-flex flex-row mb-3'> 
                <div className='col-9 p-5'>
                    <h2 className = "text-center mt-4 mb-5 ">Monitoring Performance</h2>
                    <p className='fs-5'>AMY comes with powerful analytics tools, which help you monitor and measure your assistant's performance seamlessly. From response time to customer satisfaction, churn rate, engagement rates and much more, you can now measure the impact of your assistant and refine it as quickly and frequently as needed based on data-driven decision making.</p>
                </div>  
                <div className='col-3 d-flex '>
                    <div className=' flex-grow-1' style={{backgroundColor:"#DCDDEF"}}/>
                    {/* <img src = 'amy.png' className = 'img-fluid ps-5' alt = 'chatbot'/> */}
                </div>
            </Card>

            <Card className = 'd-flex flex-row'> 
                <div className='col-3 d-flex '>
                    <div className=' flex-grow-1' style={{backgroundColor:"#DCDDEF"}}/>
                    {/* <img src = 'amy.png' className = 'img-fluid ps-5' alt = 'chatbot'/> */}
                </div>
                <div className='col-9 p-5'>
                    <h2 className = "text-center mt-4 mb-5 ">Partner With Us</h2>
                    <p className='fs-5'>Take your business to the next level with AMY, the most advanced and reliable AI assistant for your customer service and business operations. Sign up today and receive a life-changing assistance experience that will improve your customer satisfaction and increase sales for your business.</p>
                    <button className = "btn btn-info">Get Started Now</button>
                </div>  
            </Card>
           
          
        </div>
        </>
    );
};

export default Amy;


const Card = (props) => {
    return (
        <div className={'card '+props.className}>
            {props.children}
        </div>
    );
}