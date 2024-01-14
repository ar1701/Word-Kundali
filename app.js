let input = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function getInfo(word) {
    try {
        let info = (await fetch(url + word)).json();
        console.log(info);
    }
    catch(err){
        console.log("Error: ", err);
    }

}