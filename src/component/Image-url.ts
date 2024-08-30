import noImage from "../assets/no-image-placeholder-6f3882e0.webp"


// thats component for optimaize the   image size if the server support the crop ... 

const getcroppepImageUl = (url:string) =>{
    // thats if condition is temperoly cuase some of the sorting havnt image  so  render noImage  as default . 
    if(!url) return noImage
const target = "media/"
const index = url.indexOf(target) + target.length
return url.slice(0,index)+"crop/600/400/" +url.slice(index)


}


export default getcroppepImageUl