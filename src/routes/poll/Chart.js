// import React from 'react'
// import {Pie} from 'react-chartjs-2';

// class BinChart extends React.Component{

//   render() {
//   	

// export default BinChart
import React from 'react';
import {Pie} from 'react-chartjs-2';
export default React.createClass({
  render() {
  	const votes = this.props.votes
  	const voteNumbers = votes.reduce((acc,cur)=>{
  		return acc+cur.number
  	},0)
  	if (voteNumbers === 0){
  		return <div></div>
  	}
		const result = {
			datasets:[{data:[,]}],
		}
		result.labels = []
		result.datasets[0].label = 'votes'
		for(let i = 0; i<votes.length;i++) {
			result.datasets[0].data[i] = votes[i].number
			result.labels[i]= votes[i].name
		}
		result.datasets[0].backgroundColor = []
		function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (let i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
		}
		for (let j=0; j<votes.length;j++) {
			result.datasets[0].backgroundColor[j]=getRandomColor()
		}
    return (
      <div>
        <Pie data={result}/>
      </div>
    );
  }
});