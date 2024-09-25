import { NgFor, NgIf } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { MainSharedService } from '@shared/services/main-shared.service';
import { MatSelectModule } from '@angular/material/select'
import { ConfigCalidadService } from '@shared/services/config-calidad.service';
import { CalidadService } from '../../services/calidad.service';
import { OptionGroup } from '../../interface/principal';

@Component({
  selector: 'app-adicional',
  standalone: true,
  imports: [NgIf, MatSelectModule, NgFor],
  templateUrl: './adicional.component.html',
  styleUrl: './adicional.component.scss'
})
export class AdicionalComponent {
    
    public mainSharedService  = inject(MainSharedService);
    public configCalidadService  =inject(ConfigCalidadService);
    public calidaService = inject(CalidadService);
    public cPerCodigo: string = '';
    public vModuloId: number = 2; // registo academidxo
    public vPadre: number = 0;
    public tipoPlanes: OptionGroup[] = [];
    public vTipoCur: number = 0;

    constructor(){

      effect(() =>{
        const cPerCodigoSignal = (this.mainSharedService.cPerCodigo()); // Actualiza la señal
        console.log('Nuevo valor de cPerCodigo:', cPerCodigoSignal); //
        this.cPerCodigo = cPerCodigoSignal;
        if (cPerCodigoSignal !== '') {          
          // console.log(' hugo =>', cPerCodigoSignal);
          this.post_Sca_Config_ObtenerCampus();
          this.post_Sca_Config_ObtenerPlanes();
        }
      })
    }
    //obtiene las sedes por configuracion
    post_Sca_Config_ObtenerCampus(pTipoCurricula?: number):void {
      const vAutorizado: number = 1;
      const vTipoCurricula = pTipoCurricula ?? 0;
      const data = this.configCalidadService.creaObjetoDataSedes(this.cPerCodigo, this.vModuloId, vAutorizado, vTipoCurricula);
      
      if (this.mainSharedService.datosPersonales() === null) {
        this.calidaService.post_ControlConfiguracion_ObtenerDatosSedes(data).subscribe({
          next: (v) => {
            console.log('v =>', v);
            this.mainSharedService.datosSedes.set(v.body?.lstItem ?? []);
            // this.sedeList = v.body?.lstItem[0] || [];
          },
          error: (e) => {
            console.error('Error al enviar datos:', e);
          },
          complete: () => {
            console.log('Solicitud completada');
          },
        });
      }else{
        this.calidaService.post_ControlConfiguracion_ObtenerDatosSedes(data).subscribe({
          next: (v) => {
            console.log('v =>', v);
            this.mainSharedService.datosSedes.set(v.body?.lstItem ?? []);
            // this.sedeList = v.body?.lstItem[0] || [];
          },
          error: (e) => {
            console.error('Error al enviar datos:', e);
          },
          complete: () => {
            console.log('Solicitud completada');
          },
        });

      }
    }    
    //Obtiene los Planes por configuracion
    post_Sca_Config_ObtenerPlanes():void{
      const vPadre = this.vPadre;
      const vAutorizado: number = 1;
      const data = this.configCalidadService.crearObjetoDataPlanes(this.cPerCodigo, this.vModuloId, vAutorizado);
      if(this.mainSharedService.datosPersonales() === null) {
        this.calidaService.post_ControlConfiguracion_ObtenerDatosPlanes(data).subscribe({
          next: (v) => {
            console.log('v =>', v);
            // this.mainSharedService.datosPlanes.set(v.body?.lstItem ?? []);
            const planesData = v.body?.lstItem ?? [];
            if( vPadre === 1){
              this.transformarDatosPlanes(planesData); // Llama al método de transformación            
            }else{
              this.mainSharedService.datosPlanes.set(planesData);
            }
          },
          error: (e) => {
            console.error('Error al enviar datos:', e);
          },
          complete: () => {
            console.log('Solicitud completada');
          },
        });
      }
    }
    private transformarDatosPlanes(rawData: any[]): void {
      this.tipoPlanes = []; // Reinicia el array

      rawData.forEach(item => {
        const group = this.tipoPlanes.find(g => g.label === item.cIntPadre);
        
        if (group) {
          group.options.push({ nIntCodigo: item.nIntCodigo, cIntDescripcion: item.cIntDescripcion });
        } else {
          this.tipoPlanes.push({
            label: item.cIntPadre,
            options: [{ nIntCodigo: item.nIntCodigo, cIntDescripcion: item.cIntDescripcion }]
          });
        }
      });
    }

    onPlanSelect(event: Event): void {
      const selectElement = event.target as HTMLSelectElement; // Obtener el elemento select
      const selectedValue = selectElement.value; // Obtener el valor seleccionado
      this.post_Sca_Config_ObtenerCampus(parseInt(selectedValue));
    }
}
