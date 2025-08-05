import { ref } from 'vue';
import api from '@/api/axios';

import type { HistoricoGases, Gas } from '@/interfaces/HistoricoGasResponse';


const URL = '/api_proxy.jsp'
const FILE_NAME = 'getGasesMedicinalesHistoricos.jsp'


const gasesHistorico = ref<Gas[]>([]);
const loading = ref<boolean>(false);

const parseDate = (str: string) => {
    let [day, month, year] = str.split('/');
    return new Date(`${year}-${month}-${day}`); // formato yyyy-MM-dd
};

async function getHistoricoGases() {
    loading.value = true;

    try {
        const { data } = await api.get<HistoricoGases>(URL, {
            params: {
                endpoint: FILE_NAME,
            }
        });
        if (data.estado.toUpperCase() != 'OK') {
            throw new Error(data.estado);
        } else {

            gasesHistorico.value = data.gases;
            console.log('Datos cargados:', data.gases);
        }



    } catch (error) {


        console.error(error)

    } finally {
        loading.value = false;
    }
}

const useHistoricoGases = () => {

    return {
        loading,
        getHistoricoGases,
        gasesHistorico,

    }
}
export default useHistoricoGases