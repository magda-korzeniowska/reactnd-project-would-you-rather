import React, { Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='container'>
        <div className='questions-btns'>
          <button className='question-btn unanswered-btn'>QUESTIONS</button>
          <button className='question-btn answered-btn'>ANSWERED QUESTIONS</button>
        </div>
        <div>
          <ul className='questions-list'>
            {this.props.questionIds.map((id) => (
              <li key={id}>
                <Question id={id}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
