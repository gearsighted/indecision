import React from "react";

export default class AddOptions extends React.Component {
  state = {
    error: undefined,
  };
  handleAddOption = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      event.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="form" onSubmit={this.handleAddOption}>
          <input className="form__input" type="text" name="option" />
          <button className="button form__button">Add Option</button>
        </form>
      </div>
    );
  }
}
