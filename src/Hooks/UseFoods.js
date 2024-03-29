import { useEffect, useState } from "react";


const useFoods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_PATH}/foods`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return [foods, setFoods]
};

export default useFoods;