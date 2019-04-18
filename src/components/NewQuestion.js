import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChangeOne = (event) => {
    this.setState({
      optionOne: event.target.value
    })
  }

  handleChangeTwo = (event) => {
    this.setState({
      optionTwo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    if (optionOne === '') {
      alert('Please add two options')
    } else {
      dispatch(handleAddQuestion(optionOne, optionTwo))

      this.setState(() => ({
        optionOne: '',
        optionTwo: '',
        toHome: true
      }))
    }
  }

  render() {

    const { optionOne, optionTwo, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (

      <div className='new-question'>

        <h3 className='new-question-title'>Create New Question</h3>

        <form className='new-question-form' onSubmit={this.handleSubmit}>
          <h2 className='new-question-form-title'>Would you rather ...</h2>
          <input
            placeholder='Enter Option One Text Here'
            value={optionOne}
            onChange={this.handleChangeOne}
            className='option newOptionOne'
          />
          <p className='new-question-form-alternative'>or</p>
          <input
            placeholder='Enter Option Two Text Here'
            value={optionTwo}
            onChange={this.handleChangeTwo}
            className='option newOptionTwo'
          />
        <br/>
          <button
            className='submit-btn'
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}>
              SUBMIT
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
