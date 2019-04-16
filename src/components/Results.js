import React from 'react'
import { connect } from 'react-redux'

function Results(props) {

  const { authedUser, question, users } = props
  const allVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  const optionOneVotes = question.optionOne.votes.length
  const optionTwoVotes = question.optionTwo.votes.length

  return (
    <div className='results'>
      <div className='results-table'>
        {authedUser === question.author
          ? <div className="question-author">Asked by you:</div>
          : <div className="question-author">Asked by {users[question.author].name}:</div>}
        <h3 className='question-form-title'>Would you rather...</h3>

        <div className='show-results'>
          <div className='results-option-one'>
            <p>...{question.optionOne.text}</p>
            {question.optionOne.votes.includes(authedUser) &&
              <div className='badge-wrapper'>
                <span className='badge'>Your choice</span>
              </div>
            }
            <div className='progress'>
              <div className='progress-bar' style={{width: `${(optionOneVotes / allVotes) * 100}%`}}>
                {`${((optionOneVotes / allVotes) * 100).toFixed(0)}%`}
              </div>
            </div>
            <p className='votes'>{optionOneVotes} out of {allVotes} votes</p>
          </div>

          <div className='results-option-two'>
            <p>...{question.optionTwo.text}</p>
            {question.optionTwo.votes.includes(authedUser) &&
              <div className='badge-wrapper'>
                <span className='badge'>Your choice</span>
              </div>
            }
            <div className='progress'>
              <div className='progress-bar' style={{width: `${(optionTwoVotes / allVotes) * 100}%`}}>
                {`${((optionTwoVotes / allVotes) * 100).toFixed(0)}%`}
              </div>
            </div>
            <p className='votes'>{optionTwoVotes} out of {allVotes} votes</p>
          </div>
        </div>
      </div>

      <img
        src={users[question.author].avatarURL}
        alt={`Avatar of ${users[question.author].name}`}
        className='user-avatar'
      />
    </div>
  )
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question,
    users
  }
}

export default connect(mapStateToProps)(Results)
