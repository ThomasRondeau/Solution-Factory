// navbar

const template = document.createElement("template");
template.innerHTML += `
<div class="bandeau">
<div id="bandeau" class="flex items-center" >

    <div>
        <img class="ml-10" src="../../images/logo.png" alt="logo">
    </div>
    
    <div id="redirection" class="flex-1 text-end mr-4">
        <a href="index.html" class="text-white px-5 hover:bg-slate-700 ">Accueil</a>
        <a href="register.html" class="text-white px-5 hover:bg-slate-700 ">S'inscrire</a>
        <a href="login.html" class="text-white px-5 hover:bg-slate-700 ">Se connecter</a>
        <a href="create_credit.html" class="text-white px-5 hover:bg-slate-700 ">Demande de credit</a>
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
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("nav-bar", NavBar);

// answer offre


template.innerHTML += `
<div>
    <h2>Offre de rachat</h2>
    <p>Montant de l'offre : {{ montant }}</p>
    <p>Banque proposant l'offre : {{ banque }}</p>
    <p>Taux du crédit : {{ taux }}</p>
</div>
`;

class AnswerOffre extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  
  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("nav-bar", NavBar);

// consulter demande


template.innerHTML += `
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
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("nav-bar", NavBar);

