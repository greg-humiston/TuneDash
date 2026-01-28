import { useState } from 'react';
import MenuIcon from '../../assets/menu_white.svg?react';
import '../../App.css';
import { IconButton } from '../../components/IconButton';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../../auth/auth';
import { UserConfigData } from '../../mock_data/userData';

type SettingsPopupButtonProps = {
	text: string;
	onClick: () => void;
	className: string;
	isDisabled: boolean;
};

const SettingsPopupButton = (props: SettingsPopupButtonProps) => {
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

type SettingPopupProps = {
	onLogout: () => void;
};

const SettingsPopup = (props: SettingPopupProps) => {
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
					className={homeButtonClassName}
					isDisabled={false}
					text="Logout"
				/>			
			</div>
		</div>
	);
};

type HeaderBarProps = {
	userConfigData: UserConfigData
};

export const HeaderBar = (props: HeaderBarProps) => {
	const { userConfigData } = props;
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	const auth = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await auth.logout();
			await navigate({ to: '/' });
		} catch (e) {
			console.log('error logging out:', e);
		}
	};


	const handleUserIconClick = (e: Event) => {
		e.preventDefault();
		// TODO: allow access to user config data editing using this handler
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
							?	<SettingsPopup onLogout={handleLogout}/>
							: ''
					}
				</div>
			</div>
		</div>
	);
}