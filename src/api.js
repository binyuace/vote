import express from 'express';
import { MongoClient } from 'mongodb'
import config from './config';

const api = express.Router()

MongoClient.connect(config.url, (err, db) => {
  if (err) console.error(err)
  else {
    console.log('connected to mongo database, Hooray!!!')
    const polls = db.collection('polls')
		api.post('/newpoll', (req, res) => {
  		console.log('body', req.body);
  		polls.insertOne({title: req.body.title},(err,result)=>{
  			if (err) console.error(err)
  			else {
  				// console.log(result)
  				res.send({url:result.insertedId})
  			}
  		})
		})
	}
})

export default api
