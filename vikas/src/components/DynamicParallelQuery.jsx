import React from 'react'
import { useQueries } from 'react-query'
const DynamicParallelQuery = () => {
    const fetcherFun = async (id) => {
        const res = await fetch(`http://localhost:3000/employee/${id}`)
        return res.json()
    }
    const result = useQueries(
        [1, 6, 3, 9, 4, 6, 23, 12, 17].map(id => {
            return {
                queryKey: ['employee', id],
                queryFn: () => fetcherFun(id)
            }
        })
    )
    console.log({result});
    
    return (
        <div>DynamicParallelQuery</div>
    )
}

export default DynamicParallelQuery