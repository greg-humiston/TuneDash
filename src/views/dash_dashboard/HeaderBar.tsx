import { useState } from 'react';
import MenuIcon from '../../assets/menu_white.svg?react';
import '../../App.css';

const SettingsPopup = (props) => {
	return (
		<div className="settings-popup">
			<div className="settings-container">

			</div>
			<div className="logout-button-container">
				<button onClick={props.onLogout}>Logout</button>
			</div>
		</div>
	);
};

export const HeaderBar = (props) => {
	const { userConfigData, onLogout } = props;
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	const handleUserIconClick = (e: Event) => {
		e.preventDefault();
		// TODO
	};

	const handleOnMenuClick = (e: Event) => {
		e.preventDefault();
		setIsSettingsOpen(!isSettingsOpen);
	};

	return (
		<div className="header-bar-container">
			<div className="logo-container">
				<img className="logo-small" src="/logo.png" alt="icon"/>
			</div>
			<div className="header-bar-right">
				<div className="profile-picture">
					<a onClick={handleUserIconClick}>
						<img 
							src={userConfigData.src} 
							alt={userConfigData.alt}
						/>
					</a>
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
								<SettingsPopup onLogout={onLogout}/>
							)
							: ''
					}
				</div>
			</div>
		</div>
	);
}