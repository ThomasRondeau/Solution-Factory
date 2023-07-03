import "../css/output.css";

// navbar

const template1 = document.createElement("template");
template1.innerHTML += `
<div class="bandeau">
            <div id="bandeau" class="flex items-center" >

                <div>
                    <img class="ml-10" src="../../images/logo.png" alt="logo">
                </div>
                
                <div class="flex-1 text-end mr-4">
                    <a href="index.html" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">Accueil</a>
                    <a href="a_propos.html" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">A propos</a>
                    <a href="register.html" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">S'inscrire</a>
                    <a href="login.html" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">Se connecter</a>
                    <a href="create_credit.html" class="text-blue-950 px-5 hover:bg-slate-700 hover:text-white">Demande de credit</a>
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
<div>
    <h2>Offre de rachat</h2>
    <p>Montant de l'offre : <slot name="montant-offre">Non renseigné</slot></p>
    <p>Banque proposant l'offre : <slot name="nom-banque">Non renseigné</slot></p>
    <p>Taux du crédit : <slot name="taux-credit">Non renseigné</slot></p>
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
<div>
    <h2>Demande de crédit</h2>
    <p>Nom du client : {{ nom_client }}</p>
    <p>Montant du crédit : {{ montant }}</p>
    <p>Taux du crédit : {{ taux }}</p>
    <p>État de la demande : {{ etatDemande }}</p>
    <p v-if="etatDemande === 'Accepté'">Banque répondant à la demande : {{ nom_banque }}</p>
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

