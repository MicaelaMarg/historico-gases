<script setup lang="ts">
import { onMounted } from 'vue';
import HistoricoGasesMedicinales from './components/HistoricoGasesMedicinales.vue';
import useHistoricoGases from '@/composables/useHistoricoGases'



const { gasesHistorico, loading, getHistoricoGases } = useHistoricoGases();

onMounted(async () => {
    await getHistoricoGases();
});
</script>

<template>




    <p v-if="loading">Cargando </p>
    <HistoricoGasesMedicinales v-else-if="gasesHistorico.length" :gases="gasesHistorico" />

</template>

<style scoped></style>
