const getJokes = async ()=>{
    let p = fetch("https://hindi-jokes-api.onrender.com/jokes/3?api_key=7f7590a428de01e751c4439b796e")
    let response = await p;
    let result = await response.json();
    return result
}

let setJokes = async ()=>{
    let jokes = await getJokes();
    // jokes.data[i].jokeContent
    for(joke of jokes.data){
        let div = document.createElement("div")
        div.className = "joke-container"
        div.innerHTML = joke.jokeContent
        let element = document.getElementsByClassName("box")[0]
        element.appendChild(div)
    }
    
}

setJokes()