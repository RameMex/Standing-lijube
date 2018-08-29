const Partido = require('../models/partidos');
const Posiciones = require('../models/posiciones');

const partidoCtrl = {};

partidoCtrl.getPartidos = async (req, res, next) => {
    const partidos = await Partido.find();
    res.json(partidos);
};

partidoCtrl.createPartido = async (req, res, next) => {
    const partido = new Partido({
        categoria:req.body.categoria,
        equipo1: req.body.equipo1,
        resultado1: req.body.resultado1,
        equipo2: req.body.equipo2,
        resultado2: req.body.resultado2,
        empate: req.body.empate,
        fecha: req.body.fecha
    });
    console.log(req.body.empate);
   if(req.body.empate == "" ){
        if(req.body.resultado1 < req.body.resultado2){
            var posiciones2 = await Posiciones.find({'equipo':req.body.equipo2})
            var posiciones1 = await Posiciones.find({'equipo':req.body.equipo1})
            var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
            var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
            var jpnf = posiciones2.map(function (posiciones2) {return posiciones2.jpnf;});
            var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
            var jg = posiciones1.map(function (posiciones1) {return posiciones1.jg;});
            var jgnf = posiciones1.map(function (posiciones1) {return posiciones1.jgnf;});
            jj = Number(jj) + 1;
            jp = Number(jp) + 1;
            jpnf = Number(jpnf) + 1;
            jj2 = Number(jj2) + 1;
            jg = Number(jg) + 1;
            jgnf = Number(jgnf) + 1;
            console.log(jj);
            console.log(jp);
            console.log(jpnf);
            console.log(jj2);
            console.log(jg);
            console.log(jgnf);
            await Posiciones.findOneAndUpdate(
                {'equipo':req.body.equipo2},
                { "$set" : 
                    {'jj':jj,
                    'jp':jp,
                    'jpnf':jpnf} 
                });
            await Posiciones.findOneAndUpdate(
                {'equipo':req.body.equipo1},
                { "$set" : 
                    {'jj':jj2,
                    'jg':jg,
                    'jgnf':jgnf}
                });
        }else{
            var posiciones1 = await Posiciones.find({'equipo':req.body.equipo2})
            var posiciones2 = await Posiciones.find({'equipo':req.body.equipo1})
            var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
            var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
            var jpnf = posiciones2.map(function (posiciones2) {return posiciones2.jpnf;});
            var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
            var jg = posiciones1.map(function (posiciones1) {return posiciones1.jg;});
            var jgnf = posiciones1.map(function (posiciones1) {return posiciones1.jgnf;});
            jj = Number(jj) + 1;
            jp = Number(jp) + 1;
            jpnf = Number(jpnf) + 1;
            jj2 = Number(jj2) + 1;
            jg = Number(jg) + 1;
            jgnf = Number(jgnf) + 1;
            console.log(jj);
            console.log(jp);
            console.log(jpnf);
            console.log(jj2);
            console.log(jg);
            console.log(jgnf);
            await Posiciones.findOneAndUpdate(
                {'equipo':req.body.equipo1},
                { "$set" : 
                    {'jj':jj2,
                    'jp':jp,
                    'jpnf':jpnf} 
                });
            await Posiciones.findOneAndUpdate(
                {'equipo':req.body.equipo2},
                { "$set" : 
                    {'jj':jj,
                    'jg':jg,
                    'jgnf':jgnf}
                });

        }
       
   }else{
        if(req.body.empate == "Empate"){
                var posiciones2 = await Posiciones.find({'equipo':req.body.equipo2})
                var posiciones1 = await Posiciones.find({'equipo':req.body.equipo1})
                var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
                var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
                var jpf = posiciones2.map(function (posiciones2) {return posiciones2.jpf;});
                var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
                var jp2 = posiciones1.map(function (posiciones1) {return posiciones1.jp;});
                var jpf2 = posiciones1.map(function (posiciones1) {return posiciones1.jpf;});
                jj = Number(jj) + 1;
                jp = Number(jp) + 1;
                jpf = Number(jpf) + 1;
                jj2 = Number(jj2) + 1;
                jp2 = Number(jp2) + 1;
                jpf2 = Number(jpf2) + 1;
                await Posiciones.findOneAndUpdate(
                    {'equipo':req.body.equipo2},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':req.body.equipo1},
                    { "$set" : 
                        {'jj':jj2,
                        'jp':jp2,
                        'jpf':jpf2}
                    });
                var posiciones2 = await Posiciones.find({'equipo':req.body.equipo2});
                var posiciones1 = await Posiciones.find({'equipo':req.body.equipo1});
                console.log(posiciones2);
                console.log(posiciones1);
            
        }else{
            console.log('Aqui estoy');
            if(req.body.equipo1 == req.body.empate){
                var posiciones2 = await Posiciones.find({'equipo':req.body.equipo2})
                var posiciones1 = await Posiciones.find({'equipo':req.body.equipo1})
                var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
                var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
                var jpf = posiciones2.map(function (posiciones2) {return posiciones2.jpf;});
                var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
                var jg = posiciones1.map(function (posiciones1) {return posiciones1.jg;});
                var jgf = posiciones1.map(function (posiciones1) {return posiciones1.jgf;});
                jj = Number(jj) + 1;
                jp = Number(jp) + 1;
                jpf = Number(jpf) + 1;
                jj2 = Number(jj2) + 1;
                jg = Number(jg) + 1;
                jgf = Number(jgf) + 1;
                console.log(jj);
                console.log(jp);
                console.log(jpf);
                console.log(jj2);
                console.log(jg);
                console.log(jgf);
                await Posiciones.findOneAndUpdate(
                    {'equipo':req.body.equipo2},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':req.body.equipo1},
                    { "$set" : 
                        {'jj':jj2,
                        'jg':jg,
                        'jgf':jgf,
                    }
                    });
            }else{
                var posiciones1 = await Posiciones.find({'equipo':req.body.equipo2})
                var posiciones2 = await Posiciones.find({'equipo':req.body.equipo1})
                var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
                var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
                var jpf = posiciones2.map(function (posiciones2) {return posiciones2.jpf;});
                var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
                var jg = posiciones1.map(function (posiciones1) {return posiciones1.jg;});
                var jgf = posiciones1.map(function (posiciones1) {return posiciones1.jgf;});
                jj = Number(jj) + 1;
                jp = Number(jp) + 1;
                jpf = Number(jpf) + 1;
                jj2 = Number(jj2) + 1;
                jg = Number(jg) + 1;
                jgf = Number(jgf) + 1;
                console.log(jj);
                console.log(jp);
                console.log(jpf);
                console.log(jj2);
                console.log(jg);
                console.log(jgf);
                await Posiciones.findOneAndUpdate(
                    {'equipo':req.body.equipo1},
                    { "$set" : 
                        {'jj':jj2,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':req.body.equipo2},
                    { "$set" : 
                        {'jj':jj,
                        'jg':jg,
                        'jgf':jg,
                    }
                    });
    
            }
        }

   }
   await partido.save();
   res.json({status: 'Partido Creado'});
};

partidoCtrl.getPartido = async (req, res, next) => {
    const { id } = req.params;
    const partido = await Partido.findById(id);
    res.json(partido);
};

partidoCtrl.editPartido = async (req, res, next) => {
    const { id } = req.params;
    const partido = {
        categoria:req.body.categoria,
        equipo1: req.body.equipo1,
        resultado1: req.body.resultado1,
        equipo2: req.body.equipo2,
        resultado2: req.body.resultado2,
        empate: req.body.empate,
        fecha:req.body.fecha
    };
    await Partido.findByIdAndUpdate(id, {$set: partido}, {new: true});
    res.json({status: 'Partido Modificado'});
};

partidoCtrl.deletePartido = async (req, res, next) => {
    const partidos = await Partido.find({'_id':req.params.id});
    console.log(partidos);
    var empate = partidos.map(function (partidos) {return partidos.empate;});
    var equipo1 = partidos.map(function (partidos) {return partidos.equipo1;});
    var equipo2 = partidos.map(function (partidos) {return partidos.equipo2;});
    var resultado1 = partidos.map(function (partidos) {return partidos.resultado1;});
    var resultado2 = partidos.map(function (partidos) {return partidos.resultado2;});
    if(empate == "" ){
        if(resultado1 < resultado2){
            var posiciones2 = await Posiciones.find({'equipo':equipo2})
            var posiciones1 = await Posiciones.find({'equipo':equipo1})
            var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
            var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
            var jpnf = posiciones2.map(function (posiciones2) {return posiciones2.jpnf;});
            var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
            var jg = posiciones1.map(function (posiciones1) {return posiciones1.jg;});
            var jgnf = posiciones1.map(function (posiciones1) {return posiciones1.jgnf;});
            jj = Number(jj) - 1;
            jp = Number(jp) - 1;
            jpnf = Number(jpnf) - 1;
            jj2 = Number(jj2) - 1;
            jg = Number(jg) - 1;
            jgnf = Number(jgnf) - 1;
            console.log(jj);
            console.log(jp);
            console.log(jpnf);
            console.log(jj2);
            console.log(jg);
            console.log(jgnf);
            await Posiciones.findOneAndUpdate(
                {'equipo':equipo2},
                { "$set" : 
                    {'jj':jj,
                    'jp':jp,
                    'jpnf':jpnf} 
                });
            await Posiciones.findOneAndUpdate(
                {'equipo':equipo1},
                { "$set" : 
                    {'jj':jj2,
                    'jg':jg,
                    'jgnf':jgnf}
                });
        }else{
            var posiciones1 = await Posiciones.find({'equipo':equipo2})
            var posiciones2 = await Posiciones.find({'equipo':equipo1})
            var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
            var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
            var jpnf = posiciones2.map(function (posiciones2) {return posiciones2.jpnf;});
            var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
            var jg = posiciones1.map(function (posiciones1) {return posiciones1.jg;});
            var jgnf = posiciones1.map(function (posiciones1) {return posiciones1.jgnf;});
            jj = Number(jj) - 1;
            jp = Number(jp) - 1;
            jpnf = Number(jpnf) - 1;
            jj2 = Number(jj2) - 1;
            jg = Number(jg) - 1;
            jgnf = Number(jgnf) - 1;
            console.log(jj);
            console.log(jp);
            console.log(jpnf);
            console.log(jj2);
            console.log(jg);
            console.log(jgnf);
            await Posiciones.findOneAndUpdate(
                {'equipo':equipo1},
                { "$set" : 
                    {'jj':jj2,
                    'jp':jp,
                    'jpnf':jpnf} 
                });
            await Posiciones.findOneAndUpdate(
                {'equipo':equipo2},
                { "$set" : 
                    {'jj':jj,
                    'jg':jg,
                    'jgnf':jgnf}
                });

        }
       
   }else{
        if(empate == "Empate"){
                var posiciones2 = await Posiciones.find({'equipo':equipo2})
                var posiciones1 = await Posiciones.find({'equipo':equipo1})
                var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
                var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
                var jpf = posiciones2.map(function (posiciones2) {return posiciones2.jpf;});
                var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
                var jp2 = posiciones1.map(function (posiciones1) {return posiciones1.jp;});
                var jpf2 = posiciones1.map(function (posiciones1) {return posiciones1.jpf;});
                jj = Number(jj) - 1;
                jp = Number(jp) - 1;
                jpf = Number(jpf) - 1;
                jj2 = Number(jj2) - 1;
                jp2 = Number(jp2) - 1;
                jpf2 = Number(jpf2) - 1;
                await Posiciones.findOneAndUpdate(
                    {'equipo':equipo2},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':equipo1},
                    { "$set" : 
                        {'jj':jj2,
                        'jp':jp2,
                        'jpf':jpf2}
                    });
                var posiciones2 = await Posiciones.find({'equipo':equipo2});
                var posiciones1 = await Posiciones.find({'equipo':equipo1});
                console.log(posiciones2);
                console.log(posiciones1);
            
        }else{
            console.log('Aqui estoy');
            console.log(empate);
            console.log(equipo1);
            if(equipo1[0] == empate[0]){
                console.log('si');
                var posiciones2 = await Posiciones.find({'equipo':equipo2})
                var posiciones1= await Posiciones.find({'equipo':equipo1})
                var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
                var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
                var jpf = posiciones2.map(function (posiciones2) {return posiciones2.jpf;});
                var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
                var jg = posiciones1.map(function (posiciones1) {return posiciones1.jg;});
                var jgf = posiciones1.map(function (posiciones1) {return posiciones1.jgf;});
                jj = Number(jj) - 1;
                jp = Number(jp) - 1;
                jpf = Number(jpf) - 1;
                jj2 = Number(jj2) - 1;
                jg = Number(jg) - 1;
                jgf = Number(jgf) - 1;
                console.log(jj);
                console.log(jp);
                console.log(jpf);
                console.log(jj2);
                console.log(jg);
                console.log(jgf);
                await Posiciones.findOneAndUpdate(
                    {'equipo':equipo2},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':equipo1},
                    { "$set" : 
                        {'jj':jj2,
                        'jg':jg,
                        'jgf':jgf
                    }
                    });
            }else{
                console.log('np');
                var posiciones1 = await Posiciones.find({'equipo':equipo2})
                var posiciones2 = await Posiciones.find({'equipo':equipo1})
                var jj = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
                var jp = posiciones2.map(function (posiciones2) {return posiciones2.jp;});
                var jpf = posiciones2.map(function (posiciones2) {return posiciones2.jpf;});
                var jj2 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
                var jg = posiciones1.map(function (posiciones1) {return posiciones1.jg;});
                var jgf = posiciones1.map(function (posiciones1) {return posiciones1.jgf;});
                jj = Number(jj) - 1;
                jp = Number(jp) - 1;
                jpf = Number(jpf) - 1;
                jj2 = Number(jj2) - 1;
                jg = Number(jg) - 1;
                jgf = Number(jgf) - 1;
                console.log(jj);
                console.log(jp);
                console.log(jpf);
                console.log(jj2);
                console.log(jg);
                console.log(jgf);
                await Posiciones.findOneAndUpdate(
                    {'equipo':equipo1},
                    { "$set" : 
                        {'jj':jj2,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':equipo2},
                    { "$set" : 
                        {'jj':jj,
                        'jg':jg,
                        'jgf':jg
                    }
                    });
    
            }
        }

   }
   await Partido.findByIdAndRemove(req.params.id);
   res.json({status: 'Partido Eliminado'});
};

module.exports = partidoCtrl;