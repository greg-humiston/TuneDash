import { CurrentDashes } from "./CurrentDashes";
import { OpenDashes } from "./OpenDashes";

import { useCurrentUser } from '../../hooks/useAuth';

import './styles.css';
import { useQueryCurrentDashes, useQueryOpenDashes } from "../../hooks/useDashes";

export const DashOverview = () => {
	const { data: currentUser } = useCurrentUser();
	
	// debugger;
	const { data: currentDashList = [], isLoading } = useQueryCurrentDashes(currentUser.id);
	const { data: openDashList = [], isLoading: _isLoading } = useQueryOpenDashes(currentUser.id);

	if (isLoading || _isLoading) {
		return (
			<div>Loading...</div>
		)
	}
	return (
		<div className="dashboard-container">
			<CurrentDashes dashList={currentDashList}/>
			<OpenDashes dashList={openDashList}/>
		</div>
	);
};