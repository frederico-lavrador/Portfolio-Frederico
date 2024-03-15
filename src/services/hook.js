import { useEffect, useState } from 'react'

export function globalFetch(globalFetchFunc) {

    const [data, setData] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
       
        const fetchData = async () => {

            try {

                const result = await globalFetchFunc();

                console.log('Result: ', result);

                setData(result);

            } catch (error) {
                
                console.log('Error: ', error);

            } finally {

                setloading(false);

            }
        
        }

        fetchData();

    }, [globalFetchFunc]);

    return { data, loading };

}