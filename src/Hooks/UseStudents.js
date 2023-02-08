import { useEffect, useState } from "react";


const useStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_PATH}/students`)
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    return [students, setStudents]
};

export default useStudents;