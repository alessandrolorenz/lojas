const Loja = require('../models/Loja')

module.exports = {

async searchByStateCity(req, res){
let {state, city} = req.query

if(state && city){
    state = state.toUpperCase()
    const loja = await Loja.find({state,city})
    console.log('teste1')
    res.json(loja)
  }else if (state && !city){
    state = state.toUpperCase()
    const loja = await Loja.find({state})
    console.log('teste2')
    res.json(loja)
  }else{
    const loja = await Loja.find({city})
    console.log('teste3')
    res.json(loja)
  }
}, 
  
  
  
  
  

  
  
  
  
  
  
  async testeDeleteQueryAndParams(req, res){
    // params takes data from path while 
    const params = req.params
    const query = req.query
    const body = req.body // returns an object with 2 stings. First = body unformated and the second = empty
  
    console.log('---------')
    console.log(req.query.xx)// =1
    console.log(req.query.zzz) // =2
    console.log('---------')
    console.log(req.params.id)// =01
    console.log(req.params.nome)// =seg
    console.log('---------')
    console.log(req.query)// ={xx:'1',zzz:'2'} params from postman
    console.log(req.params)// ={id:'1', nome:'seg'}from path(var names=routes.js)
    console.log(body)// { '{\n\t"bodyData": "string"\n}': '' } 
  
    const result = {query , params, body}
  
    res.json(result)
  
  }

  


}