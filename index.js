const express = require('express')
const Twit = require('twit')
const app = express()
//const appT = Twit()

app.get('/twit', (req,res) => {
  res.send("Hello world !")
})



var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
})

  T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  })

  app.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    console.log(data)
  })

  T.get('users/suggestions/:slug', { slug: 'funny' }, function (err, data, response) {
    console.log(data)
  })


app.listen(8080, () => {
  console.log("Serveur à l'écoute")
  console.log(T)
})


