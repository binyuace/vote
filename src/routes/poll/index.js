import React from 'react';
import {connect} from 'react-redux'
import Layout from '../../components/Layout';
import initialPoll from '../../actions/initialPoll'
import Poll from '../../components/Poll'
import voteAsync from '../../actions/voteAsync'
import Votes from './Votes'

async function action({ fetch, params, store}) {
  // initializing the state with fetch
  const response = await fetch(
    `/api/poll/${params.poll}`, {
    method: 'GET',
  })
  const result = await response.json()
  store.dispatch(initialPoll(result))
  const ShowPollState = connect(
      state => state.poll
    )(Poll)
  // connect votes with state and dispach
  const mapDispatchToProps = dispatch => ({
    handleClick: (idx) => {
      dispatch(voteAsync(fetch, params.poll, idx)) },
  })
  const AllVotes = connect(
    state => {
      return {votes: state.poll.votes}
    },
    mapDispatchToProps )(Votes)
  // connect async message
  const MessageAsync = ({message}) => {
    return <p>{message}</p>
  }
  const Message = connect(state=>{return {message:state.poll.messageAsync}})(MessageAsync)
  return {
    chunks: ['home'],
    title: result.title,
    component: (
      <Layout>
        <h1>
          poll:{result.title}<br/>
          votes:{
            result.votes.length?
            result.votes[0].name
            :'no votes curretly'
          }
        </h1>
        <ShowPollState />
        <AllVotes />
        <Message/>
      </Layout>
    ),
  };
}

export default action;
