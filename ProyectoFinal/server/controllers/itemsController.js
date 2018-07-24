const self= {};
const itemsService = require('../services/itemsSercvice')

self.itemsList= async function(req, res, next){
   
    let query= req.query.q;
    console.log("controller: "+query)

    let items = await itemsService.getItems(query)
    console.log(items);
    return res.json(items)

}

self.itemId= async function(req, res, next){
    let id= req.params.id;
    console.log("controller id: "+id)

    let item = await itemsService.getSingleItem(id)
    console.log(item);

    return res.json(item)
}

module.exports= self;