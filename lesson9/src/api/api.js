import axios from 'axios';

const addTask = async (task) => {
    try {
        const response = await axios.post(`https://test-ed21b.firebaseio.com/tasks.json`, task);
        return response.data.name
    } catch (error) {
        throw new Error(error)
    }

}

const getTasks = async () => {
    try {
        const response = await axios.get(`https://test-ed21b.firebaseio.com/tasks.json`);
        const convertedData = Object.keys(response.data).reduce((acc, key) => {
            acc.push({ id: key, ...response.data[key] })
            return acc
        }, [])
        return convertedData

    } catch (error) {
        throw new Error(error)
    }
}

export { addTask, getTasks }