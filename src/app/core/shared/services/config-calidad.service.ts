import { Injectable, Signal, signal } from '@angular/core';
import { DataPlanes, DataSedes, ReclamoRequest  } from '@interface/responseResult.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigCalidadService {
    public nModuloId = signal<number>(0);
    public nEsAutorizado = signal<number>(1);
    public nTipoCurricula = signal<number>(0);
    public nOpcionPadre = signal<number>(0);    
    // Definir detalleConfiguracion como un objeto con signals
    public detalleConfiguracion = {
      vIdModulo: signal<number>(0),
      vnSisGruCodigo: signal<number>(0),
      vnSisGruTipo: signal<number>(0),
      vnObjTipo: signal<number>(0),
      vnObjCodigo: signal<string>("0")
    };

    public cPerJuridica = signal<string>("0")
    public cTipoReclamo = signal<string>("0")
    public cEstadoReclamo = signal<string>("0")
    public pagination = {
      PageIndex: signal<number>(1),
      PageSize: signal<number>(10),
      TotalRows: signal<number>(0)
    }

  constructor() { }

  creaObjetoDataSedes(cPerCodigo:string, idModulo?: number, vAutorizado?: number, nTipoCur?: number ): DataSedes{
      return {
        vcPerCodigo: cPerCodigo,
        vnModuloId: idModulo !== undefined && idModulo !== null ? idModulo : this.nModuloId(),
        vnEsAutorizado: vAutorizado !== undefined && vAutorizado !== null ? vAutorizado :  this.nEsAutorizado(),
        vnTipoCurricula: nTipoCur !== undefined && nTipoCur !== null ? nTipoCur :  this.nTipoCurricula(),
        detalleConfiguracion: {
          vIdModulo: this.detalleConfiguracion.vIdModulo(),
          vnSisGruCodigo: this.detalleConfiguracion.vnSisGruCodigo(),
          vnSisGruTipo: this.detalleConfiguracion.vnSisGruTipo(),
          vnObjTipo: this.detalleConfiguracion.vnObjTipo(),
          vnObjCodigo: this.detalleConfiguracion.vnObjCodigo()
      }
    };
  }
  crearObjetoDataPlanes(cPerCodigo:string, idModulo?: number, vAutorizado?: number, vOpcionPadre?: number ): DataPlanes{
    const vPadreValor: number = 0;
    return {
      vcPerCodigo: cPerCodigo,
      vnModuloId: idModulo !== undefined && idModulo !== null ? idModulo : this.nModuloId(),
      vnEsAutorizado: vAutorizado !== undefined && vAutorizado !== null ? vAutorizado :  this.nEsAutorizado(),
      vnOpcionPadre: vOpcionPadre !== undefined && vOpcionPadre !== null ? vOpcionPadre :  this.nOpcionPadre(),
      vnPadreValor: vPadreValor,
      detalleConfiguracion: {
        vIdModulo: this.detalleConfiguracion.vIdModulo(),
        vnSisGruCodigo: this.detalleConfiguracion.vnSisGruCodigo(),
        vnSisGruTipo: this.detalleConfiguracion.vnSisGruTipo(),
        vnObjTipo: this.detalleConfiguracion.vnObjTipo(),
        vnObjCodigo: this.detalleConfiguracion.vnObjCodigo()
      }
    }
  }
  crearObjetoReclamos(cPerCodigo: string, cPerJuridica: string, dFechaInicio: string, dFechaFin: string, cTipoReclamo?: string,  cEstadoReclamo?: string, nPageIndex?: number, pageSize?: number ): ReclamoRequest {
    return {
      cpercodigo: cPerCodigo,
      cPerJuridica: cPerJuridica !== undefined && cPerJuridica !== null ? cPerJuridica : this.cPerJuridica(),
      dFechaInicio: dFechaInicio,
      dFechaFin: dFechaFin,
      cTipoReclamo: cTipoReclamo !== undefined && cTipoReclamo !== null ? cTipoReclamo : this.cTipoReclamo(),
      cEstadoReclamo: cEstadoReclamo !== undefined && cEstadoReclamo !== null ? cEstadoReclamo : this.cEstadoReclamo(),
      pagination: {
        pageIndex: nPageIndex !== undefined && nPageIndex !== null ? nPageIndex : this.pagination.PageIndex(),
        pageSize: pageSize !== undefined && pageSize !== null ? pageSize : this.pagination.PageSize(),
        totalRows: this.pagination.TotalRows()
      }
    }

  }


}