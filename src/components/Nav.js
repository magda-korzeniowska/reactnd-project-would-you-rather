import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }

  render() {

    const { authedUser, users } = this.props
    // const loggedIn = authedUser !== null

    console.log(authedUser)

    return (
      <nav className='nav'>
        <ul className='nav-ul'>
          <li className='nav-items'>
            <NavLink to='/' exact activeClassName='active'>
              HOME
            </NavLink>
          </li>
          <li className='nav-items'>
            <NavLink to='/add' activeClassName='active'>
              ADD QUESTION
            </NavLink>
          </li>
          <li className='nav-items'>
            <NavLink to='/leaderboard' activeClassName='active'>
              LEADERBOARD
            </NavLink>
          </li>
          <li className='nav-items logout'>
            <NavLink to={'/'} activeClassName='active' onClick={this.handleLogout}>
              <img className='nav-avatar' alt='user-avatar' src={users[authedUser].avatarURL} />
              <span className='logged-name'>{users[authedUser].name}</span> LOGOUT
            </NavLink>
          </li>

        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Nav)
