import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import produce from 'immer';

import { productList } from '@aosm/products/productState';

export const productIDsInCart = atom({
  key: 'productIDsInCart',
  default: []
});

export const cartItemCount = atomFamily({
  key: 'cartItem',
  default: 0
});

export const cartSummary = selector({
  key: 'cartSummary',
  get: ({ get }) => {
    const productIDs = get(productIDsInCart);
    const productsState = productIDs.map((id) => {
      const count = get(cartItemCount(id));
      const { price } = get(productList(id));

      return {
        count,
        value: count * price
      };
    });

    return productsState.reduce(
      (current, acc) => {
        return {
          count: current.count + acc.count,
          value: current.value + acc.value
        };
      },
      { count: 0, value: 0 }
    );
  }
});

export const cartItemState = selectorFamily({
  key: 'cartState',
  get:
    (id) =>
    ({ get }) => {
      return get(cartItemCount(id));
    },
  set:
    (id) =>
    ({ get, set }, action) => {
      const product = cartItemCount(id);
      const productCount = get(product);

      let updatedCount;

      switch (action) {
        case 'INCR':
          updatedCount = productCount + 1;
          break;

        case 'DECR':
          updatedCount = productCount - 1;
          break;

        case 'DEL':
          updatedCount = 0;
          break;

        default:
      }

      set(product, updatedCount);

      // Add id to list
      if (productCount === 0) {
        set(
          productIDsInCart,
          produce((draft) => {
            draft.push(id);
          })
        );
      }

      // Remove id from list
      if (updatedCount === 0) {
        set(productIDsInCart, (state) => state.filter((pID) => pID !== id));
      }
    }
});

export const productsInCart = selector({
  key: 'cartAtom',
  get: ({ get }) => {
    const productIDs = get(productIDsInCart);
    const products = productIDs.map((id) => get(productList(id)));

    return products;
  }
});
