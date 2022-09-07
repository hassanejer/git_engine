import React, { Component } from 'react';
import User from './User';
import SearchUsers from './searchUsers';
import axios from 'axios';

export class Users extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         users:[
            
         ] 
      }
    }

    getUsers = () =>{
        axios.get('https://api.github.com/users')
            .then(response => {
                this.setState({
                    users :response.data
                })
        })
    }

    componentDidMount(){
        this.getUsers();
    }

    searchUsersFromGit = (data) => {

        if(data !== '' ){
            axios.get(`https://api.github.com/search/users?q=${data}`)
                 .then(response =>{
                    console.log(response)
                    this.setState({
                        users : response.data.items
                    })
                 })
        }
    }
    

    render() {
        return (
        <div >
            <div className="row my-2">
                <div className="col-md-12">
                    <SearchUsers getUserSearch={this.searchUsersFromGit} /> 
                </div>
            </div>
            <div className='row px-3'>
                {this.state.users.map(user =>(
                    <div className="col-md-4 mb-3  " key={user.id}>
                        <User user={user}  />
                    </div>
                    
                ))}
            </div>
            
        </div>
        )
    }
}

export default Users