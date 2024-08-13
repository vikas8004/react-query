import React, { useState } from 'react'
import { useQuery } from "react-query";
import { useEmplyeesData } from '../hooks/useEmployeeData';
import { Link } from 'react-router-dom';
const RqFetch = () => {
    // const [interval, setInt] = useState(3000)
    const onSuccess = (data, variable, context) => {
        console.log("performed side effect after data fetching", data, variable, context)
        // if (data.length > 30) {
        //     setInt(false)
        // }


    }
    const onError = () => {
        console.log("perfomed side effect after encountering error");

    }
    const result = useQuery('employee-names', async () => {
        const res = await fetch("http://localhost:3000/data");
        const data = await res.json()
        return data;
    }, {

        // refetchInterval: interval,
        enabled: false,
        onSuccess,
        onError,
        // select: (data) => {

        //     return data.map(ele => ele.name);

        // }
    })
    // const result = useEmplyeesData(onSuccess, onError);
    console.log(result.isLoading, result.isFetching)
    if (result.isLoading || result.isFetching) {
        return <div>loading......</div>
    }
    if (result.isError) {
        console.log(result.error);

        return <div>{"something went wrong"}</div>
    }
    return (
        <>
            <p>Learning React Query</p>
            <button onClick={() => result.refetch()}>Fetch heros</button>
            {
                result.data?.map((ele, i) => <div key={i}><Link to={`/employee/${ele.student_id}`}>{ele.name}</Link></div>)
            }

            {/* {
                result.data?.map((ele, i) => <div key={i}>{ele}</div>)
            } */}
        </>
    );
}

export default RqFetch