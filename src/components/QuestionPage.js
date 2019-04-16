import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'

class QuestionPage extends Component {
  render() {

    const { id, questions } = this.props;
    const question = questions[id];

    if (question === undefined) {
      return <Redirect to='/not-found' />
    }

    return (
      <div>
        <Nav />
        <div className='question-page-container'>
          <h2 className='question-page-title'>Answer the Question</h2>
          <Question id={id} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, props) {

  const { id } = props.match.params;

  return {
    id,
    questions
  }
}

export default connect(mapStateToProps)(QuestionPage)
