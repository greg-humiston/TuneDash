import SettingsIconSVG from '../../assets/settings.svg?react';

import { DashData } from "../../mock_data/dashData";

import './styles.css';

import { UserList } from '../../components/UserList';
import { DashModifications } from '../../components/DashModifications';
import { IconButton } from '../../components/IconButton';
import { useState } from 'react';

type DashOverviewProps = {
	dashData: DashData
};

type TabProps = {
	tabData: Tab,
	onTabClick: (tabId: string) => void
};

const Tab = (props: TabProps) => {
	const { tabData, onTabClick } = props;
	return (
		<div 
			className="tab"
			onClick={() => onTabClick(tabData.tabId)}
		>
			<label>{tabData.tabName}</label>
		</div>
	);
};

type TabListProps = {
	tabList: Tab[],
	onTabClick: (tabId: string) => void
};

const TabList = (props: TabListProps) => {
	const { tabList, onTabClick } = props;

	return (
		<div className="tab-list-container">
			{
				tabList.map((tabData) => 
					<Tab 
						tabData={tabData} 
						onTabClick={onTabClick}
						key={tabData.tabId}
					/>
				)
			}
		</div>
	);
};

type Tab = {
	tabId: string;
	tabName: string; 
};

const Rounds = (props) => {
	const { dashId } = props;


	return (
		<div className="rounds-container">
			Rounds
		</div>
	);
};

const Standings = (props) => {
	const { dashId } = props;

	return (
		<div className="standings-container">
			Standings
		</div>
	);
};

const Chat = (props) => {
	const { dashId } = props;

	const dashData = { dashId };

	return (
		<div className="chat-container">
			Chat
		</div>
	);
};

const TabFeatureMap = {
	123: Rounds,
	1234: Standings,
	12345: Chat 
};

export const DashOverview = (props: DashOverviewProps) => {
	const { dashData } = props;

	const [selectedTabFeature, setSelectedTabFeature ] = useState('123');

	const handleTabClick = (tabId: string) => {
		setSelectedTabFeature(tabId);
	};

	const TabFeature = TabFeatureMap[selectedTabFeature];

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
			<TabList
				tabList={[
					{
						tabId: '123',
						tabName: 'Rounds'
					},
					{
						tabId: '1234',
						tabName: 'Standings'
					},
					{
						tabId: '12345',
						tabName: 'Chat'
					}
				] as Tab[]}
				onTabClick={handleTabClick}
			/>
			<TabFeature
				dashId={dashData.dashId}
			/>
		</div>
	);
};