export class Jugador {
    constructor(_id='',Name='',Curp='',Position='',Team='',Number=0,Seleccion=''){
        this._id=_id;
        this.Name=Name;
        this.Curp=Curp;
        this.Position=Position;
        this.Team=Team;
        this.Number=Number;
        this.Seleccion=Seleccion;

    }
    _id: String;
    Name: String;
    Curp: String;
    Position: String;
    Team: String;
    Number: Number;
    Seleccion: String;

}
