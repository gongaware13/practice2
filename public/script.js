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


fetch("http://localhost:8000/getFENs")
    .then(response => {
        if (!response.ok)
            return "Connection Failed";
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation: ", error);
    });
