import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users, onDelete } = props;

    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    salariu={user.salariu}
                    imagine={user.imagine}
                    isGoldClient={ user.isGoldClient }
                    onDelete={onDelete}
                    key={ index }
                />
            })}
        </div>
    );
}

export default UserList;