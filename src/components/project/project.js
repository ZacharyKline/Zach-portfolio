import { Card, Button, Anchor } from "antd";
import './project.css'
const { Meta } = Card;
// const { Link } = Anchor;


function Project(props) {
    if (props.git === null ) {
        return (
					<div className="projectsSpot">
						<div className="singleProject">
							<img src={props.picture} alt={props.alt} />

							<h1>
								
									{props.title}
							
							</h1>

							<p>{props.description}</p>
						</div>
					</div>
				);
    }
	return (
		<div className="projectsSpot">
			<div className="singleProject">
				<img src={props.picture} alt={props.alt} />

				<h1>
					<a target="_blank" href={props.git}>
						{props.title}
					</a>
				</h1>

				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default Project;
