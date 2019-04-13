import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  handleLogin(id) {
   const { dispatch } = this.props;
   dispatch(setAuthedUser(id));
 }

  render() {

    const { users } = this.props
    console.log(users)

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
                <a className='card-name'>{users[user].name}</a>
              </div>
            </li>
          ))}
        </ul>
        {/* <footer className="footer">
          <p>App created for UDACITY React Nanodegree</p>
        </footer> */}
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
