import axios from 'axios';

const getChartData = () => {
    return axios.get('http://localhost:3001/chartdata')
        .then((res) => {
            return res.data
        })
}

export default getChartData;