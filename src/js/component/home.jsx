import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div class="text-center">
			<Navbar/>
			<Jumbotron/>
			<div class="container d-flex">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<div class="py-3"></div>
			<Footer/>
		</div>
	);
};

export default Home;
