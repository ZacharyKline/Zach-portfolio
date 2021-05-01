import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Resume from "../../assets/other/ZacharyKlineResume.pdf";

class Navbar extends React.Component {
	state = {
		current: "home",
	};

	handleClick = (e) => {
		console.log("click ", e);
		this.setState({ current: e.key });
	};

	render() {
		const { current } = this.state;
		return (
			<Menu
				onClick={this.handleClick}
				selectedKeys={[current]}
				mode="horizontal"
				className="navbar"
			>
				<Menu.Item key="home">
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item key="about">
					<Link to="/about">About Me</Link>
				</Menu.Item>
				<Menu.Item key="projects">
					<Link to="/projects">Projects</Link>
				</Menu.Item>
				<Menu.Item>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/zachary-kline-4b568376/"
					>
						LinkedIn
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" href="https://github.com/ZacharyKline">
						Github
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" href={Resume}>
						Resume
					</a>
				</Menu.Item>
			</Menu>
		);
	}
}

export default Navbar;
