
import React, { Component } from 'react'
import axios from 'axios'
import User from './User';
import { useParams } from 'react-router-dom';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class UserItem extends Component {
    constructor(props){
      super(props);
      this.state= {
        user:{}
    }
    
    }

  componentWillMount(){
    const login = this.props.params.login;
    

    axios.get(`https://api.github.com/users/${login}`)
         .then(res =>{
            this.setState({
              user:res.data
            })
         })
  }

  render() {
    const {user} = this.state;
    return (
      <div>
        <User user={user} />
      </div>
    )
  }
}

export default withParams(UserItem)