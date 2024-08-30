import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';


  
  interface fetchResponse<T> {
    count: number;
    results: T[];
  }

export default function useData<T>(endpoint:string , requestConfig?:AxiosRequestConfig , deps?: unknown []) {/* here we set ? cause the last arg have optional ?  */
    const [data, setGenres] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setIsLoading] = useState(false)
  
    useEffect(() => {
      const controller = new  AbortController()
      setIsLoading(true)
        apiClient
          .get<fetchResponse<T>>(endpoint , {signal:controller.signal , ...requestConfig}) // the second parameter of get req  get obj can have two arg => second arg isconfig parameter
          .then((res) =>{
            setGenres(res.data.results)
            setIsLoading(false)
          } 
        )
          .catch((err) => {
            if(err instanceof CanceledError) return
            setError(err.message)
            setIsLoading(false)
          }
          )
          
          return ()=>controller.abort()
          }
      , deps ? [...deps] : []); // here we pass the dependence that passed as argument to get it from useGames hook as third arg 

  return { data , error , isLoading}
}
