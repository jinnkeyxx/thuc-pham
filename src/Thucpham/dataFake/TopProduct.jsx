import ImgProduct from '../images/11.jpg'
const dataFake = [
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        image : ImgProduct,
        title : 'Sieu Thi',
    },
]
export const titleProduct = "Top Product"
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