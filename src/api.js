import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import config from './config';

const api = express.Router();

MongoClient.connect(config.url, (err, db) => {
  if (err) console.error(err);
  else {
    console.log('connected to mongo database, Hooray!!!');
    const polls = db.collection('polls');
    api.post('/newpoll', (req, res) => {
      // console.log('body', req.body);
      // eslint-disable-line no-shadow
      polls.insertOne({ title: req.body.title }, (err, result) => {
        if (err) console.error(err);
        else {
          // console.log(result)
          res.send({ url: result.insertedId });
        }
      });
    });
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
    api.get('/polls', (req, res) => {
      polls.find({}).toArray((err, result) => {
        if (err) res.sendStatus(404);
        else {
          res.send(result);
        }
      });
    });
  }
});

export default api;
