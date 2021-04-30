import { Layout } from "antd";
import Project from '../../components/project/project'
const { Content } = Layout;

function Projects(props) {
	return (
		<div className="projects">
			<h1>Projects</h1>
			<Project
				title="KITe"
				description="REDi Pitch Night top prize winner. Team built, Full stack application, built with the intention to provide a simple way to upload and send photos to loved ones who are currently incarcerated. Built with React/Redux"
			/>
		</div>
	);
}

export default Projects;
