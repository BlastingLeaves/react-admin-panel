import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from "./components/PostList";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            background: 'white',
            color: 'black',
            users: [],
            currentComponent: 'users',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                data = data.filter(user => user.id < 4);
                data.forEach(user => {
                    user.isGoldClient = false;
                });
                this.setState({users: data});
            })
    }

    changeUsers() {
        this.setState({currentComponent: 'users'})
    }

    changePosts() {
        this.setState({currentComponent: 'posts'})
    }


    changeColor(event) {
        this.setState({background: event.target.value});
    }

    changeTextColor(e) {
        this.setState({color: e.target.value})
    }


    getMaxId(users) {
        let maxId = 0;

        users.forEach(user => {
            if (user.id > maxId) {
                maxId = user.id;
            }
        });

        return maxId;
    }

    submitAddForm(event, name, email, salariu, imagine, isGoldClient) {
        event.preventDefault();

        let errors = {};

        if (!name) {
            errors["name"] = {message: "Numele este obligatoriu."};
        }

        if (!email) {
            errors["email"] = {message: "Adresa de email este obligatorie."};
        } else if (!email.includes("@")) {
            errors["email"] = {message: "Adresa de email trebuie să conțină @."};
        }

        if (salariu && isNaN(Number(salariu))) {
            errors["salariu"] = {message: "Salariul trebuie să fie un număr."};
        }

        this.setState({
            errors: errors
        });

        if (Object.keys(errors).length === 0) {
            this.setState(prevState => {
                return {
                    users: [
                        ...prevState.users,
                        {
                            id: this.getMaxId(prevState.users) + 1,
                            name,
                            email,
                            salariu,
                            imagine,
                            isGoldClient,
                            errors
                        }
                    ]
                }
            })
        }
    }


    handleDelete = (index) => {
        const newUsers = [...this.state.users];
        newUsers.splice(index, 1);
        this.setState({users: newUsers});
    };

    render() {
        let currentComponent;
        if (this.state.currentComponent === 'users') {
            currentComponent = <UserList users={this.state.users} onDelete={this.handleDelete}/>;
        } else if (this.state.currentComponent === 'posts') {
            currentComponent = <PostList/>;
        }
        return (
            <div className="app" style={{background: this.state.background, color: this.state.color}}>
                <h1 style={{display: "flex", justifyContent: "center"}}>Admin panel - Proiectul 1</h1>
                <UserAddForm
                    submitAddForm={(event, name, email, salariu, imagine, isGoldClient) =>
                        this.submitAddForm(event, name, email, salariu, imagine, isGoldClient)}/>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>
                        <h4>Change background color:</h4>
                        <input type="color" onChange={(event) => this.changeColor(event)}/>
                    </div>
                    <div>
                        <h4>Change text color:</h4>
                        <input type="color" onChange={(e) => this.changeTextColor(e)}/>
                    </div>
                </div>
                <div className={"container-buttons"}>
                    <button style={{background: "lightblue", padding: 10, borderRadius: 10, width: '50%'}}
                            onClick={() => this.changeUsers()}>Users</button>
                    <button style={{background: "lightgreen", padding: 10, borderRadius: 10, width: '50%'}}
                            onClick={() => this.changePosts()}>Posts</button>
                    {currentComponent}
                </div>

            </div>
        );
    }

}

export default App;
