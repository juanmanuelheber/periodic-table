import axios from "axios"
import { useEffect, useState } from "react"
import { ALL_ELEMENTS } from "../utils/const"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        if (url===ALL_ELEMENTS && localStorage.getItem('completeTable')) {
                setData(JSON.parse(localStorage.getItem('completeTable')))
                setLoading(false)
                return
        }
        
        axios.get(url)
            .then(resp=>{
                setData(resp.data)
                if (url===ALL_ELEMENTS) localStorage.setItem('completeTable',JSON.stringify(resp.data))
            })
            .catch(err=>setError(err))
            .finally(()=>setLoading(false))
        
    }, [url])

    return {
        data, loading, error
    }
}

