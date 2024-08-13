import React, { useEffect, useState } from 'react'

const TraditionalFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    async function loadData() {
        setLoading(true)
        try {
            const res = await fetch("http://localhost:3000/data");
            if (res.ok) {
                const result = await res.json();
                setLoading(false)
                setData(result)
            }

        } catch (error) {
            console.log(error);

            setLoading(false)
            setError(error.message)
        }
    }
    useEffect(() => {
        loadData()
    }, [])
    if (loading) {
        return <div>loading.....</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    if (data.length) return (
        <>
            <div>TraditionalFetch</div>
            {
                data?.map((el, i) => <p key={i}>{el.name}</p>)
            }
        </>
    )
}

export default TraditionalFetch