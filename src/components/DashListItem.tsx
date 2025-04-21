import { useNavigate } from "@tanstack/react-router";
import { DashData } from "../views/dash_home/overviewMockData";
import './styles.css';
import classNames from '../styles/classNames';

type DashListItemProps = {
	dashData: DashData
};

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleString();
};

export const DashListItem = (props: DashListItemProps) => {
	const { dashData } = props;
  const navigate = useNavigate();

	const handleDashItemClick = () => {
    // TODO: pivot route off type of dash (open vs. current)
    navigate({ to: `../${dashData.dashId}/current_dash` });
	};

	return (
		<div 
			className={classNames.container}
			onClick={handleDashItemClick}
		>
      {/* Art Banner */}
      <div className={classNames.artBanner}>
        {dashData.dashArt ? (
          <div 
            className={classNames.artImage} 
            style={{ backgroundImage: `url(${dashData.dashArt})` }}
          />
        ) : (
          <div className={classNames.artFallback}>
            <span>No Image</span>
          </div>
        )}
        <div className={classNames.overlay} />
        
        {/* Status badges */}
        <div className={classNames.badgeContainer}>
          <span className={classNames.modeBadge}>
            {dashData.dashMode}
          </span>
          {!dashData.isListed && (
            <span className={classNames.privateBadge}>
              Private
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <div className={classNames.titleContainer}>
        <h3 className={classNames.titleText}>{dashData.title}</h3>
      </div>

      {/* Description */}
      <div className={classNames.descriptionContainer}>
        <p className={classNames.descriptionText}>{dashData.description}</p>
      </div>

      {/* Stats */}
      <div className={classNames.statsContainer}>
        <div className={classNames.statItem}>
          <svg className={classNames.statIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className={classNames.statText}>{dashData.numberOfPlayers}/{dashData.maxNumberOfPlayers} Players</span>
        </div>
        <div className={classNames.statItem}>
          <svg className={classNames.statIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className={classNames.statText}>{dashData.totalRounds} Rounds</span>
        </div>
        <div className={classNames.statItem}>
          <svg className={classNames.statIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
          </svg>
          <span className={classNames.statText}>{dashData.songsPerRound} Songs/Round</span>
        </div>
        <div className={classNames.statItem}>
          <svg className={classNames.statIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className={classNames.statText}>Max Votes: {dashData.maxVotesAllowed}</span>
        </div>
      </div>

      {/* Timeline/Due dates */}
      <div className={classNames.timelineContainer}>
        <div className={classNames.timelineSection}>
          <div className={classNames.timelineLabel}>Submissions due:</div>
          <div className={classNames.timelineValue}>{formatDate(dashData.timeWhenSubmissionsDue)}</div>
        </div>
        <div className={classNames.timelineSection}>
          <div className={classNames.timelineLabel}>Votes due:</div>
          <div className={classNames.timelineValue}>{formatDate(dashData.timeWhenVotesDue)}</div>
        </div>
      </div>
    </div>
	);
};