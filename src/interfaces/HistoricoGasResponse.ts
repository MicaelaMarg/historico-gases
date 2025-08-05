export interface HistoricoGases {
    estado: string;
    gases: Gas[];
}

export interface Precio {
    fecha: string | Date;
    precio: number;
}

export interface Gas {
    articulo: Articulo;
    precios: Precio[];
}

export interface Articulo {
    tieneLote: string;
    codigo: number;
    habilitaCodigoBarra: string;
    nombre: string;
    facturable: number;
    unidad: string;
    existencia: number;
    precioUltimaCompra: number;
    esTrazable: string;
    cantidadMaximoPedido: number;
    esVacuna: string;
    esGasMedicinal: string;
    precioVenta: number;
    descripcion_facturable: string;
    fechaUltimaCompra: string;
    gasMedicinalPrecioVigente: number;
}
