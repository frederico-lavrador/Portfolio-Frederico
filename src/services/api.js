import axios from 'axios'

const api = axios.create();

export async function getData() {

    try {
        console.log('Fetching data...');
        const response = await api.get(`/public/data/home.json`);
        console.log('Response: ', response.data);
        return response.data;
        
    } catch (error) {
        
        console.log('Error: ', error);

    }
}