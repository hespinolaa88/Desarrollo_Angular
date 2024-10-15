import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { GlobalService } from '@shared/services/global.service';
import { ObtenerDatosPlanes, ObtenerDatosSedes, Reclamo} from '../interface/principal';
import { Observable } from 'rxjs';
import { DataPlanes, ReclamoRequest, ResponseResultLst , DataSedes} from '@interface/responseResult.interface';
// import { routes } from '@environment/endpoints';

@Injectable({
	providedIn: 'root',
})
export class CalidadService extends GlobalService {

  private ControlConfiguracion  = environment.ls_apis.trilceapi2.routes.ControlConfiguracionApi;
  private libroReclamos =  environment.ls_apis.trilceapi2.routes.LibroReclamosApi
  // routes.ControlConfiguracionApi;

  constructor() { 
    super();   
    console.log(this.ControlConfiguracion);
  }

  post_ControlConfiguracion_ObtenerDatosSedes(data: DataSedes): Observable<HttpResponse<ResponseResultLst<ObtenerDatosSedes>>> {
    // const param = {data};
		const ling = this.ControlConfiguracion.url + this.ControlConfiguracion.endpoints.Sedes;
		return this._http.post<ResponseResultLst<ObtenerDatosSedes>>(ling, data, {
			headers: this.headers_a_json,
			observe: 'response',
		});
  }

  post_ControlConfiguracion_ObtenerDatosPlanes(data: DataPlanes): Observable<HttpResponse<ResponseResultLst<ObtenerDatosPlanes>>>{
    const ling = this.ControlConfiguracion.url + this.ControlConfiguracion.endpoints.Planes;
		return this._http.post<ResponseResultLst<ObtenerDatosPlanes>>(ling, data, {
			headers: this.headers_a_json,
			observe: 'response',
		});
  }

  post_ObtenerListadoMonitoreoReclamos(data: ReclamoRequest): Observable<HttpResponse<ResponseResultLst<any>>>{
    const ling = this.libroReclamos.url + this.libroReclamos.endpoints.Monitoreo;
		return this._http.post<ResponseResultLst<any>>(ling, data, {
			headers: this.headers_a_json,
			observe: 'response',
		});
  }
}
