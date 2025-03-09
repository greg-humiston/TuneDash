import { DashListItem } from "../../components/DashListItem";
import { DashData } from "./overviewMockData";
import './styles.css';

type CurrentDashesProps = {
	dashList: DashData[]
};

export const CurrentDashes = (props: CurrentDashesProps) => {
	const { dashList } = props;

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
							<DashListItem dashData={dashData} key={dashData.dashId}/>
						);
					})
				}
			</div>
		</div>
	);
};

export default CurrentDashes;