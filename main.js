// fetch("https://restcountries.com/v3.1/region/europe")
//   .then((res) => res.json())
//   .then((resp2) => console.log(resp2));

async function render() {
  let reponse = await fetch("https://restcountries.com/v3.1/region/europe");
  let recup = await reponse.json();
  let affich = "";
  for (let i in recup) {
    affich += `<li>${recup[i].name.official}</li>`;

    document.getElementById("pays").innerHTML = affich;
  }
}
render();
