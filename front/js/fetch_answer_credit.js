fetch('/get_alltrans', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    result.forEach(item => {
        var titre2 = document.createElement('h2');
        titre2.textContent = 'Contrat ' + item.id_contrat;
        var montant = document.createElement("p");
        montant.textContent = 'montant à emprunter : ' + item.montant;
        var duree = document.createElement("p");
        duree.textContent = 'Nombre d\'années : ' + item.duree;
        var bloc_insertion = document.getElementById("insertion");
        bloc_insertion.appendChild(titre2);
        bloc_insertion.appendChild(montant);
        bloc_insertion.appendChild(duree);
      });
  })