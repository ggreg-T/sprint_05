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
async function render() {
  let demande = await fetch("https://restcountries.com/v3.1/region/europe");
  try {
    if (demande.ok) {
      let recup = await demande.json();
      console.log("tout est bon");
      // let bout = '<button  class="raf">refresh</button>';
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

    let buton = document.createElement("button");
    let raffr = document.createTextNode("Raffraichir");
    buton.appendChild(raffr);
    document.getElementById("bout").textContent = "";
    document.getElementById("bout").appendChild(buton);
    buton.addEventListener("click", function () {
      render();
    });
    // let bout = '<button  class="raf">refresh</button>';
    console.log("erreur");
  }
}
render();
