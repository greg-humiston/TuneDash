import { createFileRoute, useNavigate, useRouterState } from '@tanstack/react-router'
import { MOCK_CURRENT_DASH_LIST } from '../../../../views/dash_overview/overviewMockData';

import '../../../../styles/index.css';
import IconEye from '../../../../components/Icons/IconEye';
import IconEyeOff from '../../../../components/Icons/IconEyeOff';
import IconShield from '../../../../components/Icons/IconShield';
import IconMusic from '../../../../components/Icons/IconMusic';
import IconUsers from '../../../../components/Icons/IconUsers';
import IconThumbsUp from '../../../../components/Icons/IconThumbsUp';
import IconThumbsDown from '../../../../components/Icons/IconThumbsDown';
import IconClock from '../../../../components/Icons/IconClock';

const DashDataView = (props) => {
  // Sample data
  const { dashData } = props;

  // Format date strings to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // TODO: refactor this layout so that a decent amount of dash data is displayed via hover pop-ups to reserve space
  return (
    <div className="dash-container">
      <h1 className="dash-title">{dashData.title}</h1>
      <div className="banner-container">
        <img 
          src={dashData.dashArt} 
          alt={dashData.title} 
          className="banner-image"
        />
        <div className="badge-container">
          <span className={`badge ${dashData.dashMode === 'Accelerated' ? 'badge-purple' : 'badge-blue'}`}>
            {dashData.dashMode}
          </span>
          <span className={`badge ${dashData.isListed ? 'badge-green' : 'badge-red'}`}>
            {dashData.isListed ? <IconEye /> : <IconEyeOff />}
            {dashData.isListed ? 'Listed' : 'Unlisted'}
          </span>
        </div>
        <div className="header-section">
          <p className="dash-description">{dashData.description}</p>
        </div>
      </div>
      <div>
        <div className="card-grid">
          <div className="info-card">
            <h2 className="card-title card-title-purple">Game Settings</h2>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">
                  <IconShield /> Total Rounds
                </span>
                <span className="info-value">{dashData.totalRounds}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <IconMusic /> Songs Per Round
                </span>
                <span className="info-value">{dashData.songsPerRound}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <IconUsers /> Players
                </span>
                <span className="info-value">{dashData.numberOfPlayers} / {dashData.maxNumberOfPlayers}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <IconThumbsUp /> Max Votes
                </span>
                <span className="info-value">{dashData.maxVotesAllowed}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <IconThumbsDown /> Down Voting
                </span>
                <span className={dashData.isDownVotingEnabled ? "status-enabled" : "status-disabled"}>
                  {dashData.isDownVotingEnabled ? `Enabled (Max: ${dashData.maxDownVotesAllowed})` : "Disabled"}
                </span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="card-title card-title-blue">Timing Information</h2>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">
                  <IconClock /> Created
                </span>
                <span className="info-value">{formatDate(dashData.timeWhenCreated)}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <IconClock /> Submissions Due
                </span>
                <span className="info-value">{formatDate(dashData.timeWhenSubmissionsDue)}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <IconClock /> Votes Due
                </span>
                <span className="info-value">{formatDate(dashData.timeWhenVotesDue)}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <IconThumbsUp /> Votes Submitted
                </span>
                <span className={`info-value ${dashData.hasVotesBeenSubmitted ? "status-enabled" : "status-pending"}`}>
                  {dashData.hasVotesBeenSubmitted ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="info-card">
          <h2 className="card-title card-title-green">Dash Details</h2>
          <div className="code-container">
            <code>ID: {dashData.dashId}</code>
          </div>
        </div>
      </div>
    </div>
  );
};

const RouteComponent = () => {
  const params = Route.useParams();
  const navigate = useNavigate();

  // TODO: replace with query
  const dashData = MOCK_CURRENT_DASH_LIST.find((data) => data?.dashId === params.dashId);

  if (!dashData) {
    const handleReturnTohome = () => {
      navigate({ to: '../../home' });
    };

    return (
      <div>
        <h3>Sorry, dash not found!</h3>
        <button onClick={handleReturnTohome}>Return to Home</button>
      </div>
    );
  }

  return (
    <DashDataView dashData={dashData}/>
  );
};

export const Route = createFileRoute('/auth/$sessionId/$dashId/current_dash')({
  component: RouteComponent,
});
