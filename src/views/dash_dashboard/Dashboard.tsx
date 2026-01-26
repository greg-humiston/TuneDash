
import { MOCK_USER_CONFIG_DATA } from "../../mock_data/userData";
import { HeaderBar } from "./HeaderBar";

type DashboardProps = {
	onLogout: () => void,
	children: React.ReactNode
};

export const Dashboard = (props: DashboardProps) => {
	const userConfigData = MOCK_USER_CONFIG_DATA;

	return (
		<div className="dashboard-container">
			<HeaderBar 
				userConfigData={userConfigData}
				onLogout={props.onLogout}
			/>
			{props.children}
		</div>
	)
};