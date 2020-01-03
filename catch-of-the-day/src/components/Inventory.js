import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import base, { firebaseApp } from '../base';


class Inventory extends React.Component {

    static propTypes = {
        fishes: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            desc: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string
        }),
        deleteFish: PropTypes.func,
        updateFish: PropTypes.func,
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    }

    state = {
        uid: null,
        owner: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user);
                this.authHandle({user});
            }
        }

        );
    }

    authHandle = async (authData) => {
        // dobavi podatke o trenutnoj prodavnici
        const store = await base.fetch(this.props.storeId, { context: this });
        console.log(store);
        // ako nema usera setuj trenutnog usera
        if (!store.owner) {
            //posalji podatke u firebase za trenutnu prodavnicu u atribut owner trenutnog korisnika
            await base.post(`${this.props.storeId}/owner`, {
                //trenutni korisnik je identifikovan na osnovu korisnickog id koga vraca facebook
                data: authData.user.uid
            })
        }
        // updajtuj inventory state o promjeni podataka, setujemo dva podatka
        this.setState({
            uid: authData.user.uid,     //id korisnika koji se ulogovao
            owner: store.owner || authData.user.uid     //id korisnika cija je prodavnica koji moze biti:
            // vlasnik prodavnice od ranije ili prodavnica nema vlasnika pa setujemo trenutnog ulogovanog
        });
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandle)
    }

    logout = async () => {
        console.log('Loging Out');
        await firebase.auth().signOut();
        this.setState({
            uid: null
        });
    }

    render() {

        const logout = <button onClick={this.logout}>Log Out!</button>

        // provjeri da li je korisnik ulogovan
        if (this.state.uid == null) {
            return <Login authenticate={this.authenticate} />
        }

        //provjeri da li je ulogovani korisnik vlasnik prodavnice
        if (this.state.uid !== this.state.owner) {
            return (
                <div>
                    Sorry, you are not the owner!
                    {logout}
                </div>
            )
        }

        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {logout}
                {Object.keys(this.props.fishes).map(key => <EditFishForm deleteFish={this.props.deleteFish} updateFish={this.props.updateFish} key={key} index={key} fish={this.props.fishes[key]} />)}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>

        );
    }
}

export default Inventory;