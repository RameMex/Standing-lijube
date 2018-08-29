export class Partidos {
    constructor(_id = '',categoria = '', equipo1 = '', resultado1 = 0, equipo2 = '',resultado2 = 0,empate = '',fecha = '') {
        this._id = _id;
        this.categoria = categoria;
        this.equipo1 = equipo1;
        this.resultado1 = resultado1;
        this.equipo2 = equipo2;
        this.resultado2 = resultado2;
        this.empate = empate;
        this.fecha = fecha;
    }

    _id: string;
    categoria: string
    equipo1: string;
    resultado1: Number;
    equipo2: string;
    resultado2: Number;
    empate:string;
    fecha:string;
}

