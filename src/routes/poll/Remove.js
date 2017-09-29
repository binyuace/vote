import React from 'react'

const Remove = ({fetch,params}) =>{
	 const handleClick = (e)=>{
	 	e.preventDefault()
	 	fetch('/api/poll/'+params.poll,{
	 		method:'delete',
	 	}).then(res =>{
	 		if(!res.ok) {
	 			throw Error(res.statusText);
	 			return false
	 		}
	 	}).then(() =>{
	 		window.location.href = '/'
	 	}).catch(()=>{
	 		return false
	 	})
	 	return false
	}
	return (<a href='/' onClick={(e)=>handleClick(e)}>
	Remove</a>)
}
export default Remove