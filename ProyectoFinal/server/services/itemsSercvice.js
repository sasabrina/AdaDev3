const axios= require('axios')
const self= {};

self.getItems = function(search){
    var itemOb= {
        "author":{
            "name": "Sabrina",
            "lastname": "Alvarez"
        },
        categories:[],
        items:[]
        };

    return axios
        .get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`)
        .then(response => response.data.results)
        .then(resp =>{
            let promesas= resp.map(item=>{

                let i = {
                    'id': item.id,
                    'title': item.title,
                    'price':{
                        'currency': item.currency_id == 'ARS' ? '$' : item.currency_id,
                        'amount': item.price,
                        'decimals': item,
                    },
                    'picture': item.thumbnail,
                    'condition': item.condition,
                    'free_shipping': item.shipping,
                    'state': item.address.state_name
                }
                itemOb.items.push(i);

                return axios
                .get(`https://api.mercadolibre.com/categories/${item.category_id}`)
                .then(category=>{
                    let categoria = category.data.path_from_root.map(c => c.name)
                    
                    return categoria
                })
            })
            return Promise.all(promesas)
        })
        .then(categorias=>{categorias.sort((a,b)=> b.total-a.total)
            itemOb.categories= categorias[0]
            return itemOb
        })
        .catch(err=>{
            console.log('no hay respuesta', err)
        })  
}

self.getSingleItem= function(id){
    var itemOb= {
        "author":{
            "name": "Sabrina",
            "lastname": "Alvarez"
        },
        categories:[],
        items:[]
        };

    return axios
    .get(`https://api.mercadolibre.com/items/${id}`)
    .then(response => response.data)
    .then(resp =>{
        itemOb.items={
            'id': resp.id,
            'title': resp.title,
            'price':{
                'currency': resp.currency_id == 'ARS' ? '$' : resp.currency_id,
                'amount': resp.price,
                'decimals': resp,
            },
            'picture': resp.thumbnail,
            'condition': resp.condition,
            'free_shipping': resp.shipping,
            'sold_quantity': resp.sold_quantity,
            'category': resp.category_id
            }
        return itemOb;
    })
    .then(detail=>{
        return axios
        .get(`https://api.mercadolibre.com/items/${id}/description`)
        .then(respuesta => respuesta.data)
        .then(rta=>{
            itemOb.items.description= rta.plain_text;
            return itemOb;
        })
    .then(detailcategory=>{
        return axios
        .get(`https://api.mercadolibre.com/categories/${itemOb.items.category}`)
        .then(respuesta => respuesta.data)
        .then(category=>{category.path_from_root.map(c => itemOb.categories.push(c.name))
            console.log('itemob: ', itemOb)
                return itemOb
        })
    })
    })
    .catch(err=>{
        console.log('no hay respuesta', err)
    })
}
module.exports= self;