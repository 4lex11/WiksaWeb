const productos = [
  {
      id:1,
      name:'Pollo + papas + Gaseosa',
      origin_name: {id:'sasonperuana',  name:'Sazón Peruana'},
      description: '1 pollo con 1 porcion grande + 1 gaseosa de 3L',
      price:63.5,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'1Pollo.png'
    },
    {
      id:2,
      name:'Especial Criollo',
      origin_name: {id:'sasonperuana',  name:'Sazón Peruana'},
      description: 'Causa + Huancaina + anticucho + humita + papa rellena',
      price:90,
      delivery_time: '50 min',
      delivery_price: 8.5,
      imgUrl:'CausaEspecial.jpg'
    },
    {
      id:3,
      name:'Ensalada Espechal',
      origin_name: {id:'healthybites',  name:'Healthy Bites'},
      description: 'Ensalada + salsas',
      price:19.5,
      delivery_time: '50 min',
      delivery_price: 5.0,
      imgUrl:'Ensalada.jpg'
    },
    {
      id:4,
      name:'1/2 Pollo + papas',
      origin_name: {id:'sasonperuana',  name:'Sazón Peruana'},
      description: '1/2 Pollo con porcion mediana de papas',
      price:30.5,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'MedioPollo.jpg'
      
    },
    {
      id:5,
      name:'Combo Parrillero',
      origin_name: {id:'sasonperuana',  name:'Sazón Peruana'},
      description: '1 Carne + papas + ensalada + 2L Chicha',
      price:55.5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Parrilla.jpg'
      
    },
    {
      id:6,
      name:'3 Tacos + papas',
      origin_name: 'Delicias Caseras',
      description: '3 Tacos + papas',
      price:32.5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'tacos.jpg'
    },
    {
      id:7,
      name:'Lomo Saltado',
      origin_name: 'Tradiciones Peruanas',
      description: 'Lomo Saltado',
      price: 50,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'LomoSaltado.jpg'
    },
    {
      id:8,
      name:'Salchipapa',
      origin_name: {id:'sasonperuana',  name:'Sazón Peruana'},
      description: 'Salchipapa',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Salchipapa.jpg'
    },
    {
      id:9,
      name:'Milanesa',
      origin_name: 'Cocina Italiana',
      description: 'Milanesa',
      price: 30,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Milanesa.jpg'
      
    },
    {
      id:10,
      name:'Pizza',
      origin_name: 'Cocina Italiana',
      description: 'Pizza',
      price: 30,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Pizza.jpg'
    },
    {
      id:11,
      name:'Hamburgesa',
      origin_name: 'Delicias Caseras',
      description: 'Hamburgesa',
      price: 14.5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Hamburgesa.jpg'
    },
    {
      id:12,
      name:'Curri',
      origin_name: 'Delicias Caseras',
      description: 'Curri',
      price: 22.5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Curri.jpg'
    },
    {
      id:13,
      name:'Sushi',
      origin_name: 'Sazón Oriental',
      description: 'Sushi',
      price: 20,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Sushi.jpg'
    },
    {
      id:14,
      name:'Ajinomen de Pollo',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Ajinome de Pollo',
      price: 5,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'Ajinomen.jpg'
    },
    {
      id:15,
      name:'Chocoton',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Chocoton',
      price: 25,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'Chocoton.jpg'
    },
    {
      id:16,
      name:'Colgate',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Colgate',
      price: 7,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'Colgate.jpg'
    },
    {
      id:17,
      name:'Guarana 3L',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Guarana 3L',
      price: 10.0,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'Guarana.jpg'
    },
    {
      id:18,
      name:'Leche Gloria 1L',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Leche Gloria 1L',
      price: 12,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'LecheGloria.jpg'
    },
    {
      id:19,
      name:'Pan Bimbo',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Pan Bimbo',
      price: 15,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'PanBimbo.jpg'
    },
];

/*
const vendedores =[
    {
        category:'SUPERMERCADO',
        name: 'Wong',
        imgUrl: 'wonglogo.png',
        time: '20 min',
        cost: 2.2,
        linkUrl: 'wongpage.html'
    },
    {
        category:'SUPERMERCADO',
        name: 'Metro',
        imgUrl: 'metrologo.png',
        time: '10 min',
        cost: 2.0,
        linkUrl: 'metropage.html'
    },
    {
        category:'SUPERMERCADO',
        name: 'Plaza Vea',
        imgUrl: 'plazavealogo.png',
        time: '30 min',
        cost: 3.5,
        linkUrl: 'plazaveapage.html'
    },
    {
        category:'SUPERMERCADO',
        name: 'Tottus',
        imgUrl: 'tottuslogo.png',
        time: '25 min',
        cost: 2.5,
        linkUrl: 'tottuspage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'Tradiciones Andinas',
        imgUrl: 'plazavea.png',
        time: '34 min',
        cost: 2.49,
        linkUrl: 'tradicionespage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'Sazón Peruana',
        imgUrl: 'plazavea.png',
        time: '15 min',
        cost: 1.5,
        linkUrl: 'sazonpepage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'La Nonna Italiana',
        imgUrl: 'plazavea.png',
        time: '20 min',
        cost: 1.0,
        linkUrl: 'nonaitapage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'Sazón Oriental',
        imgUrl: 'plazavea.png',
        time: '41 min',
        cost: 2.6,
        linkUrl: 'sazonoripage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'Cocina Tradicional',
        imgUrl: 'plazavea.png',
        time: '30 min',
        cost: 3.4,
        linkUrl: 'cocinatradpage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'El Rincón Marino',
        imgUrl: 'plazavea.png',
        time: '60 min',
        cost: 7.4,
        linkUrl: 'riconmarinopage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'Pizzería Napolitana',
        imgUrl: 'plazavea.png',
        time: '15 min',
        cost: 3.4,
        linkUrl: 'pizzerianappage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'Tradiciones Peruanas',
        imgUrl: 'plazavea.png',
        time: '25 min',
        cost: 1.4,
        linkUrl: 'tradperupage.html'
    },

    {
        category:'RESTAURANTE',
        name: 'Cocina Italiana',
        imgUrl: 'plazavea.png',
        time: '35 min',
        cost: 1.9,
        linkUrl: 'cocitapage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'Delicias Caseras',
        imgUrl: 'plazavea.png',
        time: '10 min',
        cost: 2.4,
        linkUrl: 'delicasepage.html'
    },
    {
        category:'RESTAURANTE',
        name: 'Healthy Bites',
        imgUrl: 'plazavea.png',
        time: '25 min',
        cost: 1.9,
        linkUrl: 'healbitepage.html'
    }];

const supermercados = vendedores.filter((vendedor) => {
    return vendedor.category == 'SUPERMERCADO';
});

const restaurantes = vendedores.filter((vendedor) => {
  return vendedor.category == 'RESTAURANTE';
});

const prodWong = productos.filter((producto) => {
  return producto.origin_name == 'Wong';
});*/

