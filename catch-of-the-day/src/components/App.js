import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

    state = {
        fishes: {},
        orders: {}
    };

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

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;