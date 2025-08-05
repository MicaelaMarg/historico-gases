<script setup lang="ts">
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
import type { Gas } from '@/interfaces/HistoricoGasResponse';
import { computed } from 'vue';

interface Prop {
    gases: Gas[]
}
const props = defineProps<Prop>();

const fechasUnicas = Array.from(
    new Set(
        props.gases.flatMap(gas =>
            gas.precios.map(p => p.fecha)
        )
    )
).sort();
console.log(fechasUnicas)

const datosPivotados = computed(() => {
    return props.gases.map(gas => {
        const fila: Record<string, any> = {
            codigo: gas.articulo.codigo,
            nombre: gas.articulo.nombre,
        };

        fechasUnicas.forEach(fecha => {
            const precioEncontrado = gas.precios.find(p => p.fecha === fecha);
            fila[fecha as string] = precioEncontrado ? `$${precioEncontrado.precio}` : '';
        });

        return fila;
    });
});




</script>

<template>

    <DxDataGrid :data-source="datosPivotados" :show-borders="true" :column-auto-width="true" key-expr="codigo">
        <DxColumn data-field="codigo"></DxColumn>
        <DxColumn data-field="nombre"></DxColumn>

        <DxColumn v-for="fecha in fechasUnicas" :key="fecha" :data-field="fecha" />
    </DxDataGrid>




</template>
