import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Container } from '../Components/Container';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const DonateForm = lazy(() => import('../Components/DonateForm'));
const VolunteerForm = lazy(() => import('../Components/VolunteerForm'));
const ThankYouMessage = lazy(() => import('../Components/ThankYouMessage'));
const ErrorMessage = lazy(() => import('../Components/ErrorMessage'));

const Root = () => {
	const donateFormState = useSelector((state) => state.donateForm);
	const volunteerFormState = useSelector((state) => state.volunteerForm);
	const thankYouMessageState = useSelector((state) => state.thankYouMessage);
	const errorMessageState = useSelector((state) => state.errorMessage);
	
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
			{donateFormState && (
				<Suspense fallback="Loading...">
					<DonateForm />
				</Suspense>
			)}
			{volunteerFormState && (
				<Suspense fallback="Loading...">
					<VolunteerForm />
				</Suspense>
			)}
			{thankYouMessageState && (
				<Suspense fallback="Loading...">
					<ThankYouMessage />
				</Suspense>
			)}
			{errorMessageState && (
				<Suspense fallback="Loading...">
					<ErrorMessage />
				</Suspense>
			)}
		</>
	);
};

export default Root;
