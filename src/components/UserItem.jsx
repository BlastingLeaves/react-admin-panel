import React from 'react';

function UserItem(props) {
    const {name, email, salariu, imagine, isGoldClient, onDelete} = props;

    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{salariu}</p>
            {imagine ?
                <img src={imagine} alt="imagine" width={'100%'} height={'100%'}/>
                : null}
            {isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <button onClick={onDelete}>Sterge</button>
        </div>
    );
}

export default UserItem;