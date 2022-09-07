import React, { Component } from 'react'

class searchUsers extends Component {

    state={
        search: ''
    }

    handleForm = (e) =>{

        this.setState({
            search: e.target.value
        })
    }

    searchUsers = (e)=>{
        e.preventDefault();
        
        this.props.getUserSearch(this.state.search)
    }


  render() {
    return (
      
        <form onSubmit={this.searchUsers}>
            <div className="form-group ">
                <input onChange={this.handleForm} value={this.state.search} id="search" placeholder='Search users...' type="text" className="form-control" />
            </div>
            <button className="btn btn-danger mt-2 w-100">Search</button>
        </form>
      
    )
  }
}

export default searchUsers