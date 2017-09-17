import React from 'react'
import { connect } from 'react-redux';

let NewPoll = ({ dispatch ,fetch}) => {
  let input
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(newPollAsync(fetch,input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
let postPoll = function(fetch,val){
	return fetch('/api/newpoll',{
		method:'POST',
		body:JSON.stringify({val:val,}),
	})
}
let newPollAsync = function(fetch,val){
	// console.log(fetch)
	return dispatch => {
		return postPoll(fetch,val).then(
				response => response.json()
			)	.then(json => {
					window.location.href = '/poll/'+json.url
				})
				.catch(error=>console.error(error))	
	}
}
NewPoll = connect()(NewPoll)

export default NewPoll