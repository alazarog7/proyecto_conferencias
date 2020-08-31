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
      { nombre: "Predicación del Evangelio", 
        participante: [{
          nombre:"Onassis Papafanurakis",
          apellidos:"",
          asamblea:"",
          pais:"br"
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
      { nombre: "Ministerio sobre las Dispensaciones", 
        participante: [{
          nombre:"Roberto Thonney",
          apellidos:"",
          asamblea:"",
          pais:"us"
        }],
        horaInicio: new Date("2020-09-05T10:30:00-04:00"),
        horaFin: new Date("2020-09-05T12:30:00-04:00")
      },
      { nombre: "Ministerios Eventos Proféticos (parte I)", 
        participante: [{
          nombre:"Eduardo Rule",
          apellidos:"",
          asamblea:"",
          pais:"ec"
        }],
        horaInicio: new Date("2020-09-05T14:30:00-04:00"),
        horaFin: new Date("2020-09-05T16:00:00-04:00")
      },
      { nombre: "Ministerio sobre el Estado Eterno", 
        participante: [{
          nombre:"Lemão",
          apellidos:"",
          asamblea:"",
          pais:"br"
        }],
        horaInicio: new Date("2020-09-05T16:00:00-04:00"),
        horaFin: new Date("2020-09-05T17:30:00-04:00")
      },
      { nombre: "Ministerio sobre el Centro Divino", 
        participante: [{
          nombre:"Douglas Buchanan",
          apellidos:"",
          asamblea:"",
          pais:"us"
        }],
        horaInicio: new Date("2020-09-05T17:30:00-04:00"),
        horaFin: new Date("2020-09-05T19:00:00-04:00")
      },
      { nombre: "Predicación del Evangelio", 
        participante: [{
          nombre:"Norberto Sandoval",
          apellidos:"",
          asamblea:"",
          pais:"mx"
        }],
        horaInicio: new Date("2020-09-05T19:00:00-04:00"),
        horaFin: new Date("2020-09-05T20:00:00-04:00")
      },

      //Domingo
      { nombre: "Himnos", 
        participante: [],
        horaInicio: new Date("2020-09-06T10:00:00-04:00"),
        horaFin: new Date("2020-09-06T10:30:00-04:00")
      },
      { nombre: "Ministerio para la familia", 
        participante: [{
          nombre:"Teófilo Maizares",
          apellidos:"",
          asamblea:"",
          pais:"ar"
        }],
        horaInicio: new Date("2020-09-06T10:30:00-04:00"),
        horaFin: new Date("2020-09-06T12:30:00-04:00")
      },
      { nombre: "Ministerio sobre la esfera de las mujeres", 
        participante: [{
          nombre:"Felipe Fournier",
          apellidos:"",
          asamblea:"",
          pais:"us"
        }],
        horaInicio: new Date("2020-09-06T14:30:00-04:00"),
        horaFin: new Date("2020-09-06T16:00:00-04:00")
      },
      { nombre: "Ministerio para jóvenes", 
        participante: [{
          nombre:"Manuel Adames",
          apellidos:"",
          asamblea:"",
          pais:"us"
        }],
        horaInicio: new Date("2020-09-06T16:00:00-04:00"),
        horaFin: new Date("2020-09-06T17:30:00-04:00")
      },
      { nombre: "Ministerio como enfrentar los tiempos difíciles (pandemia)", 
        participante: [{
          nombre:"Michele Payette",
          apellidos:"",
          asamblea:"",
          pais:"ca"
        }],
        horaInicio: new Date("2020-09-06T17:30:00-04:00"),
        horaFin: new Date("2020-09-06T19:00:00-04:00")
      },
      { nombre: "Predicación del Evangelio", 
        participante: [{
          nombre:"Rafael González",
          apellidos:"",
          asamblea:"",
          pais:"mx"
        }],
        horaInicio: new Date("2020-09-06T19:00:00-04:00"),
        horaFin: new Date("2020-09-06T20:00:00-04:00")
      },
      //Lunes
      { nombre: "Evangelio", 
        participante: [{
          nombre:"David Mearns",
          apellidos:"",
          asamblea:"",
          pais:"ca"
        }],
        horaInicio: new Date("2020-09-07T17:00:00-04:00"),
        horaFin: new Date("2020-09-07T18:30:00-04:00")
      },
      { nombre: "Ministerio sobre el Bautismo", 
        participante: [{
          nombre:"Luiz Amalfi",
          apellidos:"",
          asamblea:"",
          pais:"br"
        }],
        horaInicio: new Date("2020-09-07T18:30:00-04:00"),
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
