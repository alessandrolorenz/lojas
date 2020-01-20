const Loja = require('../models/Loja')

module.exports = {

  async index(req, res){
    const lojas = await Loja.find()
       res.json(lojas)
   },
   
  async store(req, res) {
    let {name, address, phone, cnpj, workingHour, city, state} = req.body
    state = state.toUpperCase()
    const nomeLoja = await Loja.find({name:name})
    if(nomeLoja){
      console.log('loja já existente')
      res.json('loja já existente')
    }else {
    const loja = await Loja.create({
      name, 
      address, 
      phone, 
      cnpj, 
      workingHour, 
      city, 
      state
    })

    res.json(loja)
  }
},
async destroy(req, res){
  const {id, name} = req.params
  const loja = await Loja.findOneAndDelete({
    _id: id,
    name: name
  })
  res.json(loja)
},
async update(req, res){
  const {_id, name, address, phone, cnpj, city, state} = req.body
  
  const loja = await Loja.findOneAndUpdate(
  {
        _id:_id,
        name: name
      },
      {_id, 
        name, 
        address,
        phone, 
        cnpj, 
        city, 
        state
      },
      {
        new:true
      })

    res.json(loja)
  },

}