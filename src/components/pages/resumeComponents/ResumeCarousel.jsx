import WorkHistoryCard from "@/components/WorkHistoryCard"

const ResumeCards = [<WorkHistoryCard
                company = "Sinch"
                title = "Lead Front End Web Developer"
                workHref = "http://www.sinch.com"
                className = "mb-3"
                dates = "June 2022 - Now"
                content = {[
                    'Lead the development of US based frontend web development team',
                    'Use localization to make site accessible to multiple languages',
                    'Allow customers to view and modify data using API calls to our database',
                    'Create reusable styled components with dynamic properties'
                ]}
                skills = 'React, Typescript, Material UI'
            />,
            <WorkHistoryCard
                company = "FBI"
                title = "Full Stack Developer"
                workHref = "http://www.fbi.gov"
                dates = 'October 2021 - June 2022'
                className = "mb-3"
                content = {[
                    'Created custom Django applications for FBI to process internal legal data',
                    'Designed and implemented an easy-to-use accessible user interface using Bootstrap, custom CSS and JavaScript',
                    'Integrated custom middleware to authenticate automatically log in users in the application',
                    'Created custom Django web services to send automated emails via a scheduled tasks',
                    // `Utilized PyTest, Python Unittest, and Django's unit tests to create automated testing for all aspects of the application`,
                    // 'Created dozens of Python capabilities to processes and analyze data of many different file types',
                    // 'Participated in agile sprints using Jira, and used BitBucket and Git to manage different versions of the code'
                ]}
                skills = 'Object Oriented Python, Bootstrap, Django, SQL Server'
            />,
            <WorkHistoryCard
                company = "KBR"
                title = "Lead Quantum Computing Software Developer"
                workHref = "http://www.kbr.com"
                dates = 'May 2020 - October 2021'
                className = "mb-3"
                content = {[
                    'Lead the development of a suite of quantum computing applications for designing new quantum computer chip schematics and developing, testing, and compiling quantum computing algorithms (i.e. a quantum computing IDE)',
                    'Designed and built a quantum code editor which was synchronized to a custom drag-and-drop quantum circuit creator',
                    'Developed an Electron application using Node.js to manage and connect various tools in the suite',
                    'Create intuitive front-end designs and styles using professional image editing software',
                    // 'Mentored and directed a team of full-time software engineers and intern',
                ]}
                skills = 'Python, JS, Node.js, C++, Electron'
            />,
            <WorkHistoryCard
                company = "Integrity Applications Incorporated"
                title = "Quantum Computing Systems Engineer"
                workHref = "https://www.linkedin.com/company/integrity-applications-incorporated/"
                dates = 'April 2019 - May 2020'
                className = "mb-3"
                content = {[
                    'Second inventor on Quantum Computing patent application',
                    'Produced dozens of high-fidelity 3D models and detailed patent drawings to iteratively optimize patent design',
                    'Analyzed dozens patent applications and academic research articles', 
                ]}
                skills = 'Python, CAD, 3D Printing, Arduino '
            />,
            <WorkHistoryCard
                company = "Personal Project"
                title = "No-code Website Builder"
                workHref = "https://jado66.github.io/reactive-site-creator-live/"
                className = "mb-3"
                dates = 'June 2021 - June 2022'
                content = {[
                    'Created full-stack React application to allow non-technical users to create dynamic websites',
                    'Connected multiple technologies to allow data to flow between server side, client side, and database',
                    'Developed business plan, application requirements, and software development plan',
                ]}
                skills = 'MongoDB, Express, React, Node.JS (MERN stack)'
            />,
            <WorkHistoryCard
                company = "Personal Project"
                title = "Game Development"
                dates = 'Sept 2019 - Dec 2020'
                content = {[
                    'Created a space-based simulation with complicated GUI and game mechanics',
                    'Developed a custom physics engine that handled gravitational forces, non-elastic collisions, and orbital mechanics',
                    'Implemented an artificial intelligence system and a simulated economy system',
                ]}
                skills = 'C++, C#, Unity Engine'
            />]
    


export default ResumeCards