<template>
    <div>
      <h1>Page de vue</h1>
      <div v-for="offre in offres" :key="offre.id">
        <offre-rachat
          :montant="offre.montant"
          :banque="offre.nom_banque"
          :taux="offre.taux"
        ></offre-rachat>
      </div>
    </div>
  </template>
  
  <script>
  import OffreRachat from './components/OffreRachat.vue';
  
  export default {
    head() {
        return {
        title: 'Titre de ma page',
        }
    },
    components: {
      OffreRachat
    },
    data() {
      return {
        offres: [] // Liste pour stocker les offres de rachat récupérées de la base de données
      };
    },
    mounted() {
      // Effectuez une requête vers votre serveur Express.js pour récupérer les offres de rachat depuis la base de données
      // Mettez à jour la liste 'offres' avec les données récupérées
      // Par exemple :
      this.offres = [
        { id: 1, montant: 100000, nom_banque: 'Banque A', taux: 2.5 },
        { id: 2, montant: 150000, nom_banque: 'Banque B', taux: 2.8 },
        { id: 3, montant: 200000, nom_banque: 'Banque C', taux: 3.0 }
      ];
    }
  };
  </script>