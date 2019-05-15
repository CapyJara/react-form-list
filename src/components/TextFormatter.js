import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
state = {
  text: ''
};

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
}

render() {
  const { text } = this.state;
   
  return (
    <>
      <input name="text" type="text" onChange={this.handleChange}></input>
      <p>{text}</p>
    </>
  );
}
}
