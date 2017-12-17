#!/bin/bash

set -x
#posts post data
curl -H "Content-Type: application/json" -X POST -d '{"name": "TEST 001", "url":"http://webapplog.com/es6", "comments": [{"text": "abcdef"}]}'  "http://localhost:3000/posts"
sleep 3

#updates post data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "TEST 002", "url":"http://webapplog.com/es6", "text": "abcdef"}' "http://localhost:3000/posts/10"
sleep 3

#updates post data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "TEST 002", "url":"http://webapplog.com/es6", "text": "abcdef"}' "http://localhost:3000/posts/0"
sleep 3

#gets post data
curl "http://localhost:3000/posts"
sleep 3

#deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/10"
sleep 3

#deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/0"
sleep 3

#gets post data
curl "http://localhost:3000/posts"
sleep 3


#gets comment data
curl "http://localhost:3000/posts/0/comments"
sleep 3

#gets comment data
curl "http://localhost:3000/posts/1/comments"
sleep 3


#updates comments data at specific post id with specific comment id
curl -H "Content-Type: application/json" -X POST -d '{ "text": "text test 0000"}'  "http://localhost:3000/posts/1/comments"
sleep 3

#gets post data
curl "http://localhost:3000/posts"
sleep 3
