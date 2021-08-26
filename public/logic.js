
async function collectSaved(){
    const textToDisplay = await makeRequest("http://localhost:3000/api", "GET")
    const header = document.getElementsByTagName("h1")[0]
    header.innerText = textToDisplay
    console.log("collectSaved ", textToDisplay)
}
async function saveInput(){
    const inputFirstName = document.getElementById("inputFirstName").value;
    const inputLastName = document.getElementById("inputLastName").value;
    const status = await makeRequest("http://localhost:3000/users", "POST", {firstName: inputFirstName, lastName:inputLastName})
    console.log(inputFirstName,inputLastName,  status)
    
}
async function deleteUser(){
    const inputId = document.getElementById("inputId").value;
    const status = await makeRequest(`http://localhost:3000/users/${inputId}`, "DELETE")
    console.log(status)
    
}
async function changeUser(){
    const inputFirstName = document.getElementById("inputFirstName").value;
    const inputLastName = document.getElementById("inputLastName").value;
    const inputId = document.getElementById("inputId").value;
    const status = await makeRequest(`http://localhost:3000/users/${inputId}`, "PATCH", {firstName: inputFirstName, lastName:inputLastName})
    console.log(inputFirstName,inputLastName,  status)
    
}

async function makeRequest(url, method, body){
    try {
        const response = await fetch(url, {
        headers: {"Content-type": "application/json"},
        method,
        body: JSON.stringify(body)
    })
    const result = await response.json()
    return result
    } catch(err){
        console.error("err")
    }
}

