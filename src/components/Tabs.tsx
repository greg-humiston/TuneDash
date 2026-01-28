import { useState } from "react";
import Chat from "./tabFeatures/Chat";
import Rounds from "./tabFeatures/Rounds";
import Standings from "./tabFeatures/Standings";

type Tab = {
	tabId: number;
	tabName: string; 
};

type TabProps = {
	tabData: Tab;
	onTabClick: (tabId: number) => void;
};

const toTabFeature = (tabId: number) => {
	if (tabId === 123) {
		return Rounds;
	} else if (tabId === 1234) {
		return Standings;
	} else if (tabId === 12345) {
		return Chat;
	} else {
		return <></>;
	}
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

type TabsProps = {
	dashId: number;
};

export const Tabs = (props: TabsProps) => {
	const { dashId } = props;

	const [selectedTabFeature, setSelectedTabFeature] = useState(123);

	const handleTabClick = (tabId: number) => {
		setSelectedTabFeature(tabId);
	};

	return (
		<div className="tab-list-container">
			{
				tabList.map((tabData) => 
					<Tab 
						tabData={tabData} 
						onTabClick={handleTabClick}
						key={tabData.tabId}
					/>
				)
			}
		</div>
	);
};
