import { useState } from 'react';
import MenuIcon from './icons/menu_white.svg?react';
import '../App.css';
import { MOCK_USER_CONFIG_DATA } from '../views/dash_overview/overviewMockData';
import { useAuth } from '../auth';
import { useNavigate, useRouterState } from '@tanstack/react-router';

const SettingsPopup = (props) => {
	return (
		<div className="settings-popup">
			<div className="settings-container">
				{/* TODO */}
			</div>
			<div className="logout-button-container">
				<button onClick={props.onLogout}>Logout</button>
			</div>
		</div>
	);
};

export const HeaderBar = (props) => {
	const { userConfigData = MOCK_USER_CONFIG_DATA } = props;
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	const auth = useAuth();
	const navigate = useNavigate();
	debugger;
	if (!auth.isAuthenticated) {
		return (<></>);
	}

	const handleLogout = () => {
		if (window.confirm('Are you sure you want to logout?')) {
			auth.logout().then(() => {
				// router.invalidate().finally(() => {
				// 	navigate({ to: '/' })
				// })
				navigate({ to: '/' });
			})
		}
	}

	const handleOnMenuClick = (e: Event) => {
		e.preventDefault();
		setIsSettingsOpen(!isSettingsOpen);
	};

	const handleUserIconClick = () => {

	};

	
	return (
		<div className="header-bar-container">
			<div className="logo-container">
				<img className="logo-small" src="/logo.png" alt="icon"/>
			</div>
			<div className="header-bar-right">
				<div className="profile-picture" onClick={handleUserIconClick}>
						<img 
							src={userConfigData.src} 
							alt={userConfigData.alt}
						/>
				</div>
				<div className="settings-button">
					<button 
						onClick={handleOnMenuClick}
						className={isSettingsOpen ? 'focused' : ''}
					>
						<MenuIcon/>
					</button>
					{
						isSettingsOpen
							?	(
								<SettingsPopup onLogout={handleLogout}/>
							)
							: ''
					}
				</div>
			</div>
		</div>
	);
}