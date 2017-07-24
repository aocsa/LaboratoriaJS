import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange() {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <input type="checkbox"
               id={label}
               value={label}
               checked={isChecked}
               onChange={this.toggleCheckboxChange}/>
        <label htmlFor={label}> <span></span>{label}</label>
      </div>
    );
  }
}

export default Checkbox;
