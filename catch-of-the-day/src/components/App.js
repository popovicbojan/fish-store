import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import PropTypes from 'prop-types';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount() {
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);

        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }


    //sjeti se price za bind, moras ili da bindujes metodu u konstruktoru ili da imas atribut kome dodijelis arrow function, problem sa this!!!
    addFish = fish => {
        //pravimo kopiju state.fishesh
        const newFishes = { ...this.state.fishes };
        //dodajemo novi objekat fish u kopiju
        newFishes[`fish${Date.now()}`] = fish;
        //setujemo novi objekat fishes u state objektu
        this.setState({
            fishes: newFishes
        });
    }

    updateFish = (key, updatedFish) => {
        //napravi kopiju stanje
        const fishes = this.state.fishes;
        //azuriraj ribu
        fishes[key] = updatedFish;
        //setuj state
        this.setState({fishes: fishes});
    }

    deleteFish = key => {
        const newFishes = this.state.fishes;
        newFishes[key] = null;
        this.setState({fishes: newFishes});
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    addToOrder = key => {
        // napravi kopiju starog objekata order
        const order = { ...this.state.order };
        // ili dodaj objekat u order ili povecaj kolicinu za 1
        order[key] = order[key] + 1 || 1;
        // azuriraj objekat order u stat-u
        this.setState({ order: order });
    }

    deleteOrder = key =>{
        const newOrder = this.state.order;
        console.log(key);
        delete newOrder[key];
        this.setState({order: newOrder});
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>
                            <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
                        )}
                    </ul>
                </div>
                <Order deleteOrder={this.deleteOrder} fishes={this.state.fishes} order={this.state.order} />
                <Inventory deleteFish={this.deleteFish} updateFish={this.updateFish} fishes={this.state.fishes} addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    }
}

export default App;