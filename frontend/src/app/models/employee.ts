export class Employee {

    constructor(_id = '', name = '',bateador='',cacha='',date ='', position = '', team = '', number = 0, categoria ='',situacion='',seleccion='') {
        this._id = _id;
        this.name = name;
        this.bateador = bateador;
        this.cacha = cacha;
        this.date = date;
        this.position = position;
        this.team = team;
        this.number = number;
        this.categoria = categoria;
        this.situacion = situacion;
        this.seleccion = seleccion;

    }

    _id: string;
    name: string;
    bateador:string;
    cacha:string;
    date: string;
    position: string;
    team: string;
    number: number;
    categoria:string;
    situacion:string;
    seleccion:string;
}
