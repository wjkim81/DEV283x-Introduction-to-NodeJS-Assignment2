module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.store.posts)
  },
  addPost(req, res) {
    let newPost = req.body
    let postId = req.store.posts.length
    req.store.posts.push(newPost)
    //res.status(201).send(`postId: ${postId}, body: ${JSON.stringify(newPost)}`)
    res.status(201).send(req.store.posts)
  },
  updatePost(req, res) {
    if (req.params.postId < req.store.posts.length && req.params.postId >= 0) {
      req.store.posts[req.params.postId] = req.body
      res.status(202).send(req.store.posts[req.params.postId])
    } else {
      res.status(402).send(`postId ${req.params.postId} is not in database`);
    }
  },
  removePost(req, res) {
    if (req.params.postId < req.store.posts.length && req.params.postId >= 0)  {
      req.store.posts.splice(req.params.postId, 1)
      res.status(204).send()
    } else {
      res.status(404).send(`postId ${req.params.postId} is not in database`);
    }
  }
}