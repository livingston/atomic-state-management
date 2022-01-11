import RenderCounter from '@aosm/common/RenderCounter';
import { formatCurrency } from '@aosm/common/utils';
import ProductItemAction from './ProductItemAction';

const ProductItem = ({ product }) => (
  <div className="group" key={product.id}>
    <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg border-gray-300 border overflow-hidden xl:aspect-w-7 xl:aspect-h-8 cursor-pointer duration-300 delay-100		transition-all	 shadow-md group-hover:shadow-lg ">
      <picture className="p-5">
        <img
          src={product.preview}
          alt={product.title}
          className="w-full h-full object-center object-contain"
        />
      </picture>
    </div>
    <div className="grid grid-cols-5 gap-x-4">
      <div className="col-span-3">
        <h3 className="mt-4 text-sm text-gray-700 truncate">
          {product.title}, {product.quantity} {product.package}
        </h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {formatCurrency(product.price)}
        </p>
      </div>
      <ProductItemAction product={product} />
    </div>
    <RenderCounter />
  </div>
);

export default ProductItem;
