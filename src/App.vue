<script setup lang="ts">
import HistoricoGasesMedicinales from './components/HistoricoGasesMedicinales.vue';
const { loading }

</script>

<template>
    <p v-if="loading">Cargando </p>
    <HistoricoGasesMedicinales />
</template>

<style scoped></style>
