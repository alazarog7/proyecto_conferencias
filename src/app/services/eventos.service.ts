import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { disableDebugTools } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventos: Evento[] = [
    //Viernes
    
      { nombre: "Himnos", 
        participante: [
  
        ],
        horaInicio: new Date("2020-09-04T18:30:00-04:00"),
        horaFin: new Date("2020-09-04T19:00:00-04:00")
      },
      { nombre: "Evangelio", 
        participante: [{
          nombre:"Onassis",
          apellidos:"",
          asamblea:"",
          pais:"us"
        }],
        horaInicio: new Date("2020-09-04T19:00:00-04:00"),
        horaFin: new Date("2020-09-04T20:00:00-04:00")
      }
    ,
    //Sabado
    
      { nombre: "Himnos", 
        participante: [],
        horaInicio: new Date("2020-09-05T10:00:00-04:00"),
        horaFin: new Date("2020-09-05T10:30:00-04:00")
      },
      { nombre: "Ministerio para Jóvenes", 
        participante: [{
          nombre:"Manuel Adames",
          apellidos:"",
          asamblea:"",
          pais:"mx"
        }],
        horaInicio: new Date("2020-09-05T10:30:00-04:00"),
        horaFin: new Date("2020-09-05T11:30:00-04:00")
      },
      { nombre: "Preguntas del ministerio", 
        participante: [],
        horaInicio: new Date("2020-09-05T11:30:00-04:00"),
        horaFin: new Date("2020-09-05T12:30:00-04:00")
      },
      { nombre: "Escuela para Niños", 
        participante: [{
          nombre:"Ernesto Martines",
          apellidos:"",
          asamblea:"",
          pais:"mx"
        }],
        horaInicio: new Date("2020-09-05T14:30:00-04:00"),
        horaFin: new Date("2020-09-05T15:30:00-04:00")
      },
      { nombre: "Ministerio – Escatología (eventos proféticos)", 
        participante: [{
          nombre:"Joshua Stewart",
          apellidos:"",
          asamblea:"",
          pais:"us"
        }],
        horaInicio: new Date("2020-09-05T15:30:00-04:00"),
        horaFin: new Date("2020-09-05T17:00:00-04:00")
      },
      { nombre: "Preguntas del ministerio", 
        participante: [],
        horaInicio: new Date("2020-09-05T17:00:00-04:00"),
        horaFin: new Date("2020-09-05T18:00:00-04:00")
      },
      { nombre: "Ministerio para mujeres", 
        participante: [{
          nombre:"Douglas Buchanan",
          apellidos:"",
          asamblea:"",
          pais:"us"
        }],
        horaInicio: new Date("2020-09-05T18:00:00-04:00"),
        horaFin: new Date("2020-09-05T19:30:00-04:00")
      },

      //Domingo
      { nombre: "Himnos", 
        participante: [],
        horaInicio: new Date("2020-09-06T10:00:00-04:00"),
        horaFin: new Date("2020-09-06T10:30:00-04:00")
      },
      { nombre: "Ministerio sobre el bautismo", 
        participante: [{
          nombre:"Felipe Fournier",
          apellidos:"",
          asamblea:"",
          pais:"us"
        }],
        horaInicio: new Date("2020-09-06T10:30:00-04:00"),
        horaFin: new Date("2020-09-06T11:30:00-04:00")
      },
      { nombre: "Preguntas del ministerio", 
        participante: [],
        horaInicio: new Date("2020-09-06T11:30:00-04:00"),
        horaFin: new Date("2020-09-06T12:30:00-04:00")
      },
      { nombre: "Ministerio de Eventos Profeticos ", 
        participante: [{
          nombre:"Eduardo Rule",
          apellidos:"",
          asamblea:"",
          pais:"ec"
        }],
        horaInicio: new Date("2020-09-06T14:30:00-04:00"),
        horaFin: new Date("2020-09-06T15:30:00-04:00")
      },
      { nombre: "Preguntas del ministerio", 
        participante: [],
        horaInicio: new Date("2020-09-06T15:30:00-04:00"),
        horaFin: new Date("2020-09-06T16:30:00-04:00")
      },
      { nombre: "Ministerio para la familia", 
        participante: [{
          nombre:"Roberto Thoney",
          apellidos:"",
          asamblea:"",
          pais:"us"
        }],
        horaInicio: new Date("2020-09-06T16:30:00-04:00"),
        horaFin: new Date("2020-09-06T17:30:00-04:00")
      },
      { nombre: "Preguntas del ministerio", 
        participante: [],
        horaInicio: new Date("2020-09-06T17:30:00-04:00"),
        horaFin: new Date("2020-09-06T18:30:00-04:00")
      },
      { nombre: "Predicacion del evangelio", 
        participante: [{
          nombre:"Ernesto Martinez",
          apellidos:"",
          asamblea:"",
          pais:"mx"
        }],
        horaInicio: new Date("2020-09-06T19:00:00-04:00"),
        horaFin: new Date("2020-09-06T20:00:00-04:00")
      },
      //Lunes
      { nombre: "Ministerio sobre el Centro Divino", 
        participante: [{
          nombre:"Lineu Binotti",
          apellidos:"",
          asamblea:"",
          pais:"br"
        }],
        horaInicio: new Date("2020-09-07T18:30:00-04:00"),
        horaFin: new Date("2020-09-07T19:30:00-04:00")
      },
      { nombre: "Preguntas del ministerio", 
      participante: [],
      horaInicio: new Date("2020-09-07T19:30:00-04:00"),
      horaFin: new Date("2020-09-07T20:00:00-04:00")
    },
      
    
  ];
  
  constructor() { }

  getDias():any[]{

    let dias = new Set();
    
    this.eventos.forEach( evento => {
      dias.add(evento.horaInicio.getDate())
    });

    return [...dias.values()];

  }

  getEventos(dia:number): Evento[]{
    let horarios:Evento[] = []
    this.eventos.forEach( evento  => {
      if(evento.horaInicio.getDate() == dia){
        horarios.push(evento);
      }
    });
    return horarios;
  }

}
