export class Trabajadores {
    constructor(_id = '',name = '', equipo = '',trabajo = '',categoria = ''){
        this._id =_id;
        this.name = name;
        this.equipo = equipo;
        this.trabajo = trabajo;
        this.categoria = categoria;


    }
    _id : string;
    name : string;
    equipo : string;
    trabajo : string;
    categoria : string;

}
