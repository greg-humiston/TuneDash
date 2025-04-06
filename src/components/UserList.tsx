import { User } from "../views/dash_home/overviewMockData";
import './styles.css';

type UserListProps = {
    users: User[]
};

type UserItemProps = {
    userData: User
};

const UserItem = (props: UserItemProps) => {
    const { userData } = props;
    return (
        <div className="user-item">
            <img src={userData.userImageUrl}/>
        </div>
    );
};

export const UserList = (props: UserListProps) => {
    const { users } = props;

    return (
        <div className="user-list">
            {
                users.map((userData) => <UserItem userData={userData} key={userData.userId}/>)
            }
        </div>
    );
};