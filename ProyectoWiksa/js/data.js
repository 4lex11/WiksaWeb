const productos = [
  {
      id:1,
      name:'Crunchy Taco Supreme',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Taco de tortilla de maíz, proteína sazonada a elección, sour cream, lechuga, tomate y queso cheddar.',
      price:8.5,
      delivery_time: '10 min',
      delivery_price: 7.5,
      imgUrl:'crunchytacosupreme.jpg'
    },
    {
      id:2,
      name:'Burrito Supreme',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Burrito, proteína sazonada a elección, sour cream, lechuga, tomate, cebolla y queso cheddar.',
      price:15.0,
      delivery_time: '15 min',
      delivery_price: 8.5,
      imgUrl:'burritosupreme.jpg'
    },
    {
      id:3,
      name:'Quesadilla',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Quesadilla de tortilla de harina, proteína y mezcla de quesos a la parrilla.',
      price:12.5,
      delivery_time: '50 min',
      delivery_price: 5.0,
      imgUrl:'quesadilla.jpg'
    },
    {
      id:4,
      name:'Nachos',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Nachos fritos sazonados, proteína a elección, salsa de Queso Nacho, sour cream y tomate.',
      price:20.0,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'nachos.jpg'
      
    },

    {
      id:13,
      name:'Kevin Bacon',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Carne directamente en la plancha y la mezclamos con trozos de bacon, cebolla crunchy y queso americano.',
      price:13.5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'kevinbacon.png'
      
    },
    {
      id:14,
      name:'Kevin Costner',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Carne, bacon bits, cebolla crunchy y queso americano con costilla desmenuzada y salsa barbacoa.',
      price:10.9,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'kevincostner.png'
    },
    {
      id:15,
      name:'La Muslona',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Contramuslo de pollo jugoso y crujiente de 170g, queso americano, bacon, lechuga batavia y salsa 50 Burger Spread.',
      price:15.5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'LA MUSLONA.png'
    },
    {
      id:16,
      name:'Pigma',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Huevo frito, bacon, queso americano y salsa Mayo Goiko.',
      price:11.0,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'PIGMA.png'
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
      id:61,
      name:'Chocoton',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Chocoton',
      price: 25,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'Chocoton.jpg'
    },
    {
      id:62,
      name:'Guarana 3L',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Guarana 3L',
      price: 10.0,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'Guarana.jpg'
    },
    {
      id:63,
      name:'Agua San Mateo Bidon 7L',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Agua Sin Gas Mineral San Mateo Bidón 7 L',
      price: 8.9,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Aguasanmateo7l.jpg'
    },
    {
      id:64,
      name:'Sixpack Coca Cola 300ml',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Sixpack Gaseosa Coca Cola Sin Azúcar Botella 300ml',
      price: 10.0,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'SixpackCocaCola300ml.jpg'
    },
    {
      id:65,
      name:'Leche pasteurizada 900ml',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Leche Entera Pasteurizada Danlac Botella 900ml',
      price: 7.6,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Lechepasteurizada900ml.jpg'
    },
    {
      id:66,
      name:'Carne Nacional x kg',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Carne para Guiso Nacional x kg',
      price: 33.9,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Carnenacional.jpg'
    },
    {
      id:67,
      name:'Queso Edam 180g',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Queso Edam en Tajadas Braedt 180g',
      price: 11.9,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Quesoedam180g.jpg'  
    },
    {
      id:68,
      name:'Pan Francés 5und',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Pan Francés Especial 5un',
      price: 2.8,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Panfrances.jpg'
    },
    {
      id:69,
      name:'Naranja para Jugo x kg',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Naranja para Jugo Chanchamayo x kg',
      price: 2.99,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Naranjajugoxkg.jpg'  
    },
    {
      id:70,
      name:'Sixpack Leche Laive 400g',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Sixpack Leche Concentrada Sin Lactosa Laive Botella 400g',
      price: 24.95,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Sixpacklechelaive400g.jpg'
    },
    {
      id:71,
      name:'Papel Higienico Elite 8und',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Papel Higiénico Doble Hoja Elite Ultra 8un.',
      price: 27.0,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Papelhigienicoelite8und.jpg'  
    },
    {
      id:72,
      name:'Jabon Bolivar 380g',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Jabón para Ropa Bolívar Floral 380g',
      price: 5.7,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Jabonbolivar380g.jpg'
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