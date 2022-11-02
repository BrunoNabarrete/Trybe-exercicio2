import React, { Component } from 'react'
import Loanding from './Loanding';
import PersonCard from './PersonCard';

class PersonDetails extends Component {
  constructor() {
    super();
    
    this.state = {
        person: [],
        loading: true,
    }
  }

  componentDidMount() {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          person: data.results,
          loading: false,
        });
      });
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }
    render() {
        const { loading, person } = this.state;
        if (loading) return <Loanding />;
    return (
      <div>
        <PersonCard person={ this.getUserElements(person[0])}/>
      </div>
    )
  }
}

export default PersonDetails