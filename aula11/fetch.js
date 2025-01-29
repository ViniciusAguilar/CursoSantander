// const response = fetch('http://localhost:3000').then(response => response.text().then(data =>
//     console.log(data)))

    async function makeRequest(){
        const response = fetch('http://localhost:3000') 
        const data = (await response).text()

        console.log(data)
    }

    makeRequest()