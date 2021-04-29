import './home.css'
import { Layout } from "antd";
import Icons from '../../components/Icons/icons'

const {Footer, Content } = Layout;


function Home(props) {
	return (
		<div className="home">
			<Layout>
				<Content>
					<div className='titleSpot'>
						<h1>Zachary Kline</h1>
						<h3>Software Developer</h3>
					</div>
					<p>Full Stack software engineer looking for opportunities locally and globally</p>
					<div class="iconBox">
                        <Icons />
					</div>
				</Content>
			</Layout>
		</div>
	);
}

export default Home;
