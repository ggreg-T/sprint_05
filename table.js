// async function render() {
//   let reponse = await fetch("https://restcountries.com/v3.1/region/europe");
//   let recup = await reponse.json();
//   let affich = "";
//   for (let i in recup) {
//     affich += `<tr><td class="fw-bold">${recup[i].name.official}</td> <td class="text-end">${recup[i].area}</td><td class="text-end">${recup[i].population}</td><td>${recup[i].capital}</td></tr>`;
//     // console.log(i);
//     document.getElementById("tabb").innerHTML = affich;
//   }
// }
// render();

// let bbout = document.getElementsByClassName("bout")
//   .innerHTML`<button class="raf">Relancer</button>`;
async function render() {
  // let recup;
  // let demande;
  demande = await fetch("https://restcountries.com/v3.1/region/europe");
  try {
    if (demande.ok) {
      recup = await demande.json();
      console.log("tout est bon");
      let affich = "";
      for (let i in recup) {
        affich += `<tr><td class="fw-bold">${recup[i].name.official}</td> <td class="text-end">${recup[i].area}</td><td class="text-end">${recup[i].population}</td><td>${recup[i].capital}</td></tr>`;
        // console.log(i);
        document.getElementById("tabb").innerHTML = affich;
      }
    }
  } catch (e) {
    console.error(e);
    console.log("dans le catch");
  }
}
render();
