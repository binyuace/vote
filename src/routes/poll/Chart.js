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
  	console.log('data',votes)
		const result = {
			datasets:[{data:[,]}],
		}
		result.labels = []
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
		
		console.log('result',result)
  	

    return (
      <div>
        <h2>Pie Example</h2>
        <Pie data={result} />
      </div>
    );
  }
});



