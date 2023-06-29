<template>
    <navbar></navbar>
    <div class="flex flex-row">

            <!--image-->
            <div class="w-1/5 ">
                <img class="rounded-lg w-full h-full ml-20 mt-20" src="../../images/imag-credit.jpg">
            </div>

            <!--description-->
            <div class="ml-28 w-3/5 mt-20 items-center">
                <h2 class="font-serif text-2xl ml-40 mt-16 text-white">Quel service proposons-nous ?</h2>
                <h2 class="font-serif text-2xl ml-40 mt-16 text-white">Comment démarcher ?</h2>
                <h2 class="font-serif text-2xl ml-40 mt-16 text-white">Qui sommes-nous ?</h2>
            </div>

            <!--image-->
            <div class="w-1/5 mr-20">
                <img class="rounded-lg w-full h-full mt-20" src="../../images/imag-credit.jpg">
            </div>

        </div>
</template>

<script>
import navbar from '../components/navbar.vue';
    export default {
        components: {
            navbar
        }
    }
</script>