
const products = [
    {
        id:'1',
        name:'iPhone 14 128 GB',
        price:'1.829.999',
        category:'celular',
        img: "https://www.ventasrosario.com.ar/wp-content/uploads/2022/09/61XO4bORHUL._AC_SL1500_.jpg",
        stock:'12',
        description:'Chip A15 Bionic. Velocidad sin caducidad y tirarás de sol a sol sin pasar por el enchufe.',

    },
    {
        id:'2',
        name:'iPad 10.9 Wi-Fi 64 GB',
        price:'489.999',
        category:'tablet',
        img: 'https://www.macstation.com.ar/img/productos/3068-4.jpg',
        stock:'12',
        description:'El nuevo iPad viene dispuesto a conquistarte. Tiene potencia de sobra para hacer realidad lo que te propongas.',




    },
    {
        id:'3',
        name:'Apple Airpods 2da Generacion',
        price:'185.999',
        category:'auriculares',
        img: 'https://www.macstation.com.ar/img/productos/small/1407-apple-airpods-2.jpg',
        stock:'12',
        description:'Los nuevos AirPods reinventan el concepto de auriculares inalámbricos. Es sacarlos del estuche y ya funcionan con tu iPhone, Apple Watch, iPad o Mac, así de sencillo'
    },
    {
        id:'4',
        name:'MacBook Pro 13 M2 256 GB',
        price:'1.837.999',
        category:'tablet',
        img: "https://www.macstation.com.ar/img/productos/3009-mneh3le-a.jpg",
        stock:'10',
        description:'Chip M2 de Apple con CPU de 8 núcleos, GPU de 10 núcleos y Neural Engine de 16 núcleos. 8 GB de memoria unificada.',

    },
    {
        id:'5',
        name:'iPhone 12 64 GB - Verde',
        price:'1.099.999',
        category:'celular',
        img: "https://www.macstation.com.ar/img/productos/2156-11111.jpg",
        stock:'12',
        description:'Tecnología 5G. Chip A14 Bionic, el más veloz en un smartphone. Pantalla OLED de borde a borde.',

    }
   


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)

    })
}

export const getProductsById = (productId) => {
    return new Promise ( (resolve) => {
        setTimeout (() => {
            resolve (products.find (prod => prod.id === productId ))
        }, 500)  
    })    
}


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  };
