const btn=document.getElementById('btn')
const jokeElement=document.getElementById('joke')
const reset=document.getElementById('reset')
//API Ninja used for random joke. This is my account API key
const apiKey='KoJ/aZfH1ddTr7S5nvexpg==WLVg1YAirllGQuLD'
const options={
    method:"GET",
    headers:{
        "X-Api-key":apiKey
    },
};
//API Ninja live url 
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke(){

    try {
        jokeElement.innerText = "Updating..."
        btn.disabled = true
        btn.innerText = "Loading..."
        //await used for shoeing waiting or loading
        //for loading from website
        const response = await fetch(apiURL, options)
        //convert string to json file
        const data = await response.json()
        btn.disabled = false
        btn.innerText = "tell me a joke"
        jokeElement.innerText = data[0].joke
    } catch (error) {
        jokeElement.innerText="An error happended, try agian laer!!!!"
        btn.disabled=false
        btn.innerText="tell me a joke"

    }
    
}

btn.addEventListener('click',getJoke)
reset.addEventListener('click',function(){
    jokeElement.innerText='Dad Joke'
})
