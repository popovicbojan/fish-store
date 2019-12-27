import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // jedno rjesenje za bind

    // constructor(){
    //     super();

    //     this.goToStore = this.goToStore.bind(this);
    // }

    // goToStore(event) {
    //     event.preventDefault();
    //     console.log(this.myInput);
    // }

    // drugo rjesenje
    
    myInput = React.createRef();

    goToStore = (event) => {
        // sprijeci default dogadjaj
        event.preventDefault();

        // uzmi vrijednosti iz input polja
        const storeName = this.myInput.current.value;

        // promijeni url na /store/sta-god-je-uneseno
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()} />
                <button type="submit">Visit Store ↦</button>
            </form>
        );
    }
}

export default StorePicker;
