import { atom, atomFamily } from 'recoil';

export const Products = [
  {
    id: 'coca-cola-750',
    title: 'Coca-Cola',
    quantity: '750ml',
    price: '40',
    package: 'PET Bottle',
    preview:
      'https://m.media-amazon.com/images/I/517reIu-eXL._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 'coca-cola-1250',
    title: 'Coca-Cola',
    quantity: '1.25L',
    price: '65',
    package: 'PET Bottle',
    preview:
      'https://m.media-amazon.com/images/I/61QKKsgtVqL._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 'coca-cola-2250',
    title: 'Coca-Cola',
    quantity: '2.25L',
    price: '90',
    package: 'PET Bottle',
    preview:
      'https://m.media-amazon.com/images/I/51vz+BSFhBL._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 'coca-cola-zero-soft-drink',
    title: 'Coca-Cola Zero Soft Drink',
    quantity: '300ml',
    price: '40',
    package: 'Can',
    preview:
      'https://m.media-amazon.com/images/I/51iG6zjiFBL._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 'coca-cola-diet-soft-drink',
    title: 'Coca-Cola Diet Soft Drink',
    quantity: '300ml',
    price: '35',
    package: 'Can',
    preview:
      'https://m.media-amazon.com/images/I/515Wuv2YyWL._AC_UL640_FMwebp_QL65_.jpg'
  },
  {
    id: 'thums-up-300',
    title: 'Thums Up Soft Drink',
    quantity: '300ml',
    price: '40',
    package: 'Can',
    preview:
      'https://m.media-amazon.com/images/I/517bf08QYIL._AC_UL640_FMwebp_QL65_.jpg'
  }
];

const productState = atom({
  key: 'product-state',
  default: Products
});

export default productState;

export const productList = atomFamily({
  key: 'products',
  default: (id) => Products.find((product) => product.id === id)
});
