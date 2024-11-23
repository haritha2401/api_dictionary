async function fetchdata(){
    try{
        const input=document.getElementById('input').value.toLowerCase()
        const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
        if(!response.ok){
            throw new Error("Data not found")
        }
        const data= await response.json()
        document.getElementById('meaning').innerHTML=`Title:${data[0].word}<br><br>Meaning:${data[0].meanings[0].definitions[0].definition}<br><br>Example:${data[0]?.meanings[0]?.definitions[0]?.example||"not found"}`
        console.log(data)
    }
    catch(err){
        console.log(err)
        alert("Data not found")
    }
}


















