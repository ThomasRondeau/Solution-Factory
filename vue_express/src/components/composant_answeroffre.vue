<template>
<div>
    <h2>Offre de rachat</h2>
    <p>Montant de l'offre : {{ montant }}</p>
    <p>Banque proposant l'offre : {{ banque }}</p>
    <p>Taux du crédit : {{ taux }}</p>
</div>
</template>

<script>
export default {
    propriete: {
        montant: {
            type: Number,
            required: true
        },
        nom_banque: {
            type: String,
            required: true
        },
        taux: {
            type: Number,
            required: true
        }
    }
};
</script>