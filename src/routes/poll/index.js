import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import initialPoll from '../../actions/initialPoll';
import Poll from '../../components/Poll';
import voteAsync from '../../actions/voteAsync';
import Votes from './Votes';
import NewVote from './NewVote';
import Share from './Share';
import Remove from './Remove';
import Chart from './Chart'
async function action({ fetch, params, store, location }) {
  // initializing the state with fetch
  const response = await fetch(`/api/poll/${params.poll}`, {
    method: 'GET',
  });
  const result = await response.json();
  store.dispatch(initialPoll(result));
  const ShowPollState = connect(state => state.poll)(Poll);
  // connect votes with state and dispach
  const mapDispatchToProps = dispatch => ({
    handleClick: idx => {
      dispatch(voteAsync(fetch, params.poll, idx));
    },
  });
  const AllVotes = connect(
    state => ({ votes: state.poll.votes }),
    mapDispatchToProps,
  )(Votes);
  // connect async message
  const MessageAsync = ({ message }) =>
    <p>
      {message}
    </p>;
  const Message = connect(state => ({ message: state.poll.messageAsync }))(
    MessageAsync,
  );
  const BinChartComponent = ({votes})=>{
    return <Chart votes={votes}/>
  }
  const BinChart = connect(state=>({votes:state.poll.votes}),)(BinChartComponent)
  return {
    chunks: ['home'],
    title: result.title,
    component: (
      <Layout>
        <h1>
          poll:{result.title}
          <br />
          Options:{result.votes.length
            ? result.votes.length
            : 'no Options curretly,feel free to creat options for this poll'}
        </h1>
        
        <BinChart/>
        <ShowPollState />
        <AllVotes />
        <Message />
        <NewVote fetch={fetch} params={params} store={store} />
        <Share title={result.title} location={location} />
        {store.getState().user !== null &&
        store.getState().poll.creatorId === store.getState().user.id
          ? <Remove fetch={fetch} params={params} />
          : null}
      </Layout>
    ),
  };
}

export default action;
