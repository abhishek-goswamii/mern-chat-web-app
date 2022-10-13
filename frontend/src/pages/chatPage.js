import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

const Chatpage = () => {
  
  let [chat ,setChat] = useState([]);
  
  const fetchChats = async ()=>{
    let {data} = await axios.get("/api/chat")
    console.log(data);
    setChat(data)
  }
  useEffect(() => {
      fetchChats()
  }, []);

  return (
    <div>{chat.map((v) => <h1 key={v._id} > {v.chatName} </h1>)}</div>
  )
}

export default Chatpage