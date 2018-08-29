export class Posiciones {
    constructor(_id = '', equipo = '', jj = 0, jg = 0, jgnf = 0,jgf = 0, jp = 0, jpnf = 0 ,jpf = 0 ,categoria = '' ){
        this._id =_id;
        this.equipo = equipo;
        this.jj = jj;
        this.jg = jg;
        this.jgnf = jgnf;
        this.jgf = jgf;
        this.jp = jp;
        this.jpnf = jpnf;
        this.jpf = jpf;
        this.categoria = categoria;
    }
    _id : string;
    equipo : string;
    jj : Number;
    jg : Number;
    jgnf : Number;
    jgf : Number;
    jp : Number;
    jpnf : Number;
    jpf : Number;
    categoria : String;
}
