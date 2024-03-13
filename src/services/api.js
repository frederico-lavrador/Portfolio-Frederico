import axios from 'axios'

const api = axios.create();

export async function getData(fileName) {

    try {
        
    const response = await api.get(`/public/data/${fileName}.json`);

        return response.data;
        
    } catch (error) {
        
        console.log('Error: ', error);

    }
}