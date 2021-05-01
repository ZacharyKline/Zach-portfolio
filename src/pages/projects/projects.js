import { Layout } from "antd";
import Project from '../../components/project/project'
import './projects.css'
import Kitepic from '../../assets/images/kiteMail.png'
import Connectpic from '../../assets/images/connect.png'
import ISSpic from '../../assets/images/iss.png'
import horrorpic from '../../assets/images/horror.png'
import spacepic from '../../assets/images/spacefarm.png'
import kwitterpic from '../../assets/images/kwitter.png'
import gamefaqspic from '../../assets/images/gamefaqs.jpeg'

const { Content } = Layout;

function Projects(props) {
	return (
		<div className="projectsList">
			<Layout>
				<Content>
					<h1>Projects</h1>
					<p>
						Click on the title of the project to access the github repo for the
						project (if available).
					</p>
					<div className="projects">
						<Project
							title="KITe"
							description="REDi Pitch Night top prize winner. Team built, Full stack application, built with the intention to provide a simple way to upload and send photos to loved ones who are currently incarcerated. Built with React/Redux"
							picture={Kitepic}
							alt="KITe"
						/>
						<Project
							title="Connect Four"
							description="Created using Javascript, a fun game featuring me and my classmate Matt. To create the win condition I utilized nested for loops which iterated over an array of arrays using x and y axis, I also utilized animations to make the game more fun."
							link="https://zacharykline.github.io/ConnectFour/"
							git="https://github.com/ZacharyKline/ConnectFour"
							picture={Connectpic}
							alt="Connect Four Game"
						/>
						<Project
							title="Kwitter"
							description="Group project creating a clone of Twitter/other social media programs. Created in React/Redux. I acted as the Project Manager and Scrum Master for the team. Created over the course of two one week sprints utilizing a premade API."
							git="https://github.com/ZacharyKline/Kwitter"
							picture={kwitterpic}
							alt="Pic of Kwitter"
						/>

						<Project
							title="Space Farm"
							description="Browser Game where you take control of a space farmer who needs to generate resources to fire into, and plug up a black hole threatening your planet. Done in functional javascript, still in development."
							picture={spacepic}
							git="https://github.com/ZacharyKline/SpaceFarm"
							alt="Picture of Space Farm"
						/>
						<Project
							title="Space Station Tracker"
							description="A software to track the current location of the International Space Station. This program utilizes Python, and information gained from the ISS Location Now API."
							picture={ISSpic}
							git="https://github.com/ZacharyKline/backend-iss-location-assessment"
							alt="Picture of ISS Tracker"
						/>
						<Project
							title="GameFAQs Clone"
							description="Group project: A recreation of the classic gaming website, in a full-stack single program application using Django. I acted as Project Manager for the project."
							picture={gamefaqspic}
							git="https://github.com/ZacharyKline/GameFaqs_Backend"
							alt="Picture of GameFAQs"
						/>
					</div>
				</Content>
			</Layout>
		</div>
	);
}

export default Projects;

