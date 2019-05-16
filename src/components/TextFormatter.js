import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
state = {
  text: '',
  color: 'black'
};

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
}

render() {
  const { text, color } = this.state;
   
  return (
    <>
      <input name="text" type="text" onChange={this.handleChange} />
      <input name="color" type="color" onChange={this.handleChange} />
      <p style={{ color }}>{text}</p>
    </>
  );
}
}
