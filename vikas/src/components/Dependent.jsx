import React from 'react'
import { useQuery } from 'react-query'
const fetchUserByEmail = async (email) => {
    const res = await fetch(`http://localhost:3000/user/${email}`)
    return res.json()
}
const fetchCoursesByChannelId = async (channelId) => {
    const res = await fetch(`http://localhost:3000/courses/${channelId}`);
    return res.json();
}
const Dependent = ({ email }) => {
    const { data: user, isLoading } = useQuery(['user', email], () => fetchUserByEmail(email))
    console.log(user);
    const channelId = user?.id;
    const { data: courses } = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), { enabled: !!channelId })
    console.log(courses.courses);

    return (
        <div>Dependent</div>
    )
}

export default Dependent