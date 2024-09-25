import { Injectable, signal } from '@angular/core';
import { DataPlanes, DataSedes } from '@interface/responseResult.interface';

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
}