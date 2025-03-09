import MenuIcon from '../../assets/menu_white.svg?react';
import './styles.css';

export const HeaderBar = (props) => {
	const { userConfigData } = props;

	const handleUserIconClick = (e: Event) => {
		e.preventDefault();
		// TODO
	};

	const handleOnMenuClick = (e: Event) => {
		e.preventDefault();
		// TODO
	};

	return (
		<div className="header-bar-container">
			<div className="profile-picture">
				<a onClick={handleUserIconClick}>
					<img 
						src={userConfigData.src} 
						alt={userConfigData.alt}
					/>
				</a>
			</div>
			<div className="settings-button">
				<button onClick={handleOnMenuClick}>
					<MenuIcon/>
				</button>
			</div>
		</div>
	);
}