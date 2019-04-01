import React, { Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='container'>
        <div className='questions-btns'>
          {/* <button>Questions</button>
          <button>Answered Questions</button> */}
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
