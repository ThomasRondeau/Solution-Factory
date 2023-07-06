console.log("le script se lance")
fetch('/get_transaction', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    console.log('Result : ', result);
    result.forEach(item => {
        var titre = document.createElement('h2');
        titre.textContent = 'Votre demande ' + item.id_contrat;
        var montant = document.createElement("p");
        montant.textContent = 'Montant de la demande : ' + item.montant;
        var duree = document.createElement("p");
        duree.textContent = 'Durée souhaitée du prêt : ' + item.duree;
        var bloc_insertion = document.getElementById("bloc_info_credit");
        bloc_insertion.appendChild(titre);
        bloc_insertion.appendChild(montant);
        bloc_insertion.appendChild(duree);
      });
  })
  
fetch('/get_answers', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    console.log('Result : ', result);
    result.forEach(item => {
        var titre2 = document.createElement('h2');
        titre2.textContent = 'Reponse de la banque ' + item.id_banque;
        var id_contrat = document.createElement("p");
        id_contrat.textContent = 'contrat concerné : ' + item.id_contrat;
        var taux = document.createElement("p");
        taux.textContent = 'Taux proposé : ' + item.taux;
        var bloc_insertion = document.getElementById("bloc_info_credit");
        bloc_insertion.appendChild(titre2);
        bloc_insertion.appendChild(id_contrat);
        bloc_insertion.appendChild(taux);
      });
  })