type RoundsProps = {
    dashId: number;
};

export const Rounds = (props: RoundsProps) => {
	const { dashId } = props;

	return (
		<div className="rounds-container">
			Rounds
		</div>
	);
};

export default Rounds;