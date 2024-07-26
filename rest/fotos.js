var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const { Foto, Etiqueta } = require('../models'); // Correct model import

router.get('/findAll/json', async (req, res, next) => {
    try {
        const fotos = await Foto.findAll({
            attributes: {
                exclude: ["updatedAt", "createdAt"]
            },
            include: [{
                model: Etiqueta,
                attributes: ['texto'],
                through: { attributes: [] }
            }],
        });
        res.json(fotos);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while retrieving fotos.');
    }
});

router.get('/findById/:id/json', function (req, res,
    next) {
    let id = parseInt(req.params.id);
    Foto.findAll({
        attributes: {
            exclude: ["updatedAt",
                "createdAt"]
        },
        include: [{
            model: Etiqueta,
            attributes: ['texto'],
            through: { attributes: [] }
        }],

        where: {
            [Op.and]: [
                { id: id }
            ]
        }
    })
        .then(fotos => {
            res.json(fotos);
        })
        .catch(error => res.status(400).send(error))
});

router.post('/save', function (req, res, next) {
    let { titulo, descripcion,
        calificacion, ruta } = req.body;
    Foto.create({
        titulo: titulo,
        descripcion: descripcion,
        calificacion: parseFloat(calificacion),
        ruta: ruta,
        createdAt: new Date(),
        updatedAt: new Date()

    })
        .then(foto => {
            res.json(foto);
        })
        .catch(error =>
            res.status(400).send(error))
});

router.put('/update', function(req, res, next) {
    let {id, titulo, descripcion, calificacion,ruta} =
    req.body;
    Foto.update({
    titulo: titulo,
    descripcion: descripcion,
    calificacion: parseFloat(calificacion),
    ruta: ruta,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    
    where: {
    id: parseInt(id)
    }
    })
    .then(respuesta => {
    res.json(respuesta);
    })
    .catch(error => res.status(400).send(error))
    });

    router.delete('/delete/:id', function(req, res,
        next) {
        let id = parseInt(req.params.id);
        Foto.destroy({
        where: {
        id: id
        
        }
        })
        .then(respuesta => {
        res.json(respuesta);
        })
        .catch(error =>
        res.status(400).send(error))
        });

module.exports = router;
