import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  state = {
    isLogged: false
  }

  handleLogin(id) {
    const { dispatch } = this.props

    dispatch(setAuthedUser(id))
    this.setState(() => ({
      isLogged: true
    }))
  }

  render() {

    const { from } = this.props.location || { from: {pathname: '/'} }
    const { isLogged } = this.state
    const { users } = this.props

    if (isLogged) {
        return <Redirect to={from}/>
    }

    return (
      <div className='login'>
        <h1 className='app-title'>WOULD YOU RATHER?</h1>

        <ul className='dropdown'>
          <button className='drop-btn'>Please login to take a quiz</button>
          {Object.keys(users).map((user) => (
            <li className='dropdown-content'
              key={users[user].id}
              onClick={() => {this.handleLogin(users[user].id)}}
              >
              <div className='card-body'>
                <img className='card-avatar' alt={users[user].name} src={users[user].avatarURL} height='80' />
                <p className='card-name'>{users[user].name}</p>
              </div>
            </li>
          ))}
        </ul>
        <footer className='footer'>
          <p>App created for UDACITY React Nanodegree</p>
        </footer>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
