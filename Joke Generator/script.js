const btn1 = document.getElementById("btn");
const joke1 = document.getElementById("joke");
const apiKey = "a94Rd9TGflMK4srujbdzBg==S5JSI1h6PP15Oo0U";
const options = {
    method: "GET",
    headers: {
        "X-Api-key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    try{
    joke1.innerHTML = "Updating...";
    btn1.disabled = true;
    btn1.innerText = "loading...";
    const reponse = await fetch(apiURL, options)
    const data =await reponse.json()

    btn1.disabled = false;
    btn1.innerText = "Tell me a joke";

    joke1.innerHTML = data[0].joke;
    }
    catch(error){
        joke1.innerHTML = "An error happened, try again later.";
        console.log("Error");
    }
}

btn1.addEventListener("click", getJoke);