import React from 'react';

function PostItem(props) {
    const {title, body, userId} = props;

    return (
        <div>
            <h3>User:</h3>
            <p>{userId}</p>
            <h3>Title:</h3>
            <p>{title}</p>
            <h4>Content:</h4>
            <p>{body}</p>
            <hr/>
        </div>
    );
}

export default PostItem;