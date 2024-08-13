import React from 'react'
import { useQuery } from 'react-query'

const ParallelQueries = () => {
    const { data: stuData, isLoading: stuIsLoading } = useQuery("friends", async () => {
        const res = await fetch("http://localhost:3000/friends");
        return res.json()
    })
    const { data: friData, isLoading: friIsLoading } = useQuery("studnets", async () => {
        const res = await fetch("http://localhost:3000/data");
        return res.json()
    })

    return (
        <div>ParallelQueries</div>
    )
}

export default ParallelQueries