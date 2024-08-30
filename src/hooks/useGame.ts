import { GameQuery } from '../App';
import useData from './useData';





export interface Platform {
  id:number ,
  name:string ,
  slug:string
}


export interface Games {
    id: number;
    name: string;
    background_image:string,
    parent_platforms:{platform:Platform}[] // thats way for working of neasted object in array parent_platform : [{paltform:{id,name,slug}}]
    metacritic:number ,
    rating_top:number
  }
  


export default (gameQuery:GameQuery)=>useData<Games>("/games" , {params : {genres:gameQuery.genre?.id , platforms: gameQuery.platform?.id , ordering:gameQuery.sortOrder , search:gameQuery.searchText}} , [gameQuery]) //Params is the Axios object request query  throw the requestConfig : AxiosRequestConfig
   // the Params query object that  send to server  with get methos  must equallevent the same  key on server  like genres , platforms    ordering , search  otherwise server will not response if dosnt match .
