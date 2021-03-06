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
    if(req.body.empate == null){
        req.body.empate == ""
    }
    console.log(req.body.empate);
    console.log(req.body.resultado1);
    console.log(req.body.resultado2);
    var resultado11 = Number(req.body.resultado1);
    var resultado21 = Number(req.body.resultado2);
    console.log(resultado11);
    console.log(resultado21);
   if(req.body.empate == ""  || req.body.empate == null){
       // Aqui simon si esta empatado el juego
        if(resultado11 > resultado21){
            var posiciones2 = await Posiciones.find({'equipo':req.body.equipo2,'categoria':req.body.categoria})
            var posiciones1 = await Posiciones.find({'equipo':req.body.equipo1,'categoria':req.body.categoria})
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
                {'equipo':req.body.equipo2,'categoria':req.body.categoria},
                { "$set" : 
                    {'jj':jj,
                    'jp':jp,
                    'jpnf':jpnf} 
                });
            await Posiciones.findOneAndUpdate(
                {'equipo':req.body.equipo1,'categoria':req.body.categoria},
                { "$set" : 
                    {'jj':jj2,
                    'jg':jg,
                    'jgnf':jgnf}
                });
        }else{
            var posiciones1 = await Posiciones.find({'equipo':req.body.equipo2,'categoria':req.body.categoria})
            var posiciones2 = await Posiciones.find({'equipo':req.body.equipo1,'categoria':req.body.categoria})
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
                {'equipo':req.body.equipo1,'categoria':req.body.categoria},
                { "$set" : 
                    {'jj':jj,
                    'jp':jp,
                    'jpnf':jpnf} 
                });
            await Posiciones.findOneAndUpdate(
                {'equipo':req.body.equipo2,'categoria':req.body.categoria},
                { "$set" : 
                    {'jj':jj2,
                    'jg':jg,
                    'jgnf':jgnf}
                });

        }
       
   }else{
        // Aqui no esta empatado el juego
        if(req.body.empate == "Empate"){
                var posiciones2 = await Posiciones.find({'equipo':req.body.equipo2,'categoria':req.body.categoria})
                var posiciones1 = await Posiciones.find({'equipo':req.body.equipo1,'categoria':req.body.categoria})
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
                    {'equipo':req.body.equipo2,'categoria':req.body.categoria},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':req.body.equipo1,'categoria':req.body.categoria},
                    { "$set" : 
                        {'jj':jj2,
                        'jp':jp2,
                        'jpf':jpf2}
                    });
                var posiciones2 = await Posiciones.find({'equipo':req.body.equipo2,'categoria':req.body.categoria});
                var posiciones1 = await Posiciones.find({'equipo':req.body.equipo1,'categoria':req.body.categoria});
                console.log(posiciones2);
                console.log(posiciones1);
            
        }else{
            console.log('Aqui estoy');
            if(req.body.equipo1 == req.body.empate){
                var posiciones2 = await Posiciones.find({'equipo':req.body.equipo2,'categoria':req.body.categoria})
                var posiciones1 = await Posiciones.find({'equipo':req.body.equipo1,'categoria':req.body.categoria})
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
                    {'equipo':req.body.equipo2,'categoria':req.body.categoria},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':req.body.equipo1,'categoria':req.body.categoria},
                    { "$set" : 
                        {'jj':jj2,
                        'jg':jg,
                        'jgf':jgf,
                    }
                    });
            }else{
                var posiciones1 = await Posiciones.find({'equipo':req.body.equipo2,'categoria':req.body.categoria})
                var posiciones2 = await Posiciones.find({'equipo':req.body.equipo1,'categoria':req.body.categoria})
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
                    {'equipo':req.body.equipo1,'categoria':req.body.categoria},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':req.body.equipo2,'categoria':req.body.categoria},
                    { "$set" : 
                        {'jj':jj2,
                        'jg':jg,
                        'jgf':jg,
                    }
                    });
    
            }
        }

   }
    var posiciones2final = await Posiciones.find({'equipo':req.body.equipo2,'categoria':req.body.categoria})
    var posiciones1final = await Posiciones.find({'equipo':req.body.equipo1,'categoria':req.body.categoria})
    var jj2f = posiciones2final.map(function (posiciones2final) {return posiciones2final.jj;});
    var jg2f = posiciones2final.map(function (posiciones2final) {return posiciones2final.jg;});
    var jj1f = posiciones1final.map(function (posiciones1final) {return posiciones1final.jj;});
    var jg1f = posiciones1final.map(function (posiciones1final) {return posiciones1final.jg;});
    pct1 = Number(jg1f)/Number(jj1f);
    pct2 = Number(jg2f)/Number(jj2f);
    await Posiciones.findOneAndUpdate(
        {'equipo':req.body.equipo1,'categoria':req.body.categoria},
        { "$set" : 
            {'pct':pct1
            } 
        });
    await Posiciones.findOneAndUpdate(
        {'equipo':req.body.equipo2,'categoria':req.body.categoria},
        { "$set" : 
            {'pct':pct2
        }
        });
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
    var categoria = partidos.map(function (partidos) {return partidos.categoria;});
    resultado1 = Number(resultado1);
    resultado2 = Number(resultado2);
    if(empate == "" || empate == null){
        if(resultado1 > resultado2){
            var posiciones2 = await Posiciones.find({'equipo':equipo2,'categoria':categoria})
            var posiciones1 = await Posiciones.find({'equipo':equipo1,'categoria':categoria})
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
                {'equipo':equipo2,'categoria':categoria},
                { "$set" : 
                    {'jj':jj,
                    'jp':jp,
                    'jpnf':jpnf} 
                });
            await Posiciones.findOneAndUpdate(
                {'equipo':equipo1,'categoria':categoria},
                { "$set" : 
                    {'jj':jj2,
                    'jg':jg,
                    'jgnf':jgnf}
                });
        }else{
            var posiciones1 = await Posiciones.find({'equipo':equipo2,'categoria':categoria})
            var posiciones2 = await Posiciones.find({'equipo':equipo1,'categoria':categoria})
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
                {'equipo':equipo1,'categoria':categoria},
                { "$set" : 
                    {'jj':jj,
                    'jp':jp,
                    'jpnf':jpnf} 
                });
            await Posiciones.findOneAndUpdate(
                {'equipo':equipo2,'categoria':categoria},
                { "$set" : 
                    {'jj':jj2,
                    'jg':jg,
                    'jgnf':jgnf}
                });

        }
       
   }else{
        if(empate == "Empate"){
                var posiciones2 = await Posiciones.find({'equipo':equipo2,'categoria':categoria})
                var posiciones1 = await Posiciones.find({'equipo':equipo1,'categoria':categoria})
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
                    {'equipo':equipo2,'categoria':categoria},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':equipo1,'categoria':categoria},
                    { "$set" : 
                        {'jj':jj2,
                        'jp':jp2,
                        'jpf':jpf2}
                    });
                var posiciones2 = await Posiciones.find({'equipo':equipo2,'categoria':categoria});
                var posiciones1 = await Posiciones.find({'equipo':equipo1,'categoria':categoria});
                console.log(posiciones2);
                console.log(posiciones1);
            
        }else{
            console.log('Aqui estoy');
            console.log(empate);
            console.log(equipo1);
            if(equipo1[0] == empate[0]){
                console.log('si');
                var posiciones2 = await Posiciones.find({'equipo':equipo2,'categoria':categoria})
                var posiciones1= await Posiciones.find({'equipo':equipo1,'categoria':categoria})
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
                    {'equipo':equipo2,'categoria':categoria},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':equipo1,'categoria':categoria},
                    { "$set" : 
                        {'jj':jj2,
                        'jg':jg,
                        'jgf':jgf
                    }
                    });
            }else{
                console.log('np');
                var posiciones1 = await Posiciones.find({'equipo':equipo2,'categoria':categoria})
                var posiciones2 = await Posiciones.find({'equipo':equipo1,'categoria':categoria})
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
                    {'equipo':equipo1,'categoria':categoria},
                    { "$set" : 
                        {'jj':jj,
                        'jp':jp,
                        'jpf':jpf} 
                    });
                await Posiciones.findOneAndUpdate(
                    {'equipo':equipo2,'categoria':categoria},
                    { "$set" : 
                        {'jj':jj2,
                        'jg':jg,
                        'jgf':jg
                    }
                    });
    
            }
        }

   }
    var posiciones2 = await Posiciones.find({'equipo':equipo2,'categoria':categoria})
    var posiciones1 = await Posiciones.find({'equipo':equipo1,'categoria':categoria})
    var jj2 = posiciones2.map(function (posiciones2) {return posiciones2.jj;});
    var jg2 = posiciones2.map(function (posiciones2) {return posiciones2.jg;});
    var jj1 = posiciones1.map(function (posiciones1) {return posiciones1.jj;});
    var jg1 = posiciones1.map(function (posiciones1) {return posiciones1.jg;});
    pct1 = Number(jg1)/Number(jj1);
    pct2 = Number(jg2)/Number(jj2);
    await Posiciones.findOneAndUpdate(
        {'equipo':equipo1,'categoria':categoria},
        { "$set" : 
            {'pct':pct1
            } 
        });
    await Posiciones.findOneAndUpdate(
        {'equipo':equipo2,'categoria':categoria},
        { "$set" : 
            {'pct':pct2
        }
        });
   
   await Partido.findByIdAndRemove(req.params.id);
   res.json({status: 'Partido Eliminado'});
};

module.exports = partidoCtrl;