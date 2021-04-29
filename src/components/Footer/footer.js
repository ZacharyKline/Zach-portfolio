import './footer.css'
import Contact from "../../pages/contact/Contact";

function Footer(props) {
	return (
		<div className="footer">
			<span className="created">Created by: Zachary Kline</span>
			<p className="created">
				Icons by <a href="https://devicon.dev/">DEVICON</a>
				<Contact />
			</p>
		</div>
	);
}

export default Footer;
