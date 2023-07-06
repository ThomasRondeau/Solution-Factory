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
        /*
        var bloc = document.createElement('answer-offre');

        const contenu1 = document.createElement('p');
        contenu1.setAttribute('slot', 'id-contrat');
        contenu1.textContent = item.id_contrat;
        bloc.appendChild(contenu1);

        const contenu2 = document.createElement('p');
        contenu2.setAttribute('slot', 'montant-offre');
        contenu2.textContent = item.montant;
        bloc.appendChild(contenu2);

        const contenu3 = document.createElement('p');
        contenu3.setAttribute('slot', 'nombre-annees');
        contenu3.textContent = item.duree;
        bloc.appendChild(contenu3);


        var bloc_insertion = document.getElementById("insertion");
        bloc_insertion.appendChild(bloc);
        */


        var bloc = document.createElement('div')
        bloc.setAttribute('class', 'bg-slate-300 rounded-lg shadow-lg p-4')
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
        bloc_insertion.appendChild(bloc);
        
      });
  })