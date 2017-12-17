module.exports = {
  getComments(req, res) {
    if (req.params.postId < req.store.posts.length && req.params.postId >= 0)  {
      res.status(200).send(req.store.posts[req.params.postId].comments)
    } else {
      res.status(400).send(`postId ${req.params.postId} is not in database`);
    }
  }, 
  addComment(req, res) {
    if (req.params.postId < req.store.posts.length && req.params.postId >= 0)  {
      let newComment = req.body
      let commentId = req.store.posts[req.params.postId].comments.length
      req.store.posts[req.params.postId].comments.push(newComment)
      res.status(201).send({commentId: commentId})
    } else {
      res.status(401).send(`postId ${req.params.postId} is not in database`);
    }
  },
  updateComment(req, res) {
    if (req.params.postId < req.store.posts.length && req.params.postId >= 0)  {
      if (req.params.commentId < req.store.posts[req.params.postID].length && req.params.commentId >= 0) {
        req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
        res.status(202).send(req.store.posts[req.params.postId].comments[req.params.commentId])
      } else {
        res.status(402).send(`commentId ${req.params.commentId} is wrong`);
      }
    } else {
      res.status(402).send(`postId ${req.params.postId} is not in database`);
    }
  },
  removeComment(req, res) {
    req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }  
}