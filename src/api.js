import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import config from './config';

const api = express.Router();

MongoClient.connect(config.url, (err, db) => {
  if (err) console.error(err);
  else {
    console.log('connected to mongo database, Hooray!!!');
    const polls = db.collection('polls');
    // create a new poll
    api.post('/newpoll', (req, res) => {
      // eslint-disable-line no-shadow
      polls.insertOne({ title: req.body.title,
      		votes: [{name:'a', number:1}, {name:'b', number:2}]
      	}, (err, result) => {
        if (err) console.error(err);
        else {
          res.send({ url: result.insertedId });
        }
      });
    });
    // get the poll in poll page
    api.get('/poll/:poll', (req, res) => {
      // console.log(req.params.poll);
      polls.findOne({ _id: ObjectId(req.params.poll) }, (err, result) => {
        if (err) res.sendStatus(404);
        else {
          // console.log(result)
          res.send(result);
        }
      });
    });
    api.get('/poll/:poll/vote/:idx', (req, res) => {
    	polls.findOne({ _id: ObjectId(req.params.poll) },  
    		(err, result) => {
        if (err) {
        	console.log('cant find')
        	res.sendStatus(404);
        }
        else {
        	console.log(result)
        	result.votes[req.params.idx].number += 1
        	polls.update({_id: ObjectId(req.params.poll)},
        		result, (err, notSend) => {
        			if (err) {
        				console.log('cant update')
        				res.sendStatus(404)
        			}
        			else {
        				res.send(result)
        			}
        	})
        }
    	})
    })
    // get all the polls in main page
    api.get('/polls', (req, res) => {
      polls.find({}).toArray((err, result) => {
        if (err) res.sendStatus(404);
        else {
          res.send(result);
        }
      });
    });

    // end of database connection
  }
});

export default api;
