import { useNavigate } from "@tanstack/react-router";
import { DashData } from "../views/dash_overview/overviewMockData";
import './styles.css';

type DashListItemProps = {
	dashData: DashData
};

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleString();
};

const styles = {
  container: "dash-tile",
  artBanner: "dash-art-banner",
  artImage: "dash-art-image",
  artFallback: "dash-art-fallback",
  overlay: "dash-art-overlay",
  badgeContainer: "dash-badges",
  modeBadge: "dash-badge dash-badge-mode",
  privateBadge: "dash-badge dash-badge-private",
  titleContainer: "dash-title-container",
  titleText: "dash-title",
  descriptionContainer: "dash-description-container",
  descriptionText: "dash-description",
  statsContainer: "dash-stats",
  statItem: "dash-stat",
  statIcon: "dash-stat-icon",
  statText: "dash-stat-text",
  timelineContainer: "dash-timeline",
  timelineSection: "dash-timeline-section",
  timelineLabel: "dash-timeline-label",
  timelineValue: "dash-timeline-value"
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
			className={styles.container}
			onClick={handleDashItemClick}
		>
      {/* Art Banner */}
      <div className={styles.artBanner}>
        {dashData.dashArt ? (
          <div 
            className={styles.artImage} 
            style={{ backgroundImage: `url(${dashData.dashArt})` }}
          />
        ) : (
          <div className={styles.artFallback}>
            <span>No Image</span>
          </div>
        )}
        <div className={styles.overlay} />
        
        {/* Status badges */}
        <div className={styles.badgeContainer}>
          <span className={styles.modeBadge}>
            {dashData.dashMode}
          </span>
          {!dashData.isListed && (
            <span className={styles.privateBadge}>
              Private
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <div className={styles.titleContainer}>
        <h3 className={styles.titleText}>{dashData.title}</h3>
      </div>

      {/* Description */}
      <div className={styles.descriptionContainer}>
        <p className={styles.descriptionText}>{dashData.description}</p>
      </div>

      {/* Stats */}
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <svg className={styles.statIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className={styles.statText}>{dashData.numberOfPlayers}/{dashData.maxNumberOfPlayers} Players</span>
        </div>
        <div className={styles.statItem}>
          <svg className={styles.statIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className={styles.statText}>{dashData.totalRounds} Rounds</span>
        </div>
        <div className={styles.statItem}>
          <svg className={styles.statIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
          </svg>
          <span className={styles.statText}>{dashData.songsPerRound} Songs/Round</span>
        </div>
        <div className={styles.statItem}>
          <svg className={styles.statIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className={styles.statText}>Max Votes: {dashData.maxVotesAllowed}</span>
        </div>
      </div>

      {/* Timeline/Due dates */}
      <div className={styles.timelineContainer}>
        <div className={styles.timelineSection}>
          <div className={styles.timelineLabel}>Submissions due:</div>
          <div className={styles.timelineValue}>{formatDate(dashData.timeWhenSubmissionsDue)}</div>
        </div>
        <div className={styles.timelineSection}>
          <div className={styles.timelineLabel}>Votes due:</div>
          <div className={styles.timelineValue}>{formatDate(dashData.timeWhenVotesDue)}</div>
        </div>
      </div>
    </div>
	);
};