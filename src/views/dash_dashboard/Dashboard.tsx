
import { DashOverview } from "../dash_overview/DashOverview";
import { MOCK_USER_CONFIG_DATA } from "../dash_overview/overviewMockData";
import { HeaderBar } from "./HeaderBar";

export const Dashboard = (props) => {
	const userConfigData = MOCK_USER_CONFIG_DATA;

	return (
		<div className="dashboard-container">
			<HeaderBar userConfigData={userConfigData}/>
			<DashOverview/>
		</div>
	)
};