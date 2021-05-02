import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/projects";
import "./App.css";
import Foots from "./components/Footer/footer";

import Navbar from "./components/Navbar/navbar";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div className="navey">
				<Navbar />
			</div>
			<div className="bodyboy">
				<Switch>
					<Route exact path="/Zach-portfolio">
						<Home />
					</Route>
					<Route exact path="/Zach-portfolio/about">
						<About />
					</Route>
					<Route exact path="/Zach-portfolio/projects">
						<Projects />
          </Route>
				</Switch>
			</div>
			<div className='foots'>
				<Foots />
			</div>
		</div>
	);
}

export default App;
