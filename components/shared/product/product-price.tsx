import { cn } from "@/lib/utils";

const ProductPrice = ({
  productPrice,
  className,
}: {
  productPrice: number;
  className?: string;
}) => {
  const [dollars, cents] = productPrice.toString().split(".");
  console.log(productPrice);
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      <span>{dollars}</span>
      <span className="text-xs align-super">.{cents}</span>
    </p>
  );
};

export default ProductPrice;
