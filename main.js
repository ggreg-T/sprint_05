// Adresse a utiliser : https://restcountries.com/v3.1/region/europe

// let jjson = JSON.parse(index.json);
// fetch("index.json").then((res) => console.log(res));
// .then((res) => res.json());
// console.log(res);
// .then((resp2) => console.log(resp2));

async function render() {
  let reponse = await fetch("https://restcountries.com/v3.1/region/europe");
  let recup = await reponse.json();
  let affich = "";
  for (let i in recup) {
    affich += `<li>${recup[i].name.official}</li>`;
    console.log(i);
    document.getElementById("pays").innerHTML = affich;
  }
}
render();
