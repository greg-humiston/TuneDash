import MenuIcon from '../../assets/menu_white.svg?react';
import './styles.css';

export const HeaderBar = (props) => {
	const { userConfigData } = props;

	return (
		<div className="header-bar-container">
			<div>
				<div className="profile-picture">
					<img 
						src={userConfigData.src} 
						alt={userConfigData.alt}
					/>
				</div>
				<div className="settings-button">
					<MenuIcon/>
				</div>
			</div>
		</div>
	)
}