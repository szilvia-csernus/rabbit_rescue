import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Container } from '../Components/Container';
import DonateForm from '../Components/DonateForm';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import VolunteerForm from '../Components/VolunteerForm';

const Root = () => {
	const donateForm = useSelector((state) => state.donateForm);
	const volunteerForm = useSelector((state) => state.volunteerForm);
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
		</>
	);
};

export default Root;
