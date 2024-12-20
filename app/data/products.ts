export type Product = {
  id: string;
  title: string;
  brand: string;
  price: number;
  category: string;
  image?: string;
  isRecommended?: boolean;
  isPopular?: boolean;
};

export type Category = {
  id: string;
  title: string;
};

export const categories: Category[] = [
  { id: 'cream', title: 'Cream' },
  { id: 'moisturizer', title: 'Moisturizers' },
  { id: 'lotion', title: 'Lotion' },
  { id: 'serum', title: 'Serum' },
  { id: 'sunscreen', title: 'Sunscreen' },
];

export const products: Product[] = [
  // Popular Products (Sabit)
  {
    id: '1',
    title: 'Shade Palette',
    brand: 'Naked',
    price: 25.00,
    category: 'moisturizer',
    isPopular: true,
    image: 'https://www.simpleskincare.in/cdn/shop/articles/Here_s_Why_You_Need_A_Night_Cream_In_Your_PM_Routine_1200x600_crop_center.jpg?v=1712562771',
  },
  {
    id: '2',
    title: 'Curology',
    brand: 'Curology',
    price: 20.00,
    category: 'serum',
    isPopular: true,
    image: 'https://www.reneerouleau.com/cdn/shop/products/ReneeRouleau-SkinType3-Essentials-1024x1024.jpg?v=1658934506',
  },
  {
    id: '3',
    title: 'Ultra Facial Cream',
    brand: "Kiehl's",
    price: 32.00,
    category: 'cream',
    isPopular: true,
    image: 'https://www.theluxeinsider.com/wp-content/uploads/2023/05/drunk-elephant-skincare.jpg',
  },

  // Recommended Products (Kategoriye göre değişecek)
  {
    id: '4',
    title: 'Hydrating Cream',
    brand: 'CeraVe',
    price: 15.99,
    category: 'cream',
    isRecommended: true,
    image: 'https://news.northeastern.edu/wp-content/uploads/2024/01/Skincare1400.jpg?w=1024',
  },
  {
    id: '5',
    title: 'Daily Moisturizer',
    brand: 'Cetaphil',
    price: 12.99,
    category: 'moisturizer',
    isRecommended: true,
    image: 'https://www.drsheths.com/cdn/shop/files/GlowingSkincareRegimenCombo_1st_2_600x.jpg?v=1702462931',
  },
  {
    id: '6',
    title: 'Vitamin C Serum',
    brand: 'The Ordinary',
    price: 18.99,
    category: 'serum',
    isRecommended: true,
    image: 'https://images.surferseo.art/fdc14bc4-971d-4ef1-b5d8-ae385a899d76.jpeg',
  },
  {
    id: '7',
    title: 'Ultra Light Lotion',
    brand: 'Neutrogena',
    price: 14.99,
    category: 'lotion',
    isRecommended: true,
    image: 'https://vegoutmag.com/wp-content/uploads/2023/03/Bubble-feature.jpg',
  },
  {
    id: '8',
    title: 'UV Clear Sunscreen',
    brand: 'EltaMD',
    price: 37.00,
    category: 'sunscreen',
    isRecommended: true,
    image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-start-a-skincare-line-glow-oasis.jpg?v=1666895341',
  },
  {
    id: '9',
    title: 'Hyaluronic Acid Serum',
    brand: 'La Roche-Posay',
    price: 34.99,
    category: 'serum',
    isRecommended: true,
    image: 'https://www.thebeautyblotter.com/wp-content/uploads/2023/05/IMG_8410.jpg',
  },
  {
    id: '10',
    title: 'Mineral Sunscreen',
    brand: 'Supergoop',
    price: 38.00,
    category: 'sunscreen',
    isRecommended: true,
    image: 'https://hellobubble.com/cdn/shop/files/PDP_DayNightRoutine1_LEVELUP_1200x1435.jpg?v=1701713727',
  },
  {
    id: '11',
    title: 'Nourishing Lotion',
    brand: 'Eucerin',
    price: 16.99,
    category: 'lotion',
    isRecommended: true,
    image: 'https://m.media-amazon.com/images/I/61kqdtuuRCL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '12',
    title: 'Retinol Serum',
    brand: 'Paula\'s Choice',
    price: 54.00,
    category: 'serum',
    isRecommended: true,
    image: 'https://www.skinician.com/cdn/shop/articles/Affordable-skincare-for-mature-skin-for-every-budget.jpg?v=1687535494&width=1100',
  },

  // Additional Creams
  {
    id: '13',
    title: 'Ceramide Cream',
    brand: 'Dr. Jart+',
    price: 48.00,
    category: 'cream',
    isRecommended: true,
    image: 'https://static.independent.co.uk/2024/08/29/17/Teen-skincare-hero-indybest.jpg',
  },
  {
    id: '14',
    title: 'Cica Cream',
    brand: 'Innisfree',
    price: 24.00,
    category: 'cream',
    isRecommended: true,
    image: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Library-Sites-HC-content/default/dwc760b760/blog/11182020/sensitive-skin-blog.jpg?sw=925',
  },

  // Additional Moisturizers
  {
    id: '15',
    title: 'Hydro Boost',
    brand: 'Neutrogena',
    price: 19.99,
    category: 'moisturizer',
    isRecommended: true,
    image: 'https://www.pravadaprivatelabel.com/cdn/shop/files/Natural_Hair_Care_Collection_by_Pravada_-_Private_Label_Shampoo_Conditioner_Hair_Mask_Styling_Products.jpg?v=1730743243&width=3502',
  },
  {
    id: '16',
    title: 'Water Gel',
    brand: 'Belif',
    price: 38.00,
    category: 'moisturizer',
    isRecommended: true,
    image: 'https://theloveco.in/cdn/shop/articles/10-must-have-luxury-body-care-products-the-love-co.jpg?v=1729317123',
  },

  // Additional Serums
  {
    id: '17',
    title: 'Niacinamide Serum',
    brand: 'The Inkey List',
    price: 14.99,
    category: 'serum',
    isRecommended: true,
    image: 'https://theskincarecompany.com.au/wp-content/uploads/2022/05/THE-SKINCARE-COMPANY_Medi-Facial-1_LR-768x512.jpg',
  },
  {
    id: '18',
    title: 'Peptide Serum',
    brand: 'NIOD',
    price: 45.00,
    category: 'serum',
    isRecommended: true,
    image: 'https://bbox.com.au/cdn/shop/files/completeskincarebundle1000x1000.jpg?v=1721107152',
  },

  // Additional Lotions
  {
    id: '19',
    title: 'Daily Lotion',
    brand: 'Aveeno',
    price: 11.99,
    category: 'lotion',
    isRecommended: true,
    image: 'https://zenmed.com/cdn/shop/products/combinationskin_db3cdad8-0d7e-4485-aef1-d8f9e28a2dfa.png?v=1680717073',
  },
  {
    id: '20',
    title: 'Advanced Repair',
    brand: 'CeraVe',
    price: 16.99,
    category: 'lotion',
    isRecommended: true,
    image: 'https://i.insider.com/601029716dfbe10018dfff12?width=1200&format=jpeg',
  },

  // Additional Sunscreens
  {
    id: '21',
    title: 'UV Aqua Rich',
    brand: 'Biore',
    price: 15.99,
    category: 'sunscreen',
    isRecommended: true,
    image: 'https://hips.hearstapps.com/hmg-prod/images/malin-66836e35235a2.jpeg?crop=1.00xw:1.00xh;0,0&resize=1120:*',
  },
  {
    id: '22',
    title: 'Ultra Sun Fluid',
    brand: 'La Roche-Posay',
    price: 33.50,
    category: 'sunscreen',
    isRecommended: true,
    image: 'https://m.origins.com/media/export/cms/homepage/test/PLANTFUSION_MOBILE-updated.jpg',
  }
]; 