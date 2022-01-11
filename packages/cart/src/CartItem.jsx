import { useRecoilValue, useRecoilState } from 'recoil';
import { formatCurrency } from '@aosm/common/utils';
import { productList } from '@aosm/products/productState';
import { cartItemState } from './cartState';

const CartItem = ({ id }) => {
  const product = useRecoilValue(productList(id));
  const [productCount, dispatch] = useRecoilState(cartItemState(id));

  const onDelete = () => {
    dispatch('DEL');
  };

  return (
    <section className="grid grid-cols-8 mb-10  pr-5">
      <picture className="aspect-w-5 aspect-h-5">
        <img
          src={product.preview}
          alt={product.title}
          className="w-full h-full object-center object-contain"
        />
      </picture>
      <div className="col-span-6">
        <h2 className="text-xl">
          {product.title}, {product.quantity} {product.package}
        </h2>
        <p className="mt-1 text-lg font-medium text-gray-900 col-span-7 pt-5">
          {formatCurrency(product.price)} x {productCount}
        </p>
        <button className="underline mt-3" onClick={onDelete}>
          Delete
        </button>
      </div>
      <div className="col-span-1 flex justify-end text-2xl">
        {formatCurrency(product.price * productCount)}
      </div>
    </section>
  );
};

export default CartItem;
