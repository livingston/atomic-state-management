import { useRecoilValue } from 'recoil';
import { NavLink } from 'react-router-dom';
import RenderCounter from '@aosm/common/RenderCounter';
import { formatCurrency } from '@aosm/common/utils';
import { cartSummary } from './cartState';

const HeaderCart = () => {
  const { count, value } = useRecoilValue(cartSummary);

  return (
    <>
      <NavLink to="/cart">
        <section className="border border-gray-600 rounded text-white flex text-sm">
          <div className="flex-auto rounded-l  bg-gray-600 px-3 py-2">
            Cart
            {count > 0 && ` (${count})`}
          </div>
          <div className="font-bold px-3 py-2 w-24 text-center">
            {formatCurrency(value)}
          </div>
        </section>
        <RenderCounter />
      </NavLink>
    </>
  );
};

export default HeaderCart;
