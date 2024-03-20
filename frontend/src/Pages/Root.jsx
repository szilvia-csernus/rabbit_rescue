import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from '../Components/Container';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { thanksDonationActions } from '../store/thanks-donation-slice';
import ThanksDonation from '../Components/ThanksDonation';
import EnquiryForm from '../Components/EnquiryForm';
import Loader from '../Components/Loader';

const VolunteerForm = lazy(() => import('../Components/VolunteerForm'));
const ThanksVolunteer = lazy(() => import('../Components/ThanksVolunteer'));
const ErrorMessage = lazy(() => import('../Components/ErrorMessage'));

const Root = () => {
	const thanksDonationState = useSelector((state) => state.thanksDonation);
	const enquireFormState = useSelector((state) => state.enquiryForm.isOpen);
	const volunteerFormState = useSelector((state) => state.volunteerForm);
	const thanksVolunteerState = useSelector((state) => state.thanksVolunteer);
	const errorMessageState = useSelector((state) => state.errorMessage);
	const location = useLocation();
	
	const dispatch = useDispatch();
	
	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		if (queryParams.get('successful-payment')) {
			dispatch(thanksDonationActions.open());
		};
	});

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
			{thanksDonationState && (
				<Suspense fallback={<Loader />}>
					<ThanksDonation />
				</Suspense>
			)}
			{enquireFormState && (
				<Suspense fallback={<Loader />}>
					<EnquiryForm />
				</Suspense>
			)}
			{volunteerFormState && (
				<Suspense fallback={<Loader />}>
					<VolunteerForm />
				</Suspense>
			)}
			{thanksVolunteerState && (
				<Suspense fallback={<Loader />}>
					<ThanksVolunteer />
				</Suspense>
			)}
			{errorMessageState && (
				<Suspense fallback={<Loader />}>
					<ErrorMessage />
				</Suspense>
			)}
		</>
	);
};

export default Root;
