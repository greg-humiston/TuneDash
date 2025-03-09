import { CurrentDashes } from "./CurrentDashes";
import { OpenDashes } from "./OpenDashes";
import { 
	MOCK_CURRENT_DASH_LIST, 
	MOCK_OPEN_DASH_LIST, 
} from "./overviewMockData";

import './styles.css';

const MOCK_DASH_OVERVIEW = {
	currentDashList: MOCK_CURRENT_DASH_LIST,
	openDashList: MOCK_OPEN_DASH_LIST
};


export const DashOverview = (props) => {
		const { userData } = props;

		const currentDashList = MOCK_DASH_OVERVIEW.currentDashList;
		const openDashList = MOCK_DASH_OVERVIEW.openDashList;

		return (
			<div className="dashboard-container">
				<CurrentDashes dashList={currentDashList}/>
				<OpenDashes dashList={openDashList}/>
			</div>
		)
};