import { Router } from "express";
import express from "express"
import ProductsManagers from "../managers/ProductsManagers.js";

const apiProductsRouter=Router();
apiProductsRouter.use(express.json());
const Manager = new ProductsManagers();


apiProductsRouter.post(`/`,async (req,res)=>{
    const productoNuevo= req.body;
    if(!productoNuevo.code||!productoNuevo.price||!productoNuevo.stock||!productoNuevo.title){
        return res.status(400).send({status:"error",error: "incomplete values"})
    }
    const result = await Manager.createProduct(productoNuevo);
    if(result === -1){
        return res.status(500).send({status:"error",error: "intente en otro momento gracias."})
    }
    return res.send({status:`success!`,mensaje:`producto creado con id ${result}`})
})

apiProductsRouter.get(`/`,async (req,res)=>{
    const allProducts= await Manager.leerProduts();
    if(allProducts === -1){
        return res.status(500).send({status:`error`,error:`error server`})
    }
    res.send({status:`success!`,payload: allProducts})

})

apiProductsRouter.get(`/:pid`,async (req,res)=>{
    const allProducts= await Manager.leerProduts();
    const id = req.params.pid
    
})

apiProductsRouter.put(`/:pid`,async (req,res)=>{
    const productoActualizado=req.body;
    if(isNaN(pid) ||pid <=0 || pid > products.length ){

    return res.status(400).send(`error: ${error}`)

    }
    const allProducts= await  Manager.leerProduts();
    const indice = allProducts.findIndex(producto => producto.id == pid)
    if(indice >0){
        const allProducts ={productoActualizado};
    }
    }
)
apiProductsRouter.delete(`/:pid`,(req,res)=>{
    const pid = req.params.pid
    if(isNaN(pid)){
        res.status(400).send(`error: ${error}, no es un numero` );
    }else{
        const idNumber=parseInt(pid)
        const product = products.find(product => product.id === pid)
        if(product){
        res.send(`producto eliminado`)
        }else{
            res.send(`ese producto no existe`)
        }
    }
    products.splice(idNumber -1,1)
})



export default apiProductsRouter;