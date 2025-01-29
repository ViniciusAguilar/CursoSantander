<<<<<<< HEAD
// const response = fetch('http://localhost:3000').then(response => response.text().then(data =>
//     console.log(data)))

    async function makeRequest(){
        const response = fetch('http://localhost:3000') 
        const data = (await response).text()

        console.log(data)
    }

=======
// const response = fetch('http://localhost:3000').then(response => response.text().then(data =>
//     console.log(data)))

    async function makeRequest(){
        const response = fetch('http://localhost:3000') 
        const data = (await response).text()

        console.log(data)
    }

>>>>>>> f43de4f920a76d0c1c7021834e7989383592b387
    makeRequest()