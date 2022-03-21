import { useEffect,useState } from "react";


const useFetch =(url)=>{
    const [data,setData] = /*when run it render the site*/useState(null);
    //     [
    //     {title: 'Hello there', body:'ninjaaaa', author:'ninja', id:1},
    //     {title: 'Hello papi', body:'ninjaaaa', author:'naa', id:2},
    //     {title: 'Hello hell', body:'ninjaaaa', author:'ninja', id:3}
    // ]
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
    
    useEffect(()=>{
        const abortCont =  new AbortController();


        setTimeout(() => {
            fetch(url ,{signal:abortCont.signal})
        .then(res=>{
            if (!res.ok) {
                throw Error("u got no connection");
            }
            return res.json();
        })
        .then((data)=>{
            
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(err=>{
            if(err.name === "AbortError"){
                console.log('fetchaborted');
            }else{
                setIsPending(false);
                setError(err.message); 
            }
            
        })
        }, 1000);
        return ()=> abortCont.abort();
        
    },[]);

    return{ data, isPending, error };
}

export default useFetch;