export class Equipos {
    constructor(_id = '', name = '', seccion = '') {
        this._id = _id;
        this.name = name;
        this.seccion = seccion
    }

    _id: string;
    name: string;
    seccion: string;
}
