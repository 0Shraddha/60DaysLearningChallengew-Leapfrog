//Aysnc-Await GET requests:
const getData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {'cache' : 'no-cache'})
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonResponse = await response.json();
        console.log(jsonResponse.slice(0,2));


    }catch(error){
        console.log("Fetch error : " + error);
    }
}

//Aysnc-Await POST requests:
const postData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: JSON.stringify({ username: "Shraddha" }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
        });

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonResponse = await response.json();
        console.log(jsonResponse);


    }catch(error){
        console.log("Fetch error from POST : " + error);
    }
}

getData();
postData();