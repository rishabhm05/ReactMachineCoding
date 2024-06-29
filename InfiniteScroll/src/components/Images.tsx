import  { useEffect, useState } from 'react'
import InfiniteScroll from './InfiniteScroll';
interface images{
    download_url :string
    id:string
}
const ImageComponent = <T extends images>() => {
const[data,setData] = useState<T[]>([]);
const [page,setPage] = useState<number>(1);
useEffect(()=>{
    fetchimages()
},[page])
async function fetchimages(){
    let url = `https://picsum.photos/v2/list?page=${page}&limit=10`;
    let res = await fetch(url);
    let data:T[] = await res.json();
    setData((prevdata)=>[...prevdata,...data]);
}
async function next(){
  setPage((prevpage)=>prevpage+1)
}
return (
    <InfiniteScroll next={next} loader={<h1 className='container '>Loading...</h1>}>
       <div className='container'>
        {data.map((item)=>{
        return <img loading='lazy' key={item.id} className='img-post' width={200} height={200} src={item.download_url}  />
        })}
        </div>

    </InfiniteScroll> 

  )
}

export default ImageComponent;