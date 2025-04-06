
import { MOCK_USER_CONFIG_DATA } from "../dash_home/overviewMockData";
import { HeaderBar } from "./HeaderBar";

export const Dashboard = (props) => {
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