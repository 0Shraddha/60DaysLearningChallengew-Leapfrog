
//Concept of Callbacks, Aysnchronous, Promises, Async/Await
/*Both do the same thing — handle a Promise.
    - Use .then() for quick operations.
    - Use async/await for cleaner, readable code in more complex flows.
*/

// fetching user data
function fetchUserData(success){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(success){
                resolve({name: 'Shraddha', faculty: 'BCA'});
            }else{
                reject("Failed to fetch data !");
            }
        }, 1000);
    })
}

async function fetchUserDataWAsyncAwait(){
    try{
        const getData = await fetchUserData(true);
        console.log("Using Async and Await : ",getData);
    }catch(error){
        console.error(error);
    }
}

fetchUserDataWAsyncAwait();

    //test with success = true
    fetchUserData(true)
        .then((user) => {
            console.log("Data fetched : ", user);
        })
        .catch((err) => {
            console.log("Error : " , err);
        })

    //test with success = false
    fetchUserData(false)
        .then((user) => {
            console.log("Data fetched : ", user);
        })
        .catch((err) => {
            console.log("Error : " , err);
        })

//Example with API

fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if(!response.ok) throw new Error("Error during fetching users data!");
            return response.json(); //this returns another promise
        })
        .then((data)=>{
            // for(let key in data){
            //     console.log(`${key} : ${data[key]}`);
            // }

            // Object.entries(data).forEach(([key, value]) => {
            //     console.log(`${key} : ${value}`);
            // })

            console.log(JSON.stringify(data, null, 2));
        })
        .catch((error) => {
            console.error("Fetching failed:", error);
        });