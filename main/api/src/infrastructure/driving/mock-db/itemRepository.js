import Item from '../../../domain/item.model.js';

const mockDB = [
  new Item({
    id: 'MLA111222',
    title: 'iPhone 13 128GB',
    price: { currency: 'ARS', amount: 800000, decimals: 0 },
    picture: 'https://tienda.personal.com.ar/images/720/webp/Iphone13_Midnight_347793ce46.png',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 23,
    description:
      'El iPhone 13 tiene un sistema de dos cámaras que te permite tomar fotos con ultra gran angular, modo Noche y una calidad de video increíble. Y la pantalla Super Retina XDR es súper brillante para que lo veas todo con un nivel de detalle espectacular.',
    category: 'iphone',
  }),
  new Item({
    id: 'MLA111223',
    title: 'iPhone 14 Pro 256GB',
    price: { currency: 'ARS', amount: 1250000, decimals: 0 },
    picture: 'https://tienda.personal.com.ar/images/720/webp/i_Phone_14_Starlight_a111ed7268.png',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 10,
    description:
      'El iPhone 14 Pro tiene una nueva cámara gran angular de 48 MP para que puedas capturar un nivel de detalle increíble. Y el nuevo Dynamic Island transforma la forma en que interactúas con las notificaciones.',
    category: 'iphone',
  }),
  new Item({
    id: 'MLA111224',
    title: 'iPhone 12 Mini 64GB - Usado',
    price: { currency: 'ARS', amount: 450000, decimals: 0 },
    picture:
      'https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg',
    condition: 'used',
    free_shipping: false,
    sold_quantity: 5,
    description:
      'iPhone 12 mini. Chip A14 Bionic, el más rápido en un smartphone. Pantalla OLED de borde a borde. Ceramic Shield, cuatro veces más resistente a las caídas. Y modo Noche en todas las cámaras.',
    category: 'iphone',
  }),
  new Item({
    id: 'MLA111225',
    title: 'iPhone 13 Pro Max 512GB',
    price: { currency: 'ARS', amount: 1400000, decimals: 0 },
    picture: 'https://m.media-amazon.com/images/I/51ysuS9QwTL.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 8,
    description:
      'El iPhone 13 Pro Max tiene el sistema de cámaras Pro más avanzado de todos los tiempos. Pantalla Super Retina XDR con ProMotion. Chip A15 Bionic para un rendimiento ultrarrápido. Y la mayor duración de batería en un iPhone.',
    category: 'iphone',
  }),

  new Item({
    id: 'MLA333444',
    title: 'Samsung Galaxy S22 128GB',
    price: { currency: 'ARS', amount: 750000, decimals: 0 },
    picture:
      'https://images.samsung.com/ar/smartphones/galaxy-s22/buy/S22_ColorSelection_PhantomBlack_MO.jpg',
    condition: 'new',
    free_shipping: false,
    sold_quantity: 15,
    description:
      'El Galaxy S22 es el smartphone que hará que todos los días sean épicos. Está diseñado con una cámara de nivel profesional, un procesador ultrarrápido y una batería que dura todo el día.',
    category: 'samsung',
  }),
  new Item({
    id: 'MLA333445',
    title: 'Samsung Galaxy S23 Ultra 256GB',
    price: { currency: 'ARS', amount: 1300000, decimals: 0 },
    picture:
      'https://i5.walmartimages.com/seo/Pre-Owned-Samsung-Galaxy-S23-Ultra-5G-SM-S918U1-256GB-Black-US-Model-Factory-Unlocked-Cell-Phone-Very-Refurbished-Good_f79cd206-c28d-4ccf-8f97-91710d49e920.b4e45ca2092a3769bf8842ef96ec25e4.jpeg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 30,
    description:
      'Descubre el Galaxy S23 Ultra, con un diseño simétrico, materiales ecológicos y el S Pen integrado. Equipado con la cámara más avanzada de Galaxy y un procesador Snapdragon 8 Gen 2.',
    category: 'samsung',
  }),
  new Item({
    id: 'MLA333446',
    title: 'Samsung Galaxy A54 5G 128GB',
    price: { currency: 'ARS', amount: 310000, decimals: 0 },
    picture:
      'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a546ezkfaro/gallery/ar-galaxy-a54-5g-sm-a546-455651-sm-a546ezkfaro-536287468?$684_547_PNG$',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 55,
    description:
      'Galaxy A54 5G. Increíble es para todos. Diseño minimalista, cámara OIS y una batería que dura más de dos días.',
    category: 'samsung',
  }),
  new Item({
    id: 'MLA333447',
    title: 'Samsung Galaxy Z Flip 4 128GB - Usado',
    price: { currency: 'ARS', amount: 620000, decimals: 0 },
    picture:
      'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-f721bzakaro/gallery/ar-galaxy-z-flip4-f721-sm-f721bzakaro-thumb-534303780',
    condition: 'used',
    free_shipping: true,
    sold_quantity: 3,
    description:
      'El smartphone plegable que te permite capturar fotos desde cualquier ángulo. Compacto y resistente, con una pantalla principal de 6.7 pulgadas.',
    category: 'samsung',
  }),

  new Item({
    id: 'MLA987654',
    title: 'Apple iPod Touch 32GB',
    price: { currency: 'ARS', amount: 1980, decimals: 0 }, // Mantengo tu precio original
    picture:
      'https://i5.walmartimages.com/seo/Apple-iPod-touch-7th-Generation-32GB-Space-Gray-New-Model_d1e08ae1-da27-4907-8db4-a3bf36dd658d_1.d9956add7eb76d7f447695ede658a89c.jpeg',
    condition: 'used',
    free_shipping: true,
    sold_quantity: 110,
    description:
      'El iPod touch es ideal para llevar tu colección de música en el bolsillo. También puedes entrar al App Store para descargar juegos y apps increíbles.',
    category: 'ipod',
  }),
  new Item({
    id: 'MLA987655',
    title: 'Apple iPod Nano 7ma Gen 16GB',
    price: { currency: 'ARS', amount: 1500, decimals: 0 },
    picture:
      'https://i0.wp.com/www.inovamusicnet.com/wp-content/uploads/2023/01/31DuRRRGhfL._AC_US600_.jpg?fit=600%2C600&ssl=1',
    condition: 'used',
    free_shipping: false,
    sold_quantity: 45,
    description:
      'El iPod nano más delgado hasta ahora, con solo 5.4 mm. Pantalla Multi-Touch de 2.5 pulgadas. Bluetooth integrado para parlantes y auriculares inalámbricos.',
    category: 'ipod',
  }),
  new Item({
    id: 'MLA987656',
    title: 'Apple iPod Classic 160GB Negro',
    price: { currency: 'ARS', amount: 3500, decimals: 0 },
    picture:
      'https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPod-7th-Gen-Classic-160GB-Black-Audio-Video-Player_8e5902ac-1940-4045-8c4f-d2b9c39ebc1d.e2d3c98c7a369a3e95496ee090be02aa.jpeg',
    condition: 'used',
    free_shipping: true,
    sold_quantity: 80,
    description:
      'Todo un clásico. Almacena hasta 40,000 canciones, 200 horas de video o 25,000 fotos. La icónica Click Wheel y una cubierta de metal resistente.',
    category: 'ipod',
  }),
  new Item({
    id: 'MLA987657',
    title: 'Apple iPod Shuffle 4ta Gen 2GB',
    price: { currency: 'ARS', amount: 950, decimals: 0 },
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79EXXzPKGQBrMz2j-gYR1KVcDOZ2yIUkJ1Q&s',
    condition: 'used',
    free_shipping: false,
    sold_quantity: 150,
    description:
      'El iPod Shuffle es perfecto para el gimnasio. Controles con botones, VoiceOver que te dice el nombre de la canción y hasta 15 horas de batería.',
    category: 'ipod',
  }),

  new Item({
    id: 'MLA456789',
    title: 'Motorola Edge 30 Neo 128GB',
    price: { currency: 'ARS', amount: 180000, decimals: 0 },
    picture: 'https://http2.mlstatic.com/D_NQ_NP_814112-MLA52431110413_112022-O.webp',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 40,
    description:
      'El Motorola Edge 30 Neo es un smartphone compacto y ligero con un diseño elegante. Cuenta con una pantalla pOLED de 120 Hz, un sistema de cámaras de 64 MP y carga TurboPower™ de 68 W.',
    category: 'motorola',
  }),
  new Item({
    id: 'MLA456790',
    title: 'Motorola Moto G84 5G 256GB',
    price: { currency: 'ARS', amount: 210000, decimals: 0 },
    picture:
      'https://armoto.vtexassets.com/arquivos/ids/165314-800-800?v=638754270025370000&width=800&height=800&aspect=true',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 28,
    description:
      'Descubre el Moto G84 5G. Colores vibrantes con el nuevo color Pantone, cámara de 50 MP con OIS y tecnología Ultra Pixel, y pantalla pOLED de 6.5 pulgadas.',
    category: 'motorola',
  }),
  new Item({
    id: 'MLA456791',
    title: 'Motorola Razr 40 Ultra 512GB',
    price: { currency: 'ARS', amount: 480000, decimals: 0 },
    picture: 'https://images.fravega.com/f1000/6826ed07df24afd3333b70c008e0f7ba.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 12,
    description:
      'El nuevo Motorola Razr 40 Ultra cuenta con la pantalla externa más grande y avanzada en un plegable. Graba videos en manos libres y captura selfies de alta calidad.',
    category: 'motorola',
  }),
  new Item({
    id: 'MLA456792',
    title: 'Motorola Moto G53 128GB - Usado',
    price: { currency: 'ARS', amount: 110000, decimals: 0 },
    picture: 'https://http2.mlstatic.com/D_817207-MLA87574252950_072025-O.jpg',
    condition: 'used',
    free_shipping: false,
    sold_quantity: 7,
    description:
      'Disfruta de la velocidad 5G con el Moto G53. Sistema de cámaras de 50 MP, pantalla fluida de 120 Hz y una potente batería de 5000 mAh.',
    category: 'motorola',
  }),
];

const itemRepository = {
  /**
   * Busca productos por título, categoría o un alias de categoría.
   * @param {string} query - El término de búsqueda.
   * @returns {Array} - Un array de productos que coinciden.
   */
  search: query => {
    if (!query) {
      return [];
    }
    const lowerCaseQuery = query.toLowerCase();

    const categoryAliases = {
      smartphones: ['iphone', 'samsung', 'motorola'],
      celulares: ['iphone', 'samsung', 'motorola'],
    };

    const categoriesToSearch = categoryAliases[lowerCaseQuery] || [lowerCaseQuery];

    return mockDB.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(lowerCaseQuery);
      const categoryMatch = categoriesToSearch.includes(item.category.toLowerCase());
      return titleMatch || categoryMatch;
    });
  },

  /**
   * Busca un producto por su ID.
   * @param {string} id - El ID del producto.
   * @returns {Object|undefined} - El producto encontrado o undefined.
   */
  findById: id => {
    return mockDB.find(item => item.id === id);
  },
};

export default itemRepository;
