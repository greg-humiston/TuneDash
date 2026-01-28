import { DashListItem } from "../../components/DashListItem";
import { DashData } from "../../mock_data/dashData";
import './styles.css';

type CurrentDashesProps = {
	dashList: DashData[];
	handleDashSelect: (dashId: number) => void;
};

export const CurrentDashes = (props: CurrentDashesProps) => {
	const { dashList, handleDashSelect } = props;

	return (
		<div className="dashes-container">
			<div className="dashes-header">
				<div className="dashes-title">
					<h2>Current Dashes</h2>
				</div>
				<div className="dashes-viewing-options">
					<a>
						<label>View All (TODO)</label>
					</a>
					<a>
						<label>View Completed (TODO)</label>
					</a>
				</div>
			</div>
			<div className="dash-items">
				{
					dashList.map((dashData: DashData) => {
						return (
							<DashListItem 
								dashData={dashData} 
								key={dashData.dashId} 
								handleDashSelect={handleDashSelect}
							/>
						);
					})
				}
			</div>
		</div>
	);
};

export default CurrentDashes;