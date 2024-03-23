const stripeLink = import.meta.env.VITE_STRIPE_LINK;

const DonateLink = (props) => {
	return (
		<a
			className={props.className}
			onClick={props.onClick}
			href={stripeLink}
			aria-label="stripe link for donation"
		>
			{props.children}
		</a>
	);
};

export default DonateLink;
