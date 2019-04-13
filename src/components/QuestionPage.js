import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Nav from './Nav'

class QuestionPage extends Component {
  render() {

    const { id } = this.props

    return (
      <div>
        <Nav />
        <div className='question-page-container'>
          <h3 className='question-page-title'>Question</h3>
          <Question id={id} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, props) {

  const { id } = props.match.params;

  return {
    id
  }
}

export default connect(mapStateToProps)(QuestionPage)
