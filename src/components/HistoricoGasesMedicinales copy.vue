<script setup lang="ts">
import gases from '@/components/data';
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
import type { Gas, Precio } from '@/interfaces/HistoricoGasResponse';
import { ref } from 'vue';

//obtener fechas unicas 
const fechasUnicas = ref<string[]>([]);

interface Prop {
    gases: Gas[]
}
const props = defineProps<Prop>();
console.log(props.gases)


//
// const datosParaTabla = gases.map(gas => ({
//     codigo: gas.articulo.codigo,
//     nombre: gas.articulo.nombre,
//     fechaPrecio: gas.precios[0]?.fecha ?? '',
//     valorPrecio: gas.precios[0]?.precio ?? '',

// }))

function customText(rowData: Gas) {
    console.log(rowData)
    let textValue = '';
    rowData.precios.forEach((precio: Precio) => {
        textValue += `${precio.fecha}: $${precio.precio}\t`;
    })
    return textValue;
}
</script>

<template>

    <DxDataGrid :data-source="props.gases" :show-borders="true" :column-auto-width="true" key-expr="codigo">

        <DxColumn data-field="articulo.codigo"></DxColumn>
        <DxColumn data-field="articulo.nombre"></DxColumn>
        <!-- <DxColumn data-field="fechaPrecio" data-type="date" format="dd/MM/yyyy"></DxColumn> -->
        <DxColumn caption="Precios" :calculate-cell-value="customText"></DxColumn>









    </DxDataGrid>




</template>
