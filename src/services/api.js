import axios from 'axios'

const api = axios.create();

export async function getData(url) {

    const response = await api.get(`../public/data/${url}.json`);

    return response.data;
}