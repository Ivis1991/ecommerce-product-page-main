import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import IconCart from "../../../assets/images/icon-cart.svg";

export const Cart = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src={IconCart}
            alt="IconCart"
            className="hover:cursor-pointer"
          ></img>
        </PopoverTrigger>
        <PopoverContent className="relative w-80 mx-6 md:mx-0 bg-White mt-5 rounded-lg min-w-[360px] min-h-[260px]">
          <PopoverHeader>
            <PopoverTitle className="text-Very-dark-blue font-kumbh-Sans font-bold text-[15px]">
              Cart
            </PopoverTitle>
          </PopoverHeader>
          <div className="flex h-full w-full justify-center">
            <p className="flex text-Light-grayish-blue font-kumbh-Sans font-semibold text-[15px] py-[20px]">Your cart is empty</p>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
