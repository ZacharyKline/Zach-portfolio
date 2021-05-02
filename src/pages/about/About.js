import { Layout } from "antd";
import './about.css'
const { Content } = Layout;

function About(props) {
	return (
		<div class="about">
			<Layout>
				<Content>
					<h1>About Me:</h1>
					<h2>Background:</h2>
					<p className="background">
						Originally from Pennsylvania, currently residing in Indiana. After
						spending over 7 years working in nonprofit management I decided to
						go back to school for software engineering at
						<a href="https://www.kenzie.academy/" target="_blank">
							Kenzie Academy
						</a>
						. After finishing my fullstack certification I joined Kenzie as a
						software engineering instructor working on their corporate training
						team. I am involved in{" "}
						<a href="https://www.codeforamerica.org/" target="_blank">
							Code for America
						</a>
						. I am looking for opportunities both locally and internationally. If you have any questions about me please reach out at
						<a href="mailto: zkline888@gmail.com"> zkline888@gmail.com</a>.
					</p>
				</Content>
			</Layout>
		</div>
	);
}

export default About;
