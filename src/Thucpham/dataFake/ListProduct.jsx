
// data fake Hotoffer


export const dataFake = [

    {
        _id : Math.floor(Math.random() * 999999),
        title : 'Nuoc rua Bat',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        title : 'Nuoc rua Bat',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        title : 'Nuoc rua Bat',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        title : 'Nuoc rua Bat',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        title : 'Nuoc rua chen',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        title : 'Nuoc rua chen',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        title : 'Nuoc rua chen',
    },
    {
        _id : Math.floor(Math.random() * 999999),
        title : 'Nuoc rua chen',
    }
]
export const titleProduct = "Hot Offer"
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
