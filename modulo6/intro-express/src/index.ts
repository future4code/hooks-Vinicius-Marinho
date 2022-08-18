import { user,posts} from './data';
import express from "express"
import { AddressInfo } from "net";


const app = express();

app.use(express.json());



app.get("/users",(req,res)=>{
       res.send(user)
})

app.get("/posts",(req,res)=>{
    res.send(posts)
})

app.get("/posts/:userId",(req,res)=>{
    const userId = Number(req.params.userId)

    const listPost = posts.filter((post)=>{
        return(post.userId === userId)             
    })
    
    res.send(listPost)
})

app.delete("/delete/:userId", (req,res)=>{
  const userId = Number(req.params.userId)

  const delUsers = user.map((user) => {
    if (user.id === userId) {
      return {}
    }
    return user
  })
  
  res.send(delUsers)
})

app.delete("/delete/:userId/:id",(req,res)=>{
  const userId = Number(req.params.userId)
  const postId = Number(req.params.id)

    const listPost = posts.filter((post)=>{
        return(post.userId === userId)             
    })
    const listposts = listPost.map((post)=>{
      if(post.id === postId){
        return{}
      }
      return post
    })
    res.send(listposts)
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;


