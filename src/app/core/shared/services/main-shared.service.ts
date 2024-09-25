import {Injectable, signal} from '@angular/core';
import {ObtenerDatosPersonales, ObtenerDatosPlanes, ObtenerDatosSedes} from '../../../page/main/interface/principal';

@Injectable({
	providedIn: 'root',
})
export class MainSharedService {
	public cPerCodigo = signal<string>('');

	// % datos personales
	public datosPersonales = signal<ObtenerDatosPersonales | null>(null);

	public datosSedes = signal<ObtenerDatosSedes[] | null>([]);

	public datosPlanes = signal<ObtenerDatosPlanes[] | null>([]);
}
