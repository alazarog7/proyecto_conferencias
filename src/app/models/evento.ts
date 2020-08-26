import { Participante } from './participante';
export class Evento {
    nombre: string;
    participante?: Participante[];
    horaInicio: Date;
    horaFin: Date;
}
