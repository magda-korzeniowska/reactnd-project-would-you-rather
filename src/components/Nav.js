import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
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

        {/* {this.props.authedUser && (
          <li className='nav-logout'>
            <img className="nav-avatar" alt="user-avatar" src={authedUser.avatar} />
            LOGOUT
          </li>
        )} */}


        {/* {this.props.authedUser && (
             <li className="col-12 col-md-3 nav-logout" onClick={(e) => { this.handleLogout(); }}>({this.props.authedUser.name}) Logout</li>
           )}

        <Link to={'/'} className='nav-item' id='left-nav' onClick={this.handleLogOut}>
            <img className="nav-avatar" alt="user-avatar" src={authedUserAvatar} />
            LOGOUT
          </Link> */}
      </ul>
    </nav>
  )
}
