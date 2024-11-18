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
      id:29,
      name:'Tori Teriyaki',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Filete de muslo de pollo trozado en salsa teriyaki.',
      price:27.0,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'TORI TERIYAKI.webp'
    },
    {
      id:30,
      name:'Acevichado',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Relleno de langostinos empanizados y palta, cubierto con láminas de atún, bañado en salsa acevichado, coronado con cebollita china y togarashi (picante japonés).',
      price:19.9,
      delivery_time: '30 min',
      delivery_price: 8.0,
      imgUrl:'ACEVICHADO.jpg'
    },
    {
      id:31,
      name:'Parrillero',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Relleno de langostinos empanizados, queso crema y espárragos, cubierto de atún y flameado con salsa de orégano y ajos.',
      price:19.9,
      delivery_time: '30 min',
      delivery_price: 8.0,
      imgUrl:'PARRILLERO.webp'
    },
    {
      id:32,
      name:'Uzugoro',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Finos cortes de salmón, atún o bonito y pescado blanco, bañados en salsa cítrica de shoyu, aceite de ajonjolí y rocoto picado, salpicado con tobiko (ovas de pez volador).',
      price:32.5,
      delivery_time: '45 min',
      delivery_price: 8.0,
      imgUrl:'UZUGORO.webp'
    },
    {
      id:33,
      name:'Makis',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 20,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Sushi.jpg'
    },
    {
      id:34,
      name:'Jingisukan',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'jingisukan.jpg'
    },
    {
      id:35,
      name:'Tonkatsu',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 13,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'tonkatsu.jpg'
    },
    {
      id:36,
      name:'Ramen',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 10,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'ramen.jpg'
    },
    {
      id:37,
      name:'Okonomiyaki',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 8,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'okonomiyaki.jpg'
    },
    {
      id:38,
      name:'Sanuki udon',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 12,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'sanukiudon.jpg'
    },
    {
      id:39,
      name:'Yakiniku',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'yakiniku.jpg'
    },
    {
      id:40,
      name:'Takoyaki',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 7,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'takoyaki.jpg'
    },
    {
      id:41,
      name:'Yakitori',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'yakitori.jpg'
    },
    {
      id:42,
      name:'Castella',
      origin_name: {id:'memosushi',  name:'Memo Sushi'},
      description: 'Sushi',
      price: 8,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'castella.jpg'
    },
    {
      id:43,
      name:'Lomo Saltado',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Salteado de carne de res, cebolla, tomate, papas fritas y arroz.',
      price:23.0,
      delivery_time: '35 min',
      delivery_price: 8.0,
      imgUrl:'lomo.jpg'
    },
    {
      id:44,
      name:'Ceviche',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Pescado crudo y mariscos marinados en jugo de cítricos, principalmente jugo de limón.',
      price:19.9,
      delivery_time: '35 min',
      delivery_price: 8.0,
      imgUrl:'ceviche.jpg'
    },
    {
      id:45,
      name:'Arroz con Mariscos',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Cremoso y elegante arroz con mariscos con sabor a mar, langostinos, calamar, conchas de abanico.',
      price:26.5,
      delivery_time: '35 min',
      delivery_price: 8.0,
      imgUrl:'marisco.webp'
    },
    {
      id:46,
      name:'Causa',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Mezcla de papa prensaba, ají amarillo y limón',
      price:26.5,
      delivery_time: '35 min',
      delivery_price: 8.0,
      imgUrl:'causa.jpg'
    },
    {
      id:47,
      name:'Lomo Saltado',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Lomo Saltado de pollo',
      price: 50,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'LomoSaltado.jpg'
    },

    {
      id:48,
      name:'Salchipapa',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Salchipapa',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Salchipapa.jpg'
    },
    {
      id:49,
      name:'Milanesa',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Milanesa',
      price: 30,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'Milanesa.jpg'
    },
    {
      id:50,
      name:'Anticucho',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Milanesa',
      price: 10,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'anticucho.jpg'
    },
    {
      id:51,
      name:'Carapulcra',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Milanesa',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'carapulcra.jpg'
    },
    {
      id:52,
      name:'Arroz Chaufa',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Milanesa',
      price: 12,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'chaufa.jpg'
    },
    {
      id:53,
      name:'Arroz con Pollo',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Milanesa',
      price: 10,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'arrozconpollo.jpg'
    },
    {
      id:54,
      name:'Caldo de Gallina',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Milanesa',
      price: 8,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'caldodegallina.jpg'
    },
    {
      id:55,
      name:'Picarones',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Milanesa',
      price: 5,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'picarones.jpg'
    },
    {
      id:56,
      name:'Seco de Carne',
      origin_name: {id:'perugourmet',  name:'Peru Gourmet'},
      description: 'Milanesa',
      price: 15,
      delivery_time: '50 min',
      delivery_price: 8.0,
      imgUrl:'secodecarne.jpg'
    },
    {
      id:57,
      name:'Colgate',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Colgate',
      price: 7,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'Colgate.jpg'
    },
    {
      id:58,
      name:'Sixpack Panetón 800g',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Sixpack Panetón Metro Tradicional Bolsa 800g',
      price: 71.4,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'sixpackpanetonmetro.jpg'
    },
    {
      id:59,
      name:'Pollo Rostizado Combo',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Pollo Rostizado + Papas Fritas + Gaseosa Inca Kola Sin Azúcar 1.5L',
      price: 33.9,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'pollorostizadocombo.jpg'
    },
    {
      id:60,
      name:'Aji de Casa metro',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Ají de La Casa Metro 250g',
      price: 9.1,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'ajidecasa.jpg'
    },
    {
      id:61,
      name:'Árbol de Navidad',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Árbol de Navidad Krea Nevado 571 Ramas 180Cm',
      price: 279.99,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'arbolnavidad.jpg'
    },
    {
      id:62,
      name:'Torta Helada',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Torta Helada de Fresa 20 Porciones',
      price: 54.9,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'tortahelada.jpg'
    },
    {
      id:63,
      name:'Petit Pan 25und',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Petit Pan Metro 25und',
      price: 7.9,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'petipan.jpg'
    },
    {
      id:64,
      name:'Pan Baguette',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Petit Pan Metro 25und',
      price: 1.9,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'baguette.jpg'
    },
    {
      id:65,
      name:'Fresa 1kg',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Fresa Entera Congelada El Frutero 1kg',
      price: 15.99,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'fresa1kg.jpg'
    },
    {
      id:66,
      name:'Piña 1kg',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Piña Golden en Trozos Congelada El Frutero 1kg',
      price: 16.99,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'pinia1kg.jpg'
    },
    {
      id:67,
      name:'Arandano 1kg',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Mix de Arándano, Fresa y Frambuesa El Frutero 1kg',
      price: 20.99,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'arandano1kg.jpg'
    },
    {
      id:68,
      name:'Papa Green 400g',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Papa Ondulada Green Food 400g',
      price: 6.5,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'papagreen400g.jpg'
    },
    {
      id:69,
      name:'Helado 900ml',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Helado de Crema Peziduri Tricolor 900ml',
      price: 11.9,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'helado900ml.jpg'
    },
    {
      id:70,
      name:'Helado 2.2L',
      origin_name: { id:'metro', name:'Metro' },
      description: 'Helado Peziduri Tricolor 2.2L',
      price: 21.99,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'helado22l.jpg'
    },
    {
      id:71,
      name:'Ajinomen de Pollo',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Ajinome de Pollo',
      price: 5,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'Ajinomen.jpg'
    },
    {
      id:72,
      name:'Leche Gloria 1L',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Leche Gloria 1L',
      price: 12,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'LecheGloria.jpg'
    },
    {
      id:73,
      name:'Cafe Instantaneo 200g',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Café Instantáneo Granulado Tottus 200g',
      price: 21.9,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'cafeinstantaneo200g.jpg'
    },
    {
      id:74,
      name:'Azucar Rubia 5kg',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Azúcar Rubia Tottus 5 kg',
      price: 19.9,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'azucarrubia5kg.jpg'
    },
    {
      id:75,
      name:'Cereal de Chocolate 500g',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Bolitas de cereales sabor chocolate Tottus 500gr',
      price: 12.9,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'cerealdechocolate500g.jpg'
    },
    {
      id:76,
      name:'Turron Doña Pepa 500g',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Turrón Doña Pepa Tottus 500 g',
      price: 11.9,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'turrondonapepa.jpg'
    },
    {
      id:77,
      name:'Aceite 900ml',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Aceite de Girasol Tottus 900 mL',
      price: 7.5,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'aceite900ml.jpg'
    },
    {
      id:78,
      name:'Aceituna verde 270g',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'ACEITUNA VERDE DESHUESADA PREMIUM TOTTUSX270G',
      price: 12.9,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'acitunaverde270g.jpg'
    },
    {
      id:79,
      name:'Caramelos de Limón 250g',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Caramelos Sabor Limón Tottus 250 g',
      price: 5.5,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'carameloslimon250g.jpg'
    },
    {
      id:80,
      name:'Gomitas 100g',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Gomitas gusanos Tottus 100 g',
      price: 3.9,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'gomitas100g.jpeg'
    },
    {
      id:81,
      name:'Aceituna Negra 510g',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Aceituna negra entera de cóctel',
      price: 11.5,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'aceitunasnegra.jpg'
    },
    {
      id:82,
      name:'Huevos 30und',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'HUEVOS PARDOS TOTTUS X 30 UND',
      price: 11.5,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'huevos30und.jpg'
    },    
    {
      id:83,
      name:'Cafetera Roja',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'CAFETERA PRIMA LATTE ROJA',
      price: 899,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'cafeteraroja.jpg'
    },
    {
      id:84,
      name:'Freidora de Aire',
      origin_name: {id:'tottus',  name:'Tottus'},
      description: 'Freidora de aire manual Oster 4L con revestimiento DiamondForce',
      price: 299,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'freidoradeaire.jpg'
    },
    {
      id:85,
      name:'Pan Bimbo',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Pan Bimbo',
      price: 15,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'PanBimbo.jpg'
    },
    {
      id:86,
      name:'Paneton 900g 6und',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Panetón GLORIA Bolsa 900g Caja 6un',
      price: 158.4,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'paneton900g6und.jpg'
    },
    {
      id:87,
      name:'Cafe Altomayo 170g',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Café Instantáneo ALTOMAYO Gourmet Frasco 170g',
      price: 28.7,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'cafealtomayo.jpg'
    },
    {
      id:88,
      name:'Canasta Navideña',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Canasta Navideña Roja 2024 Caja 1un',
      price: 34.7,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'canastanavidad.jpg'
    },
    {
      id:89,
      name:'Aceite de Oliva 500ml',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Aceite de Oliva EL OLIVAR Extra Virgen Botella 500ml',
      price: 37.7,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'aceiteoliva500ml.jpg'
    },
    {
      id:90,
      name:'Blueberries 500g',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Blueberries BELLS FRESCOS Bandeja 500g',
      price: 14.4,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'blueberries500g.jpg'
    },
    {
      id:91,
      name:'Leche 390g 6unf',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Leche Reconstituida Entera GLORIA Lata 390g Paquete 6un',
      price: 23.5,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'leche390g6und.jpg'
    },
    {
      id:92,
      name:'Mayonesa 850g',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Mayonesa ALACENA Doypack 850g',
      price: 19.6,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'mayonesa850g.jpg'
    },
    {
      id:93,
      name:'Arroz 5kg',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Arroz Extra COSTEÑO Bolsa 5Kg',
      price: 27.5,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'arroz5kg.jpg'
    },
    {
      id:94,
      name:'Leche Condesada 393g',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Leche Condensada NESTLÉ Lata 393g',
      price: 6,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'lechecondensada393g.jpg'
    },
    {
      id:95,
      name:'Durazno 820g',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Durazno en Mitades BELLS Lata 820g',
      price: 8.09,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'durazno820g.jpg'
    },
    {
      id:96,
      name:'Aceite de Canola 170g',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Durazno en Mitades BELLS Lata 820g',
      price: 24.2,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'aceitecanola170g.jpg'
    },
    {
      id:97,
      name:'Filete Empanizado 500g',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Filete Empanizado Alaska Pollock PESCATORE Bolsa 500g',
      price: 17.5,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'fileteempanizado500g.jpg'
    },
    {
      id:98,
      name:'Piernas de Pollo 800g',
      origin_name: {id:'plazavea',  name:'Plaza Vea'},
      description: 'Piernitas de Pollo COPACOL Bolsa 800g',
      price: 10.5,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'piernaspollo800g.jpg'
    },

    {
      id:99,
      name:'Chocoton',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Chocoton',
      price: 25,
      delivery_time: '15 min',
      delivery_price: 2.0,
      imgUrl:'Chocoton.jpg'
    },
    {
      id:100,
      name:'Guarana 3L',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Guarana 3L',
      price: 10.0,
      delivery_time: '15 min',
      delivery_price: 2.5,
      imgUrl:'Guarana.jpg'
    },
    {
      id:101,
      name:'Agua San Mateo Bidon 7L',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Agua Sin Gas Mineral San Mateo Bidón 7 L',
      price: 8.9,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Aguasanmateo7l.jpg'
    },
    {
      id:102,
      name:'Sixpack Coca Cola 300ml',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Sixpack Gaseosa Coca Cola Sin Azúcar Botella 300ml',
      price: 10.0,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'SixpackCocaCola300ml.jpg'
    },
    {
      id:103,
      name:'Leche pasteurizada 900ml',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Leche Entera Pasteurizada Danlac Botella 900ml',
      price: 7.6,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Lechepasteurizada900ml.jpg'
    },
    {
      id:104,
      name:'Carne Nacional x kg',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Carne para Guiso Nacional x kg',
      price: 33.9,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Carnenacional.jpg'
    },
    {
      id:105,
      name:'Queso Edam 180g',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Queso Edam en Tajadas Braedt 180g',
      price: 11.9,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Quesoedam180g.jpg'  
    },
    {
      id:106,
      name:'Pan Francés 5und',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Pan Francés Especial 5un',
      price: 2.8,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Panfrances.jpg'
    },
    {
      id:107,
      name:'Naranja para Jugo x kg',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Naranja para Jugo Chanchamayo x kg',
      price: 2.99,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Naranjajugoxkg.jpg'  
    },
    {
      id:108,
      name:'Sixpack Leche Laive 400g',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Sixpack Leche Concentrada Sin Lactosa Laive Botella 400g',
      price: 24.95,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Sixpacklechelaive400g.jpg'
    },
    {
      id:109,
      name:'Papel Higienico Elite 8und',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Papel Higiénico Doble Hoja Elite Ultra 8un.',
      price: 27.0,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Papelhigienicoelite8und.jpg'  
    },
    {
      id:110,
      name:'Jabon Bolivar 380g',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Jabón para Ropa Bolívar Floral 380g',
      price: 5.7,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'Jabonbolivar380g.jpg'
    },
    {
      id:111,
      name:'Hamburgesas 4und',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Hamburguesas Parrilleras Wong Caja 4un',
      price: 26.9,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'haburgesas6und.jpg'
    },
    {
      id:112,
      name:'Queso en Tajadas 500g',
      origin_name: { id:'wong', name:'Wong' },
      description: 'Queso Edam Gloria en Tajadas 500g',
      price: 26,
      delivery_time: '20 min',
      delivery_price: 2.5,
      imgUrl:'quesotajadas500g.jpg'
    },
];