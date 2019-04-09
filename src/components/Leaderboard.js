import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    console.log(this.props.users)
    return (
      <div className='leaderboard'>
        <h2 className='leaderboard-title'>Leaderboard</h2>
        {this.props.users.map((user) => (
          <div className='user-card' key={user.id}>
            <img
              src={user.avatarURL}
              alt={`Avatar of ${user.name}`}
              className='user-avatar'
            />
            <div className='leaderboard-details'>
              <h4 className='user-name'>{user.name}</h4>
              <p className='details'>Answered questions: {user.answersNo}</p>
              <p className='details'>Added questions: {user.questionsNo}</p>
            </div>
            <div className='total-score'>
              <p>Total score</p>
              <p>{user.answersNo + user.questionsNo}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users }) {

  const leaderboardUsers = Object.values(users).map((user) => {
    return Object.assign({}, user, { answersNo: Object.keys(user.answers).length, questionsNo: user.questions.length })
  })

  return {
    users: leaderboardUsers.sort((a, b) => { return (b.answersNo + b.questionsNo) - (a.answersNo + a.questionsNo)})
  }
}

export default connect(mapStateToProps)(Leaderboard)
