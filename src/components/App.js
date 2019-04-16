import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import QuestionPage from './QuestionPage'
import Login from './Login'
import PageNotFound from './PageNotFound'
import LoadingBar from 'react-redux-loading'
import '../App.css'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    const { loading } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='App'>
            {loading === true
              ? <Login />
              : <Switch>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/question/:id' component={QuestionPage} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/login' component={Login} />
                  <Route component={PageNotFound} />
                </Switch>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
