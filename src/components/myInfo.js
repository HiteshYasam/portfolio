const INFO = {
    herosec : {
        title: "Hi, I'm Hitesh",
        profession: ["Software Engineer", "Web Developer"],
        objective: "I am Looking for a responsible Career opportunity in a reputable organization to utilize my technical skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.",
        resume: 'https://drive.google.com/file/d/11IrDuqjaUaCWOEBwN8ngU9OpSIvEJtqf/view?usp=drive_link'
    },

    skillsec : {
        title: "My Skills",
        skills : ["C++", "C", "Python" , "JavaScript", "HTML", "CSS", "TailWind CSS", "Node JS", "React JS", "MongoDB", "MySql", "Drupal"],
    },

    projectsec :{
        title: "My Projects",
        description: "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
        projects : [
            {   
                title: "Portfolio Website",
                image: "..\\public\\assets\\portfolioImg.png",
                description : "Personal portfolio website built using React JS to showcase my skills, projects, and achievements. It features a clean, responsive UI with component-based architecture and routing for easy navigation. The site uses centralized content management via a single myInfo.js file, allowing quick updates without altering component logic.",
                skills: "React JS | JavaScript | Git | Hosting",
                link: "https://github.com/HiteshYasam/portfolio"
            },
            {   
                title: "BigSync",
                image: "..\\public\\assets\\portfolioImg.png",
                description : "Software built for fault classification and dectection.FastAPI handles Excel-based current data processing, enabling real-time fault classification via REST APIs.The React frontend features Chart.js, Material-UI design, and file upload functionality.Custom DFT and detection algorithms, built with NumPy and Pandas.",
                skills: "Python | FastAPI | React | Chart.js | Pandas | NumPy | Excel Data",
                link: "https://github.com/HiteshYasam/BigSync"
            },
            {   
                title: "Spotify Clone",
                image: "/assets/spotifyImg.png",
                description : "Spotify-like music player with a responsive, dynamic UI. Features include play/pause, next/previous, seek bar, and volume controls for smooth playback. Albums and songs are auto-detected using JSON metadata and dynamic album displays, Requiring minimal manual setup. Real-time updates display song duration, dynamic SVG transitions.",
                skills: "HTML | CSS | JS ",
                link: "https://github.com/HiteshYasam/SpotifyClone"
            },
            {   
                title: "Todo-List",
                image: "/assets/todoImg.png",
                description : "Todo List web app built using React and Tailwind CSS with full CRUD functionality. It stores tasks persistently using LocalStorage and manages them with unique IDs via the uuid library. React Hooks like useState and useEffect ensure dynamic state management and real-time UI updates. Users can toggle checkboxes, edit tasks and delete them.",
                skills: "React | Tailwind CSS | LocalStorage",
                link: "https://github.com/HiteshYasam/TodoList"
            },
            {   
                title: "RSD 7.0 (IIT PKD)",
                image: "/assets/rsdImg.png",
                description : "Responsive website for RSD 7.0: Pravaha, the flagship research event of IIT Palakkad. Designed a clean, user-friendly interface using HTML, CSS (Bootstrap), and JavaScript. Built dynamic sections for event details, registration, schedule, and team introduction. Integrated external links for submissions, registrations, and guidelines.",
                skills: "HTML | CSS | JS",
                link: "https://github.com/HiteshYasam/RSD_7.0"
            },
            {   
                title: "Twitter Clone",
                image: "/assets/twitterImg.png",
                description : "Twitter Clone built with Tailwind CSS, optimized for rapid development and responsiveness. Tailwind uses utility classes compiled into a final output.css file, avoiding inline styles. Breakpoints ensure smooth layouts across all devices. Additionally, Vite was used for fast development and live reloading.",
                skills: "HTML | Tailwind CSS | JS",
                link: "https://github.com/HiteshYasam/TwitterClone"
            },
            {   
                title: "Netflix Clone",
                image: "/assets/netflixImg.png",
                description : "This Netflix Clone replicates the front-end UI using HTML, CSS, and SVG elements for precision. It showcases usage of the <video> tag with properties like autoplay, loop, and mute. Responsive design was achieved through various CSS techniques, ensuring compatibility across screen sizes. Roboto font was imported via Google Fonts for a polished finish.",
                skills: "HTML | CSS ",
                link: "https://github.com/HiteshYasam/NetflixClone"
            },
            {   
                title: "Landing Page",
                image: "/assets/landingpageImg.png",
                description : "This is a basic landing page built using HTML and CSS to showcase responsive design fundamentals. It highlights the use of key CSS properties for adaptability across all screen sizes. A custom typewriter effect was created using @keyframes and animation properties. The effect includes both a typing motion and a blinking cursor for added flair.",
                skills: "HTML | CSS ",
                link: "https://github.com/HiteshYasam/p1LandingPage"
            },
        ]
    },
    contactSec: {
        socials:{
            gmail: 'mailto:hiteshyasam@gmail.com',
            twitter: 'https://x.com/?lang=en',
            instagram: 'https://www.instagram.com/',
            facebook: 'https://www.facebook.com/',
            mobile: '+91-85209 18739',
            address: 'Chirala(523157), Andhra Pradesh, India'
        }
    }
};
export default INFO