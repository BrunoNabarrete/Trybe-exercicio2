import React, { Component } from 'react'

class Form extends Component {
    state = {
        nome: '',
        idade: 0,
        check: false,
    }

    handleChange = (event) => {
        const { target } = event;
        const { name } = target;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

  render() {
    const { nome, idade } = this.state;
    return (
      <form>
        <input name="nome" value={ nome} onChange={this.handleChange} type="text" />
        <input name="idade" value={ idade } onChange={this.handleChange} type="number" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="checkbox" onChange={ this.handleChange } name="check" id="" />
      </form>
    )
  }
}

export default Form