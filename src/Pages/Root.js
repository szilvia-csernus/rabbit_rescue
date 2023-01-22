import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Container } from '../Components/Container';
import DonateForm from '../Components/DonateForm';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ThankYouMessage from '../Components/ThankYouMessage';
import VolunteerForm from '../Components/VolunteerForm';

const Root = () => {
	const donateForm = useSelector((state) => state.donateForm);
	const volunteerForm = useSelector((state) => state.volunteerForm);
	const thankYouMessage = useSelector((state) => state.thankYouMessage);
	
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
			{volunteerForm && <VolunteerForm/>}
			{thankYouMessage && <ThankYouMessage />}
		</>
	);
};

export default Root;
