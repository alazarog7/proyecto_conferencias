import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  eventos:Evento[] = [];
  dias: any[] = [];
  dia = 4;
  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {
    this.dias = this.eventoService.getDias();
    this.eventos = this.eventoService.getEventos(this.dias[0]);
    this.dia = this.dias[0];
  }

  verHorario(valor: number){
    this.dia = valor;
    this.eventos = this.eventoService.getEventos(valor);
  }

}
