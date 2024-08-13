import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const Post = () => {
  const [data, setData] = useState("")
  const queryClient=useQueryClient();
  const { data: pData, isLoading: pIsloading } = useQuery("p-data", async () => {
    const res = await fetch("http://localhost:3000/pdata");
    return res.json()
  })
  const clickHandler = async (d) => {
    const val = { d }

    setData("")
    const res = await fetch("http://localhost:3000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(val)
    })
    return await res.json()

  }
  const { mutate, isLoading, data: postData, isSuccess } = useMutation(clickHandler,{
    onSuccess:()=>{
     
      queryClient.invalidateQueries("p-data")
    }
  })
  if (isSuccess) {
    console.log(postData);

  }
  return (
    <>
      <input value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={() => mutate(data)}>{isLoading ? "loading" : "postdata"}</button>
      {pIsloading && "loading..."}
      {pData && `${pData.val}`}
    </>
  )
}

export default Post