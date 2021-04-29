import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/Contact";
import "./App.css";
import Foots from "./components/Footer/footer";

import Navbar from "./components/Navbar/navbar";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
			</Switch>
			<Foots />
		</div>
	);
}

export default App;
