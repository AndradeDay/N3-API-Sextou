const express = require ('express')
const router = expresa.Router()

router.get('/', function (require, response){
 response.status(200),send({
     title: "Projeto supresaa!!!! Semana 10, o Maezinha, pq me tirastes do útero e me fez virar adulta",
     version: "1.0.0"
 })
})

module.exports = router