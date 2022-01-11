import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { formatCurrency } from '@aosm/common/utils';
import CartItem from './CartItem';
import { cartSummary, productIDsInCart } from './cartState';

const Cart = () => {
  const productIDs = useRecoilValue(productIDsInCart);
  const { count: cartSize, value } = useRecoilValue(cartSummary);

  if (cartSize === 0) {
    return (
      <section className="h-32 grid content-center justify-center text-gray400 ">
        <div className="text-xl font-medium mb-10">You Cart is lonely!</div>
        <div className="text-center">
          Start{' '}
          <Link to="/shop" className="inline-block text-blue-500 underline ">
            shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded p-10">
      {productIDs.map((id) => (
        <CartItem id={id} key={id} />
      ))}
      <section className="grid grid-cols-8 mb-10 border-t border-gray-400 p-5 pb-0">
        <div className="col-span-7 flex items-center justify-between">
          <span>
            <Link to="/shop" className="text-blue-700 underline">
              Continue shopping
            </Link>
          </span>
          <span className="text-2xl ">Total:</span>
        </div>
        <div className="col-span-1 text-right text-2xl ">
          {formatCurrency(value)}
        </div>
      </section>
    </section>
  );
};

export default Cart;
