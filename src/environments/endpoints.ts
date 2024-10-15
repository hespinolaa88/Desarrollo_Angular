export const routes = {
	TrilcePrincipalApi: {
		url: 'https://ucvapi.azure-api.net/trilceprincipal/api/',
		endpoints: {
			//% Principal
			Principal_ObtenerDatosPersonales: 'Principal/ObtenerDatosPersonales',
		},
	},
	ControlConfiguracionApi: {
		url: 'http://localhost/Api_Calidad/api/ControlConfiguracion/',
		endpoints: {
			Sedes: 'Sedes',
			Planes: 'Planes',
		},
	},
	LibroReclamosApi: {
		url: 'http://localhost/Api_LibroReclamos/api/Reclamaciones/',
		endpoints: {
			Monitoreo: 'Monitoreo',
		},
	},

};
