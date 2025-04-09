let btn = document.querySelector("#bt").addEventListener("click", () => {
  fetch("/mostrar", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      let tabelaBody = document.querySelector("#tabela-body");

      tabelaBody.innerHTML = "";

      data.forEach((animal) => {
        let row = `
          <tr>
            <td>${animal.nome}</td>
            <td>${animal.tipo}</td>
            <td>${animal.raca}</td>
            <td>${animal.nascimento}</td>
          </tr>
        `;
        tabelaBody.innerHTML += row;
      });
    })
    .catch((err) => {
      console.error(err.message);
    });
});
