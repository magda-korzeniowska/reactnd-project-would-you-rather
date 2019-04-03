import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleAddQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(addQuestionAnswer(info))

    return saveQuestionAnswer(info)
      .catch((error) => {
        console.warn('Error in handleAddQuestionAnswer: ', error)
        dispatch(addQuestionAnswer(info))
        alert('There was an error adding the answer. Try again.')
      })
  }
}
