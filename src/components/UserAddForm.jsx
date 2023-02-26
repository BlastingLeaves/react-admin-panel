import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            salariu: '',
            imagine: '',
            isGoldClient: false,
            errors: {
                name: {},
                email: {},
                salariu: {}
            }
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateSalariu(event) {
        this.setState({salariu: event.target.value})
    }

    updateImagine(event) {
        this.setState({imagine: event.target.value})
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        const {name, email, salariu, imagine, isGoldClient} = this.state;
        const {errors} = this.state

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, salariu, imagine, isGoldClient, errors)}
            >
                <div style={{display: "block", justifyContent: "center"}}>
                    <div>
                        <h2>Adauga utilizatori:</h2>
                        <label htmlFor="name">Nume:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={(event) => this.updateName(event)}
                        />
                        {errors.name && errors.name.message && (
                            <span style={{color: 'red'}}>{errors.name.message}</span>
                        )}
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            onChange={(event) => this.updateEmail(event)}
                        />
                        {errors.email && errors.email.message && (
                            <span style={{color: 'red'}}>{errors.email.message}</span>
                        )}
                        <label htmlFor="email">Salariu:</label>
                        <input
                            type="text"
                            name="salariu"
                            onChange={(event) => this.updateSalariu(event)}
                        />
                        {errors.salariu && errors.salariu.message && (
                            <span style={{color: 'red'}}>{errors.salariu.message}</span>
                        )}
                        <label htmlFor="email">Imagine (link):</label>
                        <input
                            type="text"
                            name="imagine"
                            onChange={(event) => this.updateImagine(event)}
                        />
                        <label htmlFor="is-gold-client">Client GOLD</label>
                        <input
                            type="checkbox"
                            name="is-gold-client"
                            value="true"
                            onChange={(event) => this.updateIsGoldClient(event)}
                        />
                    </div>
                    <div style={{display: "flex", justifyContent: "center", marginTop: 10}}>
                        <input type="submit" value="Introdu utilizatorul" style={{background: "green", padding: 10, borderRadius: 10}}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default UserAddForm;