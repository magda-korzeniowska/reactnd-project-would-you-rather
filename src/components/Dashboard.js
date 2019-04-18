import React, { Component} from 'react'
import { connect } from 'react-redux'
import QuestionBox from './QuestionBox'
import Results from './Results'

class Dashboard extends Component {

  state = {
    showUnansweredQuestions: true
  }

  showQuestions = () => {
    this.setState({
      showUnansweredQuestions: true
    })
  }

  showResults = () => {
    this.setState({
      showUnansweredQuestions: false
    })
  }

  render() {

    const { showUnansweredQuestions } = this.state
    const { questionIds, answeredQuestionIds } = this.props

    return (
      <div className='dashboard-container'>
        <div className='questions-btns'>
          <button className='question-btn unanswered-btn' onClick={this.showQuestions}>QUESTIONS</button>
          <button className='question-btn results-btn' onClick={this.showResults}>RESULTS</button>
        </div>

        {(showUnansweredQuestions && questionIds.length === 0) &&
          <div className='question-end'>No more questions!</div>}

        <div>
          {(showUnansweredQuestions === true) &&
            <ul className='questions-list'>
              {questionIds.map((id) => (
                <li key={id}>
                  <QuestionBox id={id}/>
                </li>
              ))}
            </ul>}

          {showUnansweredQuestions === false &&
            <ul className='questions-list'>
              {answeredQuestionIds.map((id) => (
                <li key={id}>
                  <Results id={id}/>
                </li>
              ))}
            </ul>}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {

  const unansweredQuestions = Object.values(questions)
    .filter((question) =>
      !question.optionOne.votes.includes(authedUser) &&
      !question.optionTwo.votes.includes(authedUser))

  const answeredQuestions = Object.values(questions)
    .filter((question) =>
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser))

  return {
    authedUser,
    questionIds: Object.values(unansweredQuestions)
      .sort((a,b) => b.timestamp - a.timestamp).map((question) => question.id),
    answeredQuestionIds: Object.values(answeredQuestions)
      .sort((a,b) => b.timestamp - a.timestamp).map((question) => question.id)
  }
}

export default connect(mapStateToProps)(Dashboard)
