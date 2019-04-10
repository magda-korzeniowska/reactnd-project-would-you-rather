import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import QuestionPage from './QuestionPage'
import LoadingBar from 'react-redux-loading'
import '../App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className='App'>
        <LoadingBar />
        {/* {this.props.loading === true
          ? null
          : <Dashboard />} */}
        {/* <NewQuestion /> */}
        {/* <Leaderboard /> */}
        {this.props.loading === true
          ? null
          : <QuestionPage match={{params: {id: '6ni6ok3ym7mf1p33lnez'}}}/>}

      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
