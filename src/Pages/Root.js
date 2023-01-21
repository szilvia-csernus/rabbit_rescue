import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Container } from '../Components/Container';
import DonateForm from '../Components/DonateForm';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Root = () => {
	const donateForm = useSelector((state) => state.donateForm);
	return (
		<>
			<Container>
				<Header />
			</Container>
			<Container>
				<Outlet />
			</Container>
			<Container>
				<Footer />
			</Container>
			{donateForm && <DonateForm/>}
		</>
	);
};

export default Root;
