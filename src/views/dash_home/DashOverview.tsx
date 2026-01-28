import { CurrentDashes } from "./CurrentDashes";
import { OpenDashes } from "./OpenDashes";

import { useCurrentUser } from '../../hooks/useAuth';

import './styles.css';
import { useQueryCurrentDashes, useQueryOpenDashes } from "../../hooks/useDashes";
import { useNavigate } from "@tanstack/react-router";

export const DashOverview = () => {
	const { data: currentUser } = useCurrentUser();
	const navigate = useNavigate();

	const { data: currentDashList = [], isLoading } = useQueryCurrentDashes(currentUser.id);
	const { data: openDashList = [], isLoading: _isLoading } = useQueryOpenDashes(currentUser.id);

	const handleCurrentDashSelect = (dashId: number) => {
		navigate({ to: `../${dashId}/current_dash` });
	}

	const handleOpenDashSelect = (dashId: number) => {
		navigate({ to: `../${dashId}/open_dash` });
	}

	if (isLoading || _isLoading) {
		return (
			<div>Loading...</div>
		)
	}
	return (
		<div className="dashboard-container">
			<CurrentDashes 
				dashList={currentDashList} 
				handleDashSelect={handleCurrentDashSelect}
			/>
			<OpenDashes 
				dashList={openDashList}
				handleDashSelect={handleOpenDashSelect}
			/>
		</div>
	);
};