import genres from "../data/genres"

// using the const object with const values of genras instead to load  each render the genres from the server 
export interface Genre {
    id: number;
    name: string;
    image_background:string
  
  }
  


export default () => ({data: genres , isLoading:false , error:null})