import { useEffect, useRef } from "react"

interface scrollprops{
    children:React.ReactNode,
    loader:React.ReactNode,
    next :()=>void
}
const InfiniteScroll =({children ,loader,next}:scrollprops) => {
const ref = useRef<null|HTMLDivElement>(null);
useEffect(()=>{
    const handleIntersect =(entries:IntersectionObserverEntry[])=>{
         if(entries[0].isIntersecting){
            next()  
         }
    }
    const Observer = new IntersectionObserver(handleIntersect,{
        threshold:0.5
    })
    
    if(ref.current){
    Observer.observe(ref.current)
    }
    return ()=>{
    if(ref.current){
     Observer.unobserve(ref.current);
    }
     Observer.disconnect();
    }
},[])

  return (
    <>
    {children}
    <div ref={ref} className="loader">
    {loader}
    </div>
  </>
  )
}

export default InfiniteScroll