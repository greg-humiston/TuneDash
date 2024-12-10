import { useState } from 'react';
import MenuIcon from '../../assets/menu_white.svg?react';
import '../../App.css';
import { IconButton } from '../../components/IconButton';
import { useLocation, useNavigate } from '@tanstack/react-router';

const SettingsPopup = (props) => {
	const location = useLocation();
  	const navigate = useNavigate();

	const handleNavigateHome = () => {
		navigate({ to: `../../home` });
	};

	const handleNavigateCreateDash = () => {
		navigate({ to: `../create_dash` });
	};

	const isHomeButtonDisabled = location.pathname?.includes('home');
	const homeButtonClassName = isHomeButtonDisabled ? 'disabled' : '';
	return (
		<div className="settings-popup">
			<div className="settings-container">
				<button 
					onClick={handleNavigateHome}
					disabled={isHomeButtonDisabled}
					className={homeButtonClassName}
				>
					Home
				</button>
				<button 
					onClick={handleNavigateCreateDash}
					disabled={isHomeButtonDisabled}
					className={homeButtonClassName}
				>
					Create Dash
				</button>
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
					<IconButton 
						className={isSettingsOpen ? 'focused' : ''}
						Icon={MenuIcon}
						onClick={handleOnMenuClick}
					/>
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