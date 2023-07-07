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
    var bloc_insertion = document.getElementById("bloc_info_credit");
    var titre_partie = document.createElement('h1')
    titre_partie.setAttribute("class", "text-center text-2xl my-5")
    titre_partie.textContent = "Vos demandes"
    bloc_insertion.appendChild(titre_partie)
    result.forEach(item => {
        var bloc = document.createElement('div')
        bloc.setAttribute('class', 'bg-slate-300 rounded-lg shadow-lg p-4 mb-6')
        var titre = document.createElement('h2');
        titre.textContent = 'Votre demande ' + item.id_contrat;
        var montant = document.createElement("p");
        montant.textContent = 'Montant de la demande : ' + item.montant;
        var duree = document.createElement("p");
        duree.textContent = 'Durée souhaitée du prêt : ' + item.duree;
        bloc.appendChild(titre);
        bloc.appendChild(montant);
        bloc.appendChild(duree);
        bloc_insertion.appendChild(bloc);
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
    var bloc_insertion = document.getElementById("bloc_info_credit");
    var titre_partie = document.createElement('h1')
    titre_partie.setAttribute("class", "text-center text-2xl my-5")
    titre_partie.textContent = "Vos réponses"
    bloc_insertion.appendChild(titre_partie)
    result.forEach(item => {
        var bloc = document.createElement('div')
        bloc.setAttribute('class', 'bg-slate-300 rounded-lg shadow-lg p-4 mb-6')
        var titre2 = document.createElement('h2');
        titre2.textContent = 'Reponse de la banque ' + item.id_banque;
        var id_contrat = document.createElement("p");
        id_contrat.textContent = 'contrat concerné : ' + item.id_contrat;
        var taux = document.createElement("p");
        taux.textContent = 'Taux proposé : ' + item.taux;
        bloc.appendChild(titre2);
        bloc.appendChild(id_contrat);
        bloc.appendChild(taux);
        bloc_insertion.appendChild(bloc);
      });
  })