import Section from './Section'
import Experience from './Experience';
import DarkLightButton from './DarkLightButton';
import { HomeIcon } from '@heroicons/react/24/outline';
import { InboxIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';
import './App.css'


function App() {
  //each detail provides information for education compartments defined later
  const educationDetails = [
    {
      title: "HIGH SCHOOL DIPLOMA",
      company: "Pearblossom Academy, Inc ",
      city: "Bogue Chitto, MS",
      time: "Aug 2019 - Sep 2023",
      desc: "Completed Food Sciences and Safety courses with \"outstanding\" success"
    },
    {
      title: "CompTIA A+",
      company: "",
      city: "Sault ste Marie, ON",
      time: "Aug 2024",
      desc: "Inquire for Candidate ID"
    }
  ];

  //each detail provides information for Experience compartments defined later
  const experienceDetails = [
    {
      title: "FREELANCE SOFTWARE DEVELOPER",
      company: "",
      city: "Sault ste Marie, ON",
      time: "Oct 2023 - Dec 2024",
      desc: "Writing custom software to meet customer's unique needs. From office software utilities (such as PDF manipulation tools) to digital forensics software (NTFS journaling editor), to low-level software (HHTP-server operating system, embedded development, etc.), all varieties of Windows and Linux software needs were met in a punctual manner."
    },
    {
      title: "OFFICE CLEANER",
      company: "Alpine Janitorial ",
      city: "Kenora, ON",
      time: "Nov 2019 - Mar 2023",
      desc: "This role included using chemical solutions and cleaning equipment to maintain a high standard of cleanliness in office spaces."
    },
    {
      title: "INDUSTRIAL CLEANER",
      company: "New System Building Maintenance ",
      city: "Kenora, ON",
      time: "May 2021 - Jan 2023",
      desc: "This role included using chemical solutions and cleaning equipment to maintain an industrial level of cleanliness."
    },
    {
      title: "CONSTRUCTION WORKER",
      company: "",
      city: "Sault ste Marie, ON",
      time: "May 2024 - Nov 2024",
      desc: "Noted for being exceptionaly responsible in the workplace. Assistend with, learned, and performed various tasks in multiple construction trades, such as concrete forming, capour barrier installation, and drywall installation."
    }
  ];

  //each "detail" is a sub array that corresponds to a section on the resume
  const resumeDetails = [
    {
      header: "Contact Information",
      content: (
        <ul id="address-list">
          <li><HomeIcon className='text-blue-500' width={15} height={15}/> 570 MacDonald Ave</li>
          <li><PhoneIcon className='text-blue-500' width={15} height={15}/> 8072199073</li>
          <li><InboxIcon className='text-blue-500' width={15} height={15} /> <a href="mailto:jaihsonk@gmail.com">jaihsonk@gmail.com</a></li>
        </ul>
      ),
      side: true,
    },
    {
      header: "Skills",
      content: (
        <ul>
          <li>Friendly and Communicative</li>
          <li>Computer repair</li>
          <li>Server maintenence</li>
          <li>Network maintenence</li>
          <li>C/C++ programming</li>
          <li>x86 assembly programming</li>
          <li>C# programming</li>
          <li>Embedded systems development</li>
          <li>Linux</li>
          <li>Web Development</li>
        </ul>
      ),
      side: true
    },
    {
      header: "Objective",
      content: (
        <p>Quick-learning and dedicated IT enthusiast with storng computer skills, a solid work ethic, and a passion for technology. Seeking to contribute effectively to a dynamic IT team while continuing to grow in a challenging role.</p>
      ),
      side: false
    },
    {
      header: "Experience",
      content: (
        <>
        {experienceDetails.map((exp, index) => (
          <Experience key={index} {...exp}/>
        ))}
        </>
      ),
      side: false
    },
    {
      header: "Education",
      content: (
        <>
        {educationDetails.map((ed, index) => (
          <Experience key={index} {...ed}/>
        ))}
        </>
      ),
      side: false
    },
    {
      header: "References",
      content: (
        <>
          <p>Bill McNairn, construction supervisor<br/>cell: 7057256451</p>
          <p>Ben Mann, Owner of Alpine Janitorial<br/>What's App: +886 903973022</p>
        </>
      ),
      side: false
    }
  ];
  
  return (
    <>
      <header id="name-header">Jaihson Kresak<DarkLightButton/></header>
      <div id="grid-root">
        {resumeDetails.map((detail, index) => (
          <Section key={index} {...detail}/>
        ))}
      </div>
    </>
  );
}

export default App
