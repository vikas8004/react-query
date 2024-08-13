import { useQuery, useQueryClient } from "react-query";

const useGetSinglEmployee = (eid) => {
    const queryClient = useQueryClient();

    return useQuery(['employee-name', eid], async () => {
        const res = await fetch(`http://localhost:3000/employee/${eid}`);
        const data = await res.json();
        return data
    }, 
    {
        initialData: () => {
            const employees = queryClient.getQueryData('employee-names')?.filter(employee => employee.student_id === eid)
            console.log(employees);
            if (employees) {
                return employees
            }
            else {
                return undefined
            }

        }
    })
}
export { useGetSinglEmployee };