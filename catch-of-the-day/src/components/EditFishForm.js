import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {

    static propTypes = {
        fish: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            desc: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string
        }
        ),
        updateFish: PropTypes.func,
        index: PropTypes.string
    }

    handleChange = event => {
        const key = event.currentTarget.name;
        const value = event.currentTarget.value;
        const updatedFish = {
            ...this.props.fish,
            [key]: value
        }

        this.props.updateFish(this.props.index, updatedFish);

    }

    render() {
        return (
            <div className="fish-edit   ">
                <input name="name" type="text" onChange={this.handleChange} value={this.props.fish.name} />
                <input name="price" type="text" onChange={this.handleChange} value={this.props.fish.price} />
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold-Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input name="image" type="text" onChange={this.handleChange} value={this.props.fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>

        )
    }

}

export default EditFishForm;