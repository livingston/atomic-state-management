import { useRecoilValue } from 'recoil';
import productState from './productState';
import RenderCounter from '@aosm/common/RenderCounter';
import ProductItem from './ProductItem';

const ProductListing = () => {
  const products = useRecoilValue(productState);

  return (
    <>
      <h2 className="text-xl font-medium mb-5">
        Products <RenderCounter />
      </h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductListing;
