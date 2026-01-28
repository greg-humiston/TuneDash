import SettingsIconSVG from '../../assets/settings.svg?react';

import { DashData } from "../../mock_data/dashData";

import './styles.css';

import { UserList } from '../../components/UserList';
import { DashModifications } from '../../components/DashModifications';
import { IconButton } from '../../components/IconButton';
import { MOCK_USER_LIST } from '../../mock_data/userData';
import { Tabs } from '../../components/Tabs';

type DashOverviewProps = {
	dashData: DashData
};

export const DashOverview = (props: DashOverviewProps) => {
	const { dashData } = props;

	return (
		<div className="overview-container">
			<div className="current-dash-container">
				<div className="dash-header-container">
					<div 
						className="dash-header-background"
						style={{
							backgroundImage: `url(${dashData.dashArt})`,
						}}
					>
						<DashModifications dashData={dashData}/>
						<IconButton 
							className="header-settings-button"
							Icon={SettingsIconSVG}
							onClick={() => {}}
						/>
					</div>
					<div className="dash-header-title">
						<label>{dashData.title}</label>
					</div>
					<div className="flex">
						<div className="dash-description">
							<label>{dashData.description}</label>
						</div>
						<div>
							<UserList users={MOCK_USER_LIST}/>
						</div>
					</div>

				</div>
				<div className="round-info">  
				</div>
				<div className="content">
				
				</div>
			</div>
			<Tabs dashId={dashData.dashId}/>
		</div>
	);
};