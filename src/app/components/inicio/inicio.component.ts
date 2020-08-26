import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  evento = new Date('September 4, 2020 18:00:00');
  paginaEspera: boolean = true;
  dia: number = 0;
  hora:number = 0;
  minuto:number = 0;
  segundo:number = 0; 
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.evento)
   let dateTemp = new Date();
   let tiempoEspera = Math.floor((+this.evento - +dateTemp) / 1000);
   this.dia = Math.floor(tiempoEspera / 86400)
   this.hora = Math.floor((tiempoEspera % 86400) / 3600);
   this.minuto = Math.floor(((tiempoEspera % 86400) % 3600) / 60);
   this.segundo = ((tiempoEspera % 86400) % 3600) % 60; 
   let intervalo =  setInterval(()=>{
       this.segundo--;
       if( this.segundo === -1 ){
        this.segundo = 59;
          this.minuto--;
          if(this.minuto === -1){
             this.minuto = 2;
             this.hora--;
             if( this.hora === -1){
               this.paginaEspera = false;
               clearInterval(intervalo);
             }
          }
       } 

   },1000);
  }

}
