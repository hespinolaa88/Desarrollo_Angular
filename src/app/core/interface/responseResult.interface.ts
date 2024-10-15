export interface ResponseResultLst<T> {
	lstItem: T[];
	pagination: Pagination;
	isSuccess: boolean;
	lstError: any[];
	ticket: string;
	clientName: string;
	userName: string;
	serverName: string;
	resultado: number;
}

export interface ResponseResultItem<T> {
	item: T;
	isSuccess: boolean;
	lstError: any[];
	ticket: string;
	clientName: string;
	userName: string;
	serverName: string;
	resultado: number;
}

export interface Pagination {
	pageIndex: number;
	pageSize: number;
	totalRows: number;
}

export interface DataSedes {
	vcPerCodigo: string;
	vnModuloId: number;
	vnEsAutorizado: number;
	vnTipoCurricula: number;
	detalleConfiguracion: {
	vIdModulo: number;
	vnSisGruCodigo: number;
	vnSisGruTipo: number;
	vnObjTipo: number;
	vnObjCodigo: string;
	};
}

export interface DataPlanes{
	vcPerCodigo: string;
	vnModuloId: number;
	vnEsAutorizado: number;
	vnOpcionPadre: number;
	vnPadreValor: number;
	detalleConfiguracion: {
	vIdModulo: number;
	vnSisGruCodigo: number;
	vnSisGruTipo: number;
	vnObjTipo: number;
	vnObjCodigo: string;
	};
}

export interface ReclamoRequest {
    cpercodigo: string;
    cPerJuridica: string;
    dFechaInicio: string;
    dFechaFin: string;
    cTipoReclamo?: string;
    cEstadoReclamo?: string;
    pagination: {
        pageIndex: number;
        pageSize: number;
        totalRows: number;
    };
}