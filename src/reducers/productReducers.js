import { FETCH_PRODUCTS } from '../constants';

let productsArray = {
  products: [
    {
      _id: 'phone1',
      image: '/images/samsung-galaxy-a31.jpg',
      title: 'This is samsung galaxy a31',
      description:
        'This phone have 6 inch screen 4g , huge battery timing , and belongs to Samsung brand',
      price: 40000,
    },
    {
      _id: 'iphone11',
      image: '/images/iphone11.jpg',
      title: 'This is iphone 11',
      description:
        'This phone have 7 inch screen with 4g , huge battery timing , and belongs to Iphone brand',
      price: 110000,
    },
    {
      _id: 'huawei',
      image: '/images/huawei.jpg',
      title: 'This is huawei p20',
      description:
        'This phone have 6 inch screen 4g , huge battery timing , and belongs to Huawei brand',
      price: 50000,
    },
    {
      _id: 'iphone',
      image: '/images/iphone11.jpg',
      title: 'this phone is iphone 8 plus',
      description:
        'This phone have 6 inch screen 4g , huge battery timing , and belongs to Iphone brand',
      price: 80000,
    },
  ],
};

export const productsReducer = (state = { productsArray }, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: productsArray.products, filteredItems: action.payload };
    default:
      return state;
  }
};
