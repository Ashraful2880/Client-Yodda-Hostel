import { useEffect, useState } from "react";


const useStudents = () => {
    const [students, setStudents] = useState([]);
    
    useEffect(()=>{
        fetch('https://yodda-hostel.herokuapp.com/students')
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[])
    return [students, setStudents]
};

export default useStudents;