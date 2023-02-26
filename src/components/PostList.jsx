import React from 'react';
import PostItem from "./PostItem";

class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                data = data.filter(user => user.id < 10);
                this.setState({posts: data});
            })
    }

    render() {
        return (
            <div>
                <h2>Postari:</h2>
                {this.state.posts.map((user, index) => {
                    return <PostItem
                        userId={user.userId}
                        title={user.title}
                        body={user.body}
                        key={index}
                    />
                })}
            </div>
        );
    }
}

export default PostList;