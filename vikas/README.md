<!--! Query cache -->
->every query is cached for five minutes and every subsequent request relies on this query cached result.
->isLoading flag remains false for the subsequent results as it query is cached.
<!--! stale -->
->default stale time is 0s and considered to best approach too.
->it controls the no. of fetch too according to the time developer has passed
->if the flag is fresh then it would not be refetched when the tab is changed until the flag is set to the stale
<!--! refetchOnMount -->
->this is the default behaviour means whenever the components mounts it would be refetched if it is true. possible values are true false and 'always' which will always refetch. 
->the best option is true.
<!-- ! refetchOnWindowFocus -->
->be default it's true and is perfect but can be set to false too and 'always' is also possible.
<!--! refetchInerval (polling) -->
->to refetch the data in the background only if the window is foucused.
->to keep refetch in background u have to make refetchIntervalInBackground:true
<!-- !enabled  -->
->this configuration tells the react whether to call the api or not and whenever you manually reftech it will be enabled for that interval of time.
<!-- ! onSuccess(data,variables,context) and onError callback(error,variables,context) -->
->this is passed as an object as key value pair in configuration like useQuery('queryKey',fn,{...configurations,onSuccess,onError})
->invocation of these callback depends upon the successfull or unsuccesfull of query.
->any side effect which developer want to perform can perform here.
<!-- !select (for data transformation) -->
->this is a function use to transform the data according to the need.
->it receives the query result by default and returns the transformed data

<!-- !parallel queries  -->
->if there is multiple useQuery in the same component the the data and other destructured properties from the useQuery is identified by giving the appropriate aliases to these in the different useQueries.
<!-- !dynamic parallel queries -->
->dynamic parallel queries is achieved through useQueries() hook.
->this is useful if we have an array of itmes and have to fetch the data on the itmes which are in the array accordingly.
->syntax arr.map(ele=>{
    return {
        queryKey:['friends',ele],
        queryFn:()=>{
            ....
        }
    }
})

<!-- !dependent queries (one after the other) -->

<!-- !initial query data -->
->this is used in the case where the data is already present and is going to be used in the next navigated component.
->making the new request for the same data is no more benefial from anywhere.
->for this we have to use useQueryClient hook which have all the access like cached result etc.
->this is passed in the initialData configuration which accepts a function return the intital data or the intial data directly.
->if cache data is present then this is used otherwise the data which is being used is fetched. (cached is more prioritized)
 syntax:initialData: () => {
            const employees = queryClient.getQueryData('employee-names')?.filter(employee => employee.student_id === eid)
            console.log(employees);
            if (employees) {
                return employees
            }
            else {
                return undefined
            }

        }

        <!-- !useMutation (for mutating the data on the server like making post,put , patch and delete request.) -->

        <!-- Query invalidation is used to invalidate the query so that a background refetch is made. -->