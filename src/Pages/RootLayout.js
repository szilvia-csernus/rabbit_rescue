import { Outlet } from 'react-router-dom';
import { Container } from '../Components/Container';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const RootLayout = () => {
	return (
		<>
			<Container>
				<Header />
			</Container>
			<Container>
				<main>
					<Outlet />
				</main>
			</Container>
			<Container>
				<Footer />
			</Container>
		</>
	);
};

export default RootLayout;
