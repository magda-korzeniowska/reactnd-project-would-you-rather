import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../actions/questions'

class Question extends Component {

  state = {
    option: ''
  }

  handleChange = (event) => {
    this.setState({
      option: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { dispatch, question, authedUser } = this.props
    const { option } = this.state

    dispatch(saveQuestionAnswer({
      authedUser,
      qid: question,
      option
    }))
  }

  render() {
    console.log(this.props)
    const { authedUser, question, users } = this.props
    // console.log(question)
    return (
      <div className='question'>
        <img
          src={users[question.author].avatarURL}
          alt={`Avatar of ${users[question.author].name}`}
          className='user-avatar'
        />

       <form className="question-form" onSubmit={this.handleSubmit}>
         {authedUser === question.author
           ? <div className="question-author">You asked:</div>
           : <div className="question-author">{users[question.author].name} asks:</div>}
         <h3> Would you rather... </h3>
         <div>
           <input type='radio' name='options' value='optionOne'
            id='optionOne' onChange={this.handleChange}/>
           <label className="question-choice" htmlFor='optionOne'> {question.optionOne.text} </label>
           <br/>

           <input type='radio' name='options' value='optionTwo'
            id='optionTwo' onChange={this.handleChange}/>
           <label className="question-choice" htmlFor='optionTwo'>{question.optionTwo.text}</label>
           <br/>

           <button className='question-btn' type='submit'>Submit</button>
         </div>
       </form>
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
