import React from 'react'
import { connect } from 'react-redux'

function Leaderboard(props) {

  const { users } = props

  return (
    <div className='leaderboard-container'>
      <h2 className='leaderboard-title'>Leaderboard</h2>
      {users.map((user) => (
      <div className='leaderboard-card' key={user.id}>
        <img
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
          className='user-avatar leaderboard-user-avatar'
        />
        <div className='leaderboard-details'>
          <h4 className='leaderboard-name'>{user.name}</h4>
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

function mapStateToProps({ users }) {

  const leaderboardUsers = Object.values(users).map((user) => {
    return Object.assign({}, user, { answersNo: Object.keys(user.answers).length, questionsNo: user.questions.length })
  })

  return {
    users: leaderboardUsers.sort((a, b) => { return (b.answersNo + b.questionsNo) - (a.answersNo + a.questionsNo)})
  }
}

export default connect(mapStateToProps)(Leaderboard)
