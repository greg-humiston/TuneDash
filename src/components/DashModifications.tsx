import classNames from "../styles/classNames";
import { DashData } from "../views/dash_home/overviewMockData";

import './styles.css';

type DashModificationsProps = {
    dashData: DashData
};

export const DashModifications = (props: DashModificationsProps) => {
    const { dashData } = props;
    return (
        <div className="dash-modifications">
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
    );
};