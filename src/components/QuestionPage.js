import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
  render() {

    const { id } = this.props

    return (
      <div>
        <h3 className='center'>Question</h3>
        <Question id={id} />
      </div>
  );
  }
}

function mapStateToProps({ authedUser, questions }, props) {

  const { id } = props.match.params;

  return {
    id
  }
}

export default connect(mapStateToProps)(QuestionPage)