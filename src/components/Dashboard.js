import React, { Component} from 'react'
import { connect } from 'react-redux'
import QuestionBox from './QuestionBox'
import Results from './Results'
import Nav from './Nav'

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
    return (
      <div className='dashboard-container'>
        <Nav />
        <div className='questions-btns'>
          <button className='question-btn unanswered-btn' onClick={this.showQuestions}>QUESTIONS</button>
          <button className='question-btn results-btn' onClick={this.showResults}>RESULTS</button>
        </div>
        <div>

          {(this.state.showUnansweredQuestions === true) &&
            <ul className='questions-list'>
              {this.props.questionIds.map((id) => (
                <li key={id}>
                  <QuestionBox id={id}/>
                </li>
              ))}
            </ul>}

          {this.state.showUnansweredQuestions === false &&
            <ul className='questions-list'>
              {this.props.answeredQuestionIds.map((id) => (
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
