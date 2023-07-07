// navbar

const template1 = document.createElement("template");
template1.innerHTML += `
<link rel="stylesheet" href="output.css">
<div class="bg-white">
        <div id="bandeau" class="flex items-center" >

                <div>
                    <img class="ml-10" src="logo.png" alt="logo">
                </div>
                
                <div class="flex-1 text-end mr-4">
                    <a href="/accueil" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">Accueil</a>
                    <a href="/a_propos" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">A propos</a>
                    <a href="/register" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">S'inscrire</a>
                    <a href="/login" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">Se connecter</a>
                    <a href="/create_credit" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">Demande de credit</a>
                    <a href="/consulter_demande" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">Consulter vos demandes</a>
                </div>
        </div>
</div>
`;

class NavBar extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  
  render() {
    this.shadowRoot.appendChild(template1.content.cloneNode(true));
  }
}

customElements.define("nav-bar", NavBar);

// answer offre

const template2 = document.createElement("template");
template2.innerHTML += `
<link rel="stylesheet" href="output.css">
<div>
    <h2>Contrat <slot name="id-contrat" class = "inline">Non renseigné</slot></h2>
    <p>Montant à emprunter : <slot name="montant-offre" class = "inline">Non renseigné</slot></p>
    <p>Nombre d'années :  <slot name="nombre-annees" style = "display: inline">Non renseigné</slot></p>
</div>
`;

class AnswerOffre extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  
  render() {
    this.shadowRoot.appendChild(template2.content.cloneNode(true));
  }
}

customElements.define("answer-offre", AnswerOffre);

// consulter demande

const template3 = document.createElement("template");
template3.innerHTML += `
<link rel="stylesheet" href="output.css">
<div>
    <h2><p>Banque proposant l'offre : <slot name="nom-banque">Non renseigné</slot></p></h2>
    <p>Nom du client : <slot name="nom-client"></slot></p>
    <p>Montant du crédit : <slot name="montant-offre">Non renseigné</slot></p>
    <p>Taux du crédit : <slot name="taux-credit">Non renseigné</slot></p>
    <p>État de la demande : <slot name="etat-reponse"> En étude</slot></p>
  </div>
`;

class ConsulterOffre extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  
  render() {
    this.shadowRoot.appendChild(template3.content.cloneNode(true));
  }
}

customElements.define("consulter-offre", ConsulterOffre);

