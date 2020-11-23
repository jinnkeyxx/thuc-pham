
// data fake Hotoffer
import ImgProduct from '../images/1.png'

export const dataFake = [

    {
        title : 'Nuoc rua Bat',
        image : ImgProduct,
        newPrice : 600,
        oldPrice : 300,
        discount : 50,
    },
    {
        title : 'Nuoc rua Bat',
        image : ImgProduct,
        newPrice : 600,
        oldPrice : 300,
        discount : 50,
    },
    {
        title : 'Nuoc rua Bat',
        image : ImgProduct,
        newPrice : 600,
        oldPrice : 300,
        discount : 50,
    },
    {
        title : 'Nuoc rua Bat',
        image : ImgProduct,
        newPrice : 600,
        oldPrice : 300,
        discount : 50,
    },
    {
        title : 'Nuoc rua chen',
        image : ImgProduct,
        newPrice : 600,
        oldPrice : 300,
        discount : 50,
    },
    {
        title : 'Nuoc rua chen',
        image : ImgProduct,
        newPrice : 600,
        oldPrice : 300,
        discount : 50,
    },
    {
        title : 'Nuoc rua chen',
        image : ImgProduct,
        newPrice : 600,
        oldPrice : 300,
        discount : 50,
    },
    {
        title : 'Nuoc rua chen',
        image : ImgProduct,
        newPrice : 600,
        oldPrice : 300,
        discount : 50,
    }
]
export const totalItem = dataFake.length
// func pagination data fake
const getData = (page , limit) => {
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const result = dataFake.slice(startIndex , endIndex)
    return result
}
export const apiFake = {
    getData
}
