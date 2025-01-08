import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/qs.webp";
import projImg2 from "../assets/img/fda.png";
import projImg3 from "../assets/img/ox.png";
import projImg4 from "../assets/img/zms.gif";
import projImg5 from "../assets/img/am.png";
import projImg6 from "../assets/img/genai.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {FaGithub} from 'react-icons/fa'

export const Projects = () => {

  const projects = [
    {
      title: "Quinstreet",
      description: "Full stack development",
      imgUrl: projImg1,
      link:"https://www.quinstreet.com/",
    },
    {
      title: "FDA Food Code Builder",
      description: "API management and LLM integration",
      imgUrl: projImg2,
      link:"https://www.accessdata.fda.gov/scripts/ora/pcb/index.cfm?action=main.pcb",
    },
    {
      title: "Oxy AI",
      description: "Automation and AI",
      imgUrl: projImg3,
      link:"https://oxmaint.com/portal/portal.html",
    },
    {
      title: "Zimyo",
      description: "HR and Payroll management",
      imgUrl: projImg4,
      link:"https://www.zimyo.com/",
    },
    {
      title: "Accenture AMAP platfform",
      description: "Multimedia Advertising using historical data",
      imgUrl: projImg5,
      link:"https://www.accenture.com/us-en/services/communications-media/multimedia-advertising-platform",
    },
    {
      title: "Gen AI Projects",
      description: "Github repositories for personal Gen AI projects",
      imgUrl: projImg6,
      link:"https://github.com/Vins1443?tab=repositories",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In my portfolio, you'll find a diverse range of projects showcasing my expertise in full-stack development, API management, AI integration, automation, and HR/payroll solutions. From building robust platforms like Quinstreet and FDA Food Code Builder to leveraging advanced AI in projects like Oxy AI and Accenture's AMAP platform, each project reflects my commitment to delivering impactful solutions. Additionally, my GitHub repositories feature innovative Gen AI projects, demonstrating my passion for cutting-edge technology and continuous learning.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                link={project.link}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>My GitHub portfolio showcases my expertise in data science, machine learning, and software development through a variety of impactful projects. These include advanced sentiment analysis using LSTM and RNN models, IMDB review classification, and churn prediction with Artificial Neural Networks. I’ve also worked on creating a comprehensive database for flight data and developed solutions to diverse data structures and algorithmic problems using Python. Each project highlights my proficiency in Python, Jupyter Notebooks, and database management, demonstrating my ability to tackle real-world challenges with innovative solutions.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My GitHub portfolio showcases my expertise in data science, machine learning, and software development through a variety of impactful projects. These include advanced sentiment analysis using LSTM and RNN models, IMDB review classification, and churn prediction with Artificial Neural Networks. I’ve also worked on creating a comprehensive database for flight data and developed solutions to diverse data structures and algorithmic problems using Python. Each project highlights my proficiency in Python, Jupyter Notebooks, and database management, demonstrating my ability to tackle real-world challenges with innovative solutions.
                      <br/><a href="https://github.com/Vins1443"><FaGithub color="white"/></a>
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
