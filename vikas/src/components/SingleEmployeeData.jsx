import React, { useEffect, useState } from 'react'
import { useGetSinglEmployee } from '../hooks/useGetSingleEmployee'
import { useParams } from 'react-router-dom';
const SingleEmployeeData = () => {
    const { eid } = useParams();
    const { data, isLoading } = useGetSinglEmployee(Number(eid));

    if (isLoading) {
        return <div>Loading.....</div>
    }
    console.log(data);

    return (
        <>
            <div>Id: {data[0].student_id}</div>
            <div>Name: {data[0].name}</div>
            <div>Age: {data[0].age}</div>
            <div>Gender: {data[0].gender}</div>

        </>
    )
}

export default SingleEmployeeData