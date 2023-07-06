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

      var form = document.createElement("form");
      form.setAttribute("id", "form");
      form.setAttribute("method", "POST");
      form.setAttribute("action", "/answer_credit");

      var idclientInput = document.createElement("input");
      idclientInput.setAttribute("type", "hidden");
      idclientInput.setAttribute("name", "id_client");
      idclientInput.setAttribute('value', item.id_client);
      form.appendChild(idclientInput);

      var idcontratInput = document.createElement("input");
      idcontratInput.setAttribute("type", "hidden");
      idcontratInput.setAttribute("name", "id_contrat");
      idcontratInput.setAttribute('value', item.id_contrat);
      form.appendChild(idcontratInput);

      var tauxInput = document.createElement("input");
      tauxInput.setAttribute("type", "number");
      tauxInput.setAttribute("name", "taux");
      tauxInput.setAttribute("placeholder", "Entrez le taux");
      form.appendChild(tauxInput);

      var submit = document.createElement("input");
      submit.setAttribute("type", "submit");
      submit.setAttribute("name", "taux");
      submit.setAttribute("placeholder", "Accepter le contrat");
      form.appendChild(submit);

      var bloc = document.createElement('div')
      bloc.setAttribute('class', 'bg-slate-300 rounded-lg shadow-lg p-4 mb-6')
      var titre2 = document.createElement('h2');
      titre2.textContent = 'Contrat ' + item.id_contrat;
      var montant = document.createElement("p");
      montant.textContent = 'montant à emprunter : ' + item.montant;
      var duree = document.createElement("p");
      duree.textContent = 'Nombre d\'années : ' + item.duree;
      var bloc_insertion = document.getElementById("insertion");
      bloc.appendChild(titre2);
      bloc.appendChild(montant);
      bloc.appendChild(duree);
      bloc.appendChild(form);
      bloc_insertion.appendChild(bloc);
        
      });
  })