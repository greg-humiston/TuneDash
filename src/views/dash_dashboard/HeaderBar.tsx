import { useState } from 'react';
import MenuIcon from '../../assets/menu_white.svg?react';
import '../../App.css';
import { IconButton } from '../../components/IconButton';
import { useLocation, useNavigate } from '@tanstack/react-router';

const SettingsPopupButton = (props) => {
	const { text, onClick, className, isDisabled } = props;
	return (
		<div className="settings-popup-button">
			<button 
				onClick={onClick}
				disabled={isDisabled}
				className={className}
			>
				{text}
			</button>
		</div>
	);
};

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

	// const isCreateDashButtonHidden = 
	const isCreateDashButtonDisabled = location.pathname?.includes('create_dash') || location.pathname?.includes('current_dash');	
	const createDashButtonClassName = isCreateDashButtonDisabled ? 'disabled' : '';

	return (
		<div className="settings-popup">
			<div className="settings-container">
				<SettingsPopupButton
					onClick={handleNavigateHome}
					isDisabled={isHomeButtonDisabled}
					className={homeButtonClassName}
					text="Home"
				/>
				<SettingsPopupButton 
					onClick={handleNavigateCreateDash}
					isDisabled={isCreateDashButtonDisabled}
					className={createDashButtonClassName}
					text="Create Dash"
				/>
			</div>
			<div className="logout-button-container">
				<SettingsPopupButton
					onClick={props.onLogout}
					disabled={false}
					className={homeButtonClassName}
					text="Logout"
				/>			
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
			<div className="logo-container">
					<a onClick={handleUserIconClick}>
						<img
							className="logo-small"
							src={userConfigData.src} 
							alt={userConfigData.alt}
						/>
					</a>
		</div>
		<div className="logo-container">
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