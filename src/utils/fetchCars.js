export const fetchCars = async() => {
    let url = 'http://127.0.0.1:5000/api/cars'
        const response = await fetch(url);
        if (response.ok){
            const responseJson = await response.json()
            return responseJson
        }
    }
