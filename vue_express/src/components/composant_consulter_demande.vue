<template>
  <div>
    <h2>Demande de crédit</h2>
    <p>Nom du client : {{ nom_client }}</p>
    <p>Montant du crédit : {{ montant }}</p>
    <p>Taux du crédit : {{ taux }}</p>
    <p>État de la demande : {{ etatDemande }}</p>
    <p v-if="etatDemande === 'Accepté'">Banque répondant à la demande : {{ nom_banque }}</p>
  </div>
</template>

<script>
export default {
    propriete: {
        nom_client: {
            type: String,
            required: true
        },
        montant: {
            type: Number,
            required: true
        },
        taux: {
            type: Number,
            required: true
        },
        etatDemande: {
            type: String,
            required: true
        },
        nom_banque: {
            type: String,
            default: ''
        }
    }
};
</script>