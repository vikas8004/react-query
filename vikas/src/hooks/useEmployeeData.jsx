import { useQuery } from "react-query"

export const useEmplyeesData = (onSuccess, onError) => {
    return useQuery('employees', async () => {
        const res = await fetch("http://localhost:3000/data")
        const data = await res.json();
        return data;
    }, { enabled: false, onSuccess, onError, select: (data) => data.map(ele => ele.name) })
}