

type StandingsProps = {
    dashId: number;
};

export const Standings = (props: StandingsProps) => {
	const { dashId } = props;

	return (
		<div className="standings-container">
			Standings
		</div>
	);
};

export default Standings;