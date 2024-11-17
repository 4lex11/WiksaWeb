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
      id:5,
      name:'Pizza',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Pizza',
      price: 30,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Pizza.jpg'
    },
    {
      id:6,
      name:'Curri',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Curri',
      price: 22.5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Curri.jpg'
    },
    {
      id:7,
      name:'Tacos al pastor',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Curri',
      price: 22.5,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'tacosalpastor.jpg'
    },
    {
      id:8,
      name:'Enchiladas',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Curri',
      price: 22.5,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'enchiladas.jpg'
    },
    {
      id:9,
      name:'Quesadillas Especial',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Curri',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'quesadillas.jpg'
    },
    {
      id:10,
      name:'Carnita',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Curri',
      price: 8,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'carnita.jpg'
    },
    {
      id:11,
      name:'Molletes',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Curri',
      price: 10,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'molletes.jpg'
    },
    {
      id:12,
      name:'Tacos de Cabeza',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Curri',
      price: 12,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'tacosdecabeza.jpg'
    },
    {
      id:13,
      name:'Mole',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Curri',
      price: 16,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'elmole.jpg'
    },
    {
      id:14,
      name:'Pozole',
      origin_name: {id:'speedytacos',  name:'Speedy Tacos'},
      description: 'Curri',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 7.5,
      imgUrl:'pozole.jpg'
    },
    {
      id:15,
      name:'Kevin Bacon',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Carne directamente en la plancha y la mezclamos con trozos de bacon, cebolla crunchy y queso americano.',
      price:13.5,
      delivery_time: '25 min',
      delivery_price: 8.0,
      imgUrl:'kevinbacon.png'
      
    },
    {
      id:16,
      name:'Kevin Costner',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Carne, bacon bits, cebolla crunchy y queso americano con costilla desmenuzada y salsa barbacoa.',
      price:10.9,
      delivery_time: '25 min',
      delivery_price: 8.0,
      imgUrl:'kevincostner.png'
    },
    {
      id:17,
      name:'La Muslona',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Contramuslo de pollo jugoso y crujiente de 170g, queso americano, bacon, lechuga batavia y salsa 50 Burger Spread.',
      price:15.5,
      delivery_time: '25 min',
      delivery_price: 8.0,
      imgUrl:'LA MUSLONA.png'
    },
    {
      id:18,
      name:'Pigma',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Huevo frito, bacon, queso americano y salsa Mayo Goiko.',
      price:11.0,
      delivery_time: '25 min',
      delivery_price: 8.0,
      imgUrl:'PIGMA.png'
    },
    {
      id:19,
      name:'Combo Simple',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 14.5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Hamburgesa.jpg'
    },
    {
      id:20,
      name:'Zucchini y tomate grill',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 20,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'zucchiniytomategrill.jpg'
    },
    {
      id:21,
      name:'Patata Asada',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'papaasada.jpg'
    },
    {
      id:22,
      name:'Sandwich de Jamon',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 10,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'sandwichjamon.jpg'
    },
    {
      id:23,
      name:'Pollo al grill',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 13,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'polloalgrill.jpg'
    },
    {
      id:24,
      name:'Chuleton al grill',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 18,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'chuleton.jpg'
    },
    {
      id:25,
      name:'Pollo al romero',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'polloalromero.jpg'
    },
    {
      id:26,
      name:'Sandwich Mixto',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 10,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'sandwichmixto.jpg'
    },
    {
      id:27,
      name:'Cordero al grill',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'corderoalgrill.jpg'
    },
    {
      id:28,
      name:'Alitas Marinadas',
      origin_name: {id:'goikogrill',  name:'Goiko Grill'},
      description: 'Hamburgesa',
      price: 12,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'alitasmarinadas.jpg'
    },
    {
      id:90,
      name:'Tori Teriyaki',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Filete de muslo de pollo trozado en salsa teriyaki.',
      price:27.0,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'TORI TERIYAKI.webp'
    },
    {
      id:91,
      name:'Acevichado',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Relleno de langostinos empanizados y palta, cubierto con láminas de atún, bañado en salsa acevichado, coronado con cebollita china y togarashi (picante japonés).',
      price:19.9,
      delivery_time: '30 min',
      delivery_price: 8.0,
      imgUrl:'ACEVICHADO.jpg'
    },
    {
      id:92,
      name:'Parrillero',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Relleno de langostinos empanizados, queso crema y espárragos, cubierto de atún y flameado con salsa de orégano y ajos.',
      price:19.9,
      delivery_time: '30 min',
      delivery_price: 8.0,
      imgUrl:'PARRILLERO.webp'
    },
    {
      id:93,
      name:'Uzugoro',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Finos cortes de salmón, atún o bonito y pescado blanco, bañados en salsa cítrica de shoyu, aceite de ajonjolí y rocoto picado, salpicado con tobiko (ovas de pez volador).',
      price:32.5,
      delivery_time: '45 min',
      delivery_price: 8.0,
      imgUrl:'UZUGORO.webp'
    },
    {
      id:13,
      name:'Makis',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 20,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Sushi.jpg'
    },
    {
      id:94,
      name:'Lomo Saltado',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Salteado de carne de res, cebolla, tomate, papas fritas y arroz.',
      price:23.0,
      delivery_time: '35 min',
      delivery_price: 8.0,
      imgUrl:'lomo.jpg'
    },
    {
      id:95,
      name:'Ceviche',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Pescado crudo y mariscos marinados en jugo de cítricos, principalmente jugo de limón.',
      price:19.9,
      delivery_time: '35 min',
      delivery_price: 8.0,
      imgUrl:'ceviche.jpg'
    },
    {
      id:96,
      name:'Arroz con Mariscos',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Cremoso y elegante arroz con mariscos con sabor a mar, langostinos, calamar, conchas de abanico.',
      price:26.5,
      delivery_time: '35 min',
      delivery_price: 8.0,
      imgUrl:'marisco.webp'
    },
    {
      id:97,
      name:'Causa',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Mezcla de papa prensaba, ají amarillo y limón',
      price:26.5,
      delivery_time: '35 min',
      delivery_price: 8.0,
      imgUrl:'causa.jpg'
    },
    {
      id:7,
      name:'Lomo Saltado',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Lomo Saltado de pollo',
      price: 50,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'LomoSaltado.jpg'
    },

    {
      id:8,
      name:'Salchipapa',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Salchipapa',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Salchipapa.jpg'
    },
    {
      id:9,
      name:'Milanesa',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Milanesa',
      price: 30,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Milanesa.jpg'
      
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