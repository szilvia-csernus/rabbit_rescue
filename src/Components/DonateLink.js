const DonateLink = (props) => {
	return (
		<a
			className={props.className}
			onClick={props.onClick}
			href={'https://donate.stripe.com/test_cN22aY9bVaty4Uw6oo'}
			aria-label="stripe link for donation"
		>
			{props.children}
		</a>
	);
};

export default DonateLink;
