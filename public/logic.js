async function collectClick(){
    const textToDisplay = await makeRequest("http://localhost:3000/api", "GET")
    const header = document.getElementsByTagName("h1")[0]
    header.innerText = textToDisplay
    console.log("collectClick ", textToDisplay)
}
async function saveNew(){
    const status = await makeRequest("http://localhost:3000/api", "POST", {brand: "audi", model: "A3", price: "670"})
    console.log("saveNew", status)
    
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