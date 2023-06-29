<template>
    <div>
      <h1>Page de vue</h1>
      <div v-for="demande in demandes" :key="demande.id">
        <demande-credit
          :nom_client="demande.nom_client"
          :montant="demande.montant"
          :taux="demande.taux"
          :etatDemande="demande.etatDemande"
          :nom_banque="demande.nom_banque"
        ></demande-credit>
      </div>
    </div>
  </template>
  
  <script>
  import DemandeCredit from './components/composant_consulter_demande.vue';
  
  export default {
    components: {
      DemandeCredit
    },
    data() {
      return {
        demandes: [] // Liste pour stocker les demandes de crédit récupérées de la base de données
      };
    },
    mounted() {
      // Effectuez une requête vers votre serveur Express.js pour récupérer les demandes de crédit depuis la base de données
      // Mettez à jour la liste 'demandes' avec les données récupérées
      // Par exemple :
      this.demandes = [
        { id: 1, nom_client: 'John Doe', montant: 100000, taux: 2.5, etatDemande: 'Accepté', nom_banque: 'Banque A' },
        { id: 2, nom_client: 'Jane Smith', montant: 150000, taux: 2.8, etatDemande: 'Refusé' },
        { id: 3, nom_client: 'Robert Johnson', montant: 200000, taux: 3.0, etatDemande: 'Accepté', nom_banque: 'Banque B' }
      ];
    }
  };
  </script>
  
  