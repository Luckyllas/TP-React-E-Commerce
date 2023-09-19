import img1 from "../image/Productos/achavalQuimera.png";
import img2 from "../image/Productos/alpasionGrandCabFranc.png";
import img3 from "../image/Productos/angelica-cab-franc.webp";
import img4 from "../image/Productos/angelica-malbec.webp";
import img5 from "../image/Productos/angelica-zapata-chardonnay.webp";
import img6 from "../image/Productos/baron-b-canva1.webp";
import img7 from "../image/Productos/baron-b-extra-brut.webp";
import img8 from "../image/Productos/baron-b-rose.webp";
import img9 from "../image/Productos/cheval-des-andes.png";
import img10 from "../image/Productos/de-mono-rojo-premium-blend.webp";
import img11 from "../image/Productos/de-mono-super-cab-franc.webp";
import img12 from "../image/Productos/decero-malbec.png";
import img13 from "../image/Productos/el-enemigo-chardonnay.webp";
import img14 from "../image/Productos/enemigo-bonarda.png";
import img15 from "../image/Productos/gran-enemigo-blend1.webp";
import img16 from "../image/Productos/gran-enemigo-cab-franc.webp";
import img17 from "../image/Productos/gran-enemigo-gualtallary.webp";
import img18 from "../image/Productos/gran-enemigo-malbec.webp";
import img19 from "../image/Productos/gran-enemigo-vineyard-agrelo.png";
import img20 from "../image/Productos/imperfecto.png";
import img21 from "../image/Productos/luca-old-vine-malbec.webp";
import img22 from "../image/Productos/luca-pinot-noir.png";
import img23 from "../image/Productos/nicolas-catena-zapata-2017.png";
import img24 from "../image/Productos/pulenta-estate-chardonnay.webp";
import img25 from "../image/Productos/pulenta-estate-malbec.webp";
import img26 from "../image/Productos/pulenta-gran-cabernet.webp";
import img27 from "../image/Productos/pulenta-gran-corte.png";
import img28 from "../image/Productos/pulenta-red-blend.webp";
import img29 from "../image/Productos/rosell-boher-rose.png";
import img30 from "../image/Productos/zarzal-t-u-pinot-noir.png";
import img31 from "../image/Productos/zorzal-tu-malbec.png";
import img32 from "../image/Productos/zuccardi-amphora-project.webp";

/*id,
img= nombre de la imagen
bodega = nombre Bodega
Etiqueta= nombre del vino
uva = tipo de vino (Malbec, Pinot,)
tipo = (Blanco, Tinto, Rose, Espumantes)
Region = (Lugar donde se produce : Mendoza, cuyo etc..)
precio = xx.xxx
*/

export const catalogo = [
    {
      id: 1,
      img: img1,
      bodega: "Achaval Ferrer",
      etiqueta: 'Quimera',
      uva : "Blend",
      region : "Mendoza",
      tipo : "tinto",
      precio: '18.000',
    },
    {
      id: 2,
      img: img2,
      bodega: "Alpasion",
      etiqueta: "Alpasion Grand Cabernet Franc",
      uva: "Cabernet Franc",
      region : "Mendoza",
      tipo : "tinto",
      precio: '17.900',
    },
    {
      id: 3,
      img: img3,
      Bodega: "Catena Zapata",
      etiqueta: " Angelica Zapata Cabernet Franc",
      uva : "Cabernet Franc",
      region : "Mendoza",
      tipo : "tinto",
      precio: '11.400',
    },
    {
      id: 4,
      img: img4,
      Bodega: "Catena Zapata",
      etiqueta: "Angelica Zapata Malbec",
      uva : "Malbec",
      region : "Mendoza",
      tipo : "tinto",
      precio: '18.200',
    },
    {
      id: 5,
      img: img5,
      Bodega: "Catena Zapata",
      etiqueta: "Angelica Zapata Chardonnay",
      uva : "Chardonnay",
      region : "Mendoza",
      tipo : "Blanco",
      precio: '11.600',
    },
    {
      id: 6,
      img: img6,
      Bodega: "Chandon",
      etiqueta: "Baron B Heritage Assamble",
      uva : "Chardonnay/Pinot Noir",
      region : "Mendoza",
      tipo : "Espumante",
      precio: '22.570',
    },
    {
      id: 7,
      img:img7,
      Bodega: "Chandon",
      etiqueta : "Baron B Extra Brut",
      uva : "Chardonnay/Pinot Noir",
      region : "Mendoza",
      tipo : "Espumante",
      precio: '7.710',
    },
    {
      id: 8,
      img: img8,
      Bodega: "Chandon",
      etiqueta : "Baron B Rose",
      uva : "Blend",
      region : "Mendoza",
      tipo : "Espumante",
      precio: '8.830',
    },
    {
      id: 9,
      img: img9,
      Bodega: "Cheval Des Andes",
      etiqueta : "Cheval Des Andes",
      uva : "Blend",
      region : "Mendoza",
      tipo : "Tinto",
      precio: '42.850',
    },
    {
      id: 10,
      img: img10,
      Bodega: "De Moño Rojo",
      etiqueta : "De Moño Rojo Premiun Blend",
      uva : "Blend",
      region : "Mendoza",
      tipo : "Tinto",
      precio: '3.360',
    },
    {
      id: 11,
      img: img11,
      Bodega: "De Moño Rojo",
      etiqueta : "De Moño Rojo Cabernet Franc",
      uva : "Blend",
      region : "Mendoza",
      tipo : "Tinto",
      precio: '5.700',
    },
    {
      id: 12,
      img: img12,
      Bodega: "Finca Decero",
      etiqueta : "Decero Malbec",
      uva : "Malbec",
      region : "Mendoza",
      tipo : "Tinto",
      precio: '11.940',
    },
    {
      id: 13,
      img: img13,
      Bodega: "Aleanna",
      etiqueta : "El Enemigo Chardonnay",
      uva : "Chardonnay",
      region : "Mendoza",
      tipo : "Blanco",
      precio: '12.900',
    },
    {
      id: 14,
      img: img14,
      Bodega: "Aleanna",
      etiqueta : "El Enemigo Bonarda",
      uva : "Bonarda",
      region : "Mendoza",
      tipo : "tinto",
      precio: '12.100',
    },
    {
      id: 15,
      img: img15,
      Bodega: "Aleanna",
      etiqueta : "Gran Enemigo Blend",
      uva : "Blend",
      region : "Mendoza",
      tipo : "Tinto",
      precio: '22.700',
    },
    {
      id: 16,
      img: img16,
      Bodega: "Aleanna",
      etiqueta : "Gran Enemigo Cabernet Franc",
      uva : "Cabernet Franc",
      region : "Mendoza",
      tipo : "Tinto",
      precio: '18.400',
    },
    {
        id: 17,
        img: img17,
        Bodega: "Aleanna",
        etiqueta : "Gran Enemigo Galtallary",
        uva : "Cabernet Franc",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '30.000',
      },
      {
        id: 18,
        img: img18,
        Bodega: "Aleanna",
        etiqueta : "Gran Enemigo Malbec",
        uva : "Malbec",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '22.400',
      },
      {
        id: 19,
        img: img19,
        Bodega: "Aleanna",
        etiqueta : "Gran Enemigo Vinayard Agrelo",
        uva : "Cabernet Franc",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '24.400',
      },
      {
        id: 20,
        img: img20,
        Bodega: "tres 14",
        etiqueta : "Imperfecto",
        uva : "Malbec - Cabernet Franc",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '14.100',
      },
      {
        id: 21,
        img: img21,
        Bodega: "Laura Catena",
        etiqueta : "Luca Old Wine Malbec",
        uva : "Malbec",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '14.270',
      },
      {
        id: 22,
        img: img22,
        Bodega: "Laura Catena",
        etiqueta : "Luca Pinot Noir",
        uva : "Pinot Noir",
        region : "Mendoza",
        tipo : "Tinto",      
        precio: '12.175',
      },
      {
        id: 23,
        img: img23,
        Bodega: "Catena Zapata",
        etiqueta : "Nicolas Catena Zapata 2017",
        uva : "Blend",
        region : "Mendoza",
        tipo : "Tinto",    
        precio: '53.500',
      },
      {
        id: 24,
        img: img24,
        Bodega: "Pulenta State",
        etiqueta : "Pulenta State Chardonnay",
        uva : "Chardonnay",
        region : "Mendoza",
        tipo : "Blanco", 
        precio: '11.900',
      },
      {
        id: 25,
        img: img25,
        Bodega: "Pulenta State",
        etiqueta : "Pulenta State Malbec",
        uva : "Malbec",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '10.900',
      },
      {
        id: 26,
        img: img26,
        Bodega: "Pulenta State",
        etiqueta : "Pulenta State Grand Cabernet Franc",
        uva : "Cabernet Franc",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '32.100',
      },
      {
        id: 27,
        img: img27,
        Bodega: "Pulenta State",
        etiqueta : "Pulenta State Gran Corte",
        uva : "Blend",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '38.000',
      },
      {
        id: 28,
        img: img28,
        Bodega: "Pulenta State ",
        etiqueta : "Pulenta State Red Blend",
        uva : "Blend",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '10.500',
      },
      {
        id: 29,
        img: img29,
        Bodega: "Rosell Boher",
        etiqueta : "Rosell Boher Rose",
        uva : "Blend",
        region : "Mendoza",
        tipo : "Espumante",
        precio: '18.500',
      },
      {
        id: 30,
        img: img30,
        Bodega: "Zorzal wines",
        etiqueta : "Zorzal Terroir Unico Pinot Noir",
        uva : "Pinot Noir",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '4.100',
      },
      {
        id: 31,
        img: img31,
        Bodega: "Zorzal wines",
        etiqueta : "Zorzal Terroir Unico Malbec",
        uva : "Malbec",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '4.100',
      },
      {
        id: 32,
        img: img32,
        Bodega: "Zuccardi",
        etiqueta : "Zuccardi The Aphora Proyect",
        uva : "Malbec",
        region : "Mendoza",
        tipo : "Tinto",
        precio: '40.200',
      },
      
  ];