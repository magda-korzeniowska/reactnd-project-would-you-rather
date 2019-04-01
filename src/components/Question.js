import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='question'>
        Question Component
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question,
    users
  }
}

export default connect(mapStateToProps)(Question)
