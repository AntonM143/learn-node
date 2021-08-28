
async function collectSaved(){
    const response = await makeRequest("http://localhost:3000/api", "GET")
    const table = document.getElementById("theTable")
    const th = document.createElement("th")
    table.innerHTML = " "

    
    response.forEach(item => {
        
       const trFirstName = document.createElement("td")
       const trLastName = document.createElement("td")
       const tr = document.createElement("tr")
   
       const trId = document.createElement("td")
       trFirstName.innerHTML = item.firstName
       trLastName.innerHTML = item.lastName
       trId.innerHTML = item.id
      
      
          console.log(item.firstName)
          console.log(item.lastName)
          table.appendChild(tr)
          tr.appendChild(trFirstName)
          tr.appendChild(trLastName)
          tr.appendChild(trId)
           
          
       });
   
       

   
   
    
    
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
 async function funInfo (){
    const h1 = document.getElementById("h1")
    
    fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => {
      console.log(data.slip.advice)
     h1.innerHTML = data.slip.advice});
  
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
/* async function makeRequest(url, method, body){
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
} */

