export interface centrosEmpre {
	titulo: 'PREGRADO' | 'POSTGRADO' | 'EXTERNO';
	primercodigo: string;
	segundocodigo: string;
	tercercodigo: string;
	cuartocodigo: string;
	nombre: string;
}
export interface ObtenerDatosPersonales {
	cPerCodigo: string;
	cPerApellido: string;
	cPerApellidoPaterno: string;
	cPerApellidoMaterno: string;
	cPerApellidoCasada: string;
	cPerNombre: string;
	TipoContrato: string;
	EsDocente: number;
	dPerNacimiento: string;
	nPerEstado: number;
	nPerTipo: number;
	cUbiGeoCodigo: string;
	cLugarConcatenado: string;
	nPerNatSexo: number;
	cPerNatSexoDes: string;
	nPerNatEstCivil: number;
	cPerNatEstCivilDes: string;
	nPerNatTipResidencia: number;
	nPerNatSitLaboral: number;
	nPerNatOcupacion: number;
	TipoDI: number;
	DI: string;
	DNI: string;
	cDocIde: string;
	PEOPLE: string;
	cperjuridica: string;
	nUniOrgCodigo: number;
	cUniOrgNombre: string;
	cPerTelNumero: string;
	nPerAluRegEstado: number;
	Ciclo: number;
	Parientes: string;
	nAdmSolCodigo: number;
	nSProCodigo: number;
	nProCodigo: number;
	cFilial: string;
	cPerMaiNombre: string;
	bEvaluarDocente: boolean;
	bPerfilMigrado: boolean;
	PositionPS: string;
	PositionDptPS: string;
	dFechaUpdate: Date;
	cUsuUpdate: string;
	Mailrecupe: string;
	MayorGradoObtenido: string;
	Categoria: string;
	MailBoleta: string;
	nSedCodigo: number;
	cPerUsuCodigo: string;
	SemestreIngreso: string;
	PeriodoCard: string;
	permail_dbu: string;
	pertelefono_dbu: string;
}

export interface ObtenerDatosSedes {
	nUniOrgCodigo: number;
	cPerJuridica: string;
	cUniOrgNombre: string;
	cPerApellido: string;
	nFilCodigo: number;
	nombreCorto: string;
	direccionPrincipal: string;
	filialPeople: string;
}
export interface ObtenerDatosPlanes{
	nIntPadre: number;
	cIntPadre: string;
	nIntCodigo: number;
	nIntClase: number;
	cIntDescripcion: string;
	nIntTipo: number;
	nIntPadre2: number;
	cIntPadre2: string;
}

export interface Option {
	nIntCodigo: number;
	cIntDescripcion: string;
  }
  
export interface OptionGroup {
	label: string; // Este es el cIntPadre
	options: Option[];
}

export interface Reclamo {
    idreclamo: string;
    crecnombre: string;
    crecdni: string;
	crectelefono: string;
    totalRows: number;
}