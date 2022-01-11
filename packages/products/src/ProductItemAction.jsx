import { useRecoilState } from 'recoil';
import RenderCounter from '@aosm/common/RenderCounter';

import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import { cartItemState } from '@aosm/cart/cartState';

const ProductItemAction = ({ product }) => {
  const [productCount, dispatch] = useRecoilState(cartItemState(product.id));

  const addToCart = ({ id }) => {
    dispatch('INCR');
  };

  const removeFromCart = ({ id }) => {
    dispatch('DECR');
  };

  return (
    <>
      {productCount > 0 ? (
        <div className="col-span-2 grid grid-cols-3 content-center place-items-center">
          <button className="w-4" onClick={() => removeFromCart(product)}>
            <MinusIcon />
          </button>
          <div className="border border-gray-700 text-center w-full">
            {productCount}
          </div>
          <button className="w-4" onClick={() => addToCart(product)}>
            <PlusIcon />
          </button>
        </div>
      ) : (
        <div className="col-span-2 grid grid-cols-1 content-center justify-items-end">
          <button className="w-8" onClick={() => addToCart(product)}>
            <PlusIcon className="hover:text-green-600" />
          </button>
        </div>
      )}
      <RenderCounter />
    </>
  );
};

export default ProductItemAction;
