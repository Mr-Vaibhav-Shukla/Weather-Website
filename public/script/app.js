console.log("Clint side script")
// url = "http://localhost:3000/weather?address=Pune"

document.querySelector("form").addEventListener("submit",(evt) =>{
    evt.preventDefault()
    document.querySelector('h5').innerHTML = "Loading..."
    url = "http://localhost:3000/weather?address=" + document.querySelector("input").value
    fetch(url).then((response) => {
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
                document.querySelector('h5').innerHTML = data.error
            }
            else{
                console.log(data)
                document.querySelector('h5').innerHTML =   data.location + "<br>" + data.forecast
            }
            document.querySelector("input").value = ""
    
        })
    })
})