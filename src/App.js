import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; // Import Projects component
import Pagination from './components/Pagination'; // Import Pagination component
import Contact from './components/Contact';

import './index.css'; // Ensure styles are included
// ...other imports

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [slideDirection, setSlideDirection] = useState('none');
  const [isManual, setIsManual] = useState(false);

  const projectsRef = useRef(null); // Create a ref for the projects section

  const projectsPerPage = 6;
  const allProjects = [
    {
      imgSrc: "https://www.flamingoagency.com/wp-content/uploads/2023/06/dataworks-portfolio-1024x646.webp",
      title: "Business Project",
      description: "A management app for client tracking, sales, and reporting, designed for efficiency. Built with HTML, CSS, JavaScript, and backend integration."
    },
    {
      imgSrc: "https://digitallinkspro.qa/wp-content/uploads/2023/09/ecommerce-website-checklist-b-.jpg",
      title: "E-commerce Project",
      description: "An online shopping platform with features like product browsing, cart, and secure checkout. Built with HTML, CSS, JavaScript, and backend support."
    },
    {
      imgSrc: "https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2024/01/MSFT_M365_Jan_10_Blog-1_240111_V03-1024x576.webp",
      title: "Blog Project",
      description: "A personal blog with features like article posting, commenting, and user authentication. Built with React, Node.js, and MongoDB."
    },
    {
      imgSrc: "https://sbr-technologies.com/wp-content/uploads/2021/07/Web-Development.jpg",
      title: "Portfolio Project",
      description: "A personal portfolio website showcasing projects, skills, and contact details. Built with React and CSS."
    },
    {
      imgSrc: "https://as1.ftcdn.net/v2/jpg/02/65/12/50/1000_F_265125093_LgmQ05Y8pegaB9fgbPf4X0ERY6RIgBVr.jpg",
      title: "Task Manager",
      description: "A task management app for efficient project tracking and task delegation. Built with React and Node.js."
    },
    {
      imgSrc: "https://market-resized.envatousercontent.com/previews/files/333089017/01_sociala.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=3c79c7b917a0449819b5077aaf34b6b583f54de112e8b7a7ed55e89849e0fd48",
      title: "Social Media App",
      description: "A social media platform with features like posts, comments, likes, and user authentication. Built with React and Firebase."
    },
    {
      imgSrc: "https://vtiacademy.edu.vn/upload/images/cau-lac-bo/huong-dan-tu-hoc-data-analyst-cho-nguoi-moi.jpg",
      title: "Data Analytics Project",
      description: "A data analytics dashboard with interactive visualizations and reporting capabilities."
    },
    {
      imgSrc: "https://www.lifewire.com/thmb/SgPm0iZSJ7bMD64fKDvCbKMKW5E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/youtube-music-commute-songs-6e1143444cb4465f991439c6809d1bba.png",
      title: "Music Streaming App",
      description: "A music streaming app with a playlist manager, play/pause functionality, and user preferences."
    },
    {
      imgSrc: "https://www.skillshub.com/wp-content/uploads/2023/01/office-work-collaboration.jpg",
      title: "Online Course Platform",
      description: "A platform for creating and managing online courses with video and content uploads."
    },
    {
      imgSrc: "https://shivlab.com/wp-content/uploads/2024/02/inner.jpg",
      title: "Photo Editor App",
      description: "A photo editing app with filters, cropping, and various image manipulation tools."
    },
    {
      imgSrc: "https://credcv.com/wp-content/uploads/2021/06/benefits-of-having-an-own-job-portal_033e017b0_3810.jpeg",
      title: "Job Portal",
      description: "An online job portal with job posting, resume uploads, and application tracking."
    },
    {
      imgSrc: "https://cdn.dribbble.com/userupload/3495254/file/original-a8d75d496a8c190c944815869a334e5a.jpg",
      title: "Food Delivery App",
      description: "A mobile app for food delivery with restaurant browsing, order placement, and real-time tracking."
    }
  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (page, direction) => {
    setSlideDirection(direction);
    setIsManual(true);
    setTimeout(() => {
      setCurrentPage(page);

      // Scroll to the top of the projects section
      if (projectsRef.current) {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    setTimeout(() => {
      setIsManual(false);
    }, 5000);
  };

  useEffect(() => {
    if (isManual) return;

    const interval = setInterval(() => {
      const nextPage = currentPage === Math.ceil(allProjects.length / projectsPerPage) ? 1 : currentPage + 1;
      handlePageChange(nextPage, 'right');
    }, 50000);

    return () => clearInterval(interval);
  }, [currentPage, isManual, allProjects.length]);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <div ref={projectsRef} className={`projects-container slide-${slideDirection}`}>
        <Projects projects={currentProjects} />
      </div>
      <Pagination
        totalProjects={allProjects.length}
        projectsPerPage={projectsPerPage}
        onPageChange={(page) =>
          handlePageChange(page, page > currentPage ? 'right' : 'left')
        }
        currentPage={currentPage}
      />
      <Contact />
    </>
  );
}

export default App;