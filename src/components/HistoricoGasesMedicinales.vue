<script setup lang="ts">
import gases from '@/components/data';
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
import type { Gas } from '@/interfaces/HistoricoGasResponse';
import { ref } from 'vue';




const datosParaTabla = gases.map(gas => ({
    codigo: gas.articulo.codigo,
    nombre: gas.articulo.nombre,
    fechaPrecio: gas.precios[0]?.fecha ?? '',
    valorPrecio: gas.precios[0]?.precio ?? '',

}))
</script>

<template>

    <DxDataGrid :data-source="datosParaTabla" :show-borders="true" :column-auto-width="true" key-expr="codigo">

        <DxColumn data-field="codigo"></DxColumn>
        <DxColumn data-field="nombre"></DxColumn>
        <DxColumn data-field="fechaPrecio"></DxColumn>
        <DxColumn data-field="valorPrecio"></DxColumn>









    </DxDataGrid>




</template>
