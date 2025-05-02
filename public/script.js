console.log("testing");


// fetch("http://localhost:8000")
//     .then(response => {
//         if (!response.ok)
//             return "Connection Failed";
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("There was a problem with the fetch operation: ", error);
//     });


// fetch("http://localhost:8000/getFENs")
//     .then(response => {
//         if (!response.ok)
//             return "Connection Failed";
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("There was a problem with the fetch operation: ", error);
//     });


fetch("http://localhost:8000/practiceJSON")
    .then(response => {
        if (!response.ok)
            throw new Error("Connection Failed");
        return response.json();
    })
    .then(data => {
        for (const key in data) {
            console.log(`For key: ${key} the value is: ${data[key]}`);
        }
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation: ", error);
    });