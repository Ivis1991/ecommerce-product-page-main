import ImageProduct from "../../../assets/images/image-product-1.jpg";
import IconCart from "../../../assets/images/icon-cart.svg";
import IconPlus from "../../../assets/images/icon-plus.svg";
import IconMinus from "../../../assets/images/icon-minus.svg";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ListProduct, ListProductProps } from "./ListProduct";

export const ProductDetail = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container relative flex-col sm:grid sm:grid-cols-2 max-w-[1015px] gap-[122px]">
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="w-full md:rounded-xl">
              <img
                src={ImageProduct}
                alt="IconCart"
                className="hover:cursor-pointer md:rounded-xl mb-8"
              ></img>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <Carousel>
              <CarouselContent>
                {ListProduct.map((elem: ListProductProps) => {
                  return (
                    <CarouselItem>
                      <img alt="Product Detail" src={elem.url}></img>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </AlertDialogContent>
        </AlertDialog>

        <div className="flex flex-col justify-start bg-White">
          <div className="flex flex-col m t-16">
            <h3 className="uppercase text-Orange font-semibold font-kumbh-Sans text-sm tracking-widest mb-4">
              Sneaker Company
            </h3>
            <h1 className="font-kumbh-Sans font-bold text-Very-dark-blue text-5xl mb-8">
              Fall Limited Edition Sneakers
            </h1>
            <p className="font-kumbh-Sans font-normal text-Dark-grayish-blue text-[16px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="grid my-8">
              <div className="flex flex-row space-x-5">
                <h2 className="text-3xl font-bold font-kumbh-Sans">$125.00</h2>
                <h4 className="flex bg-Pale-orange justify-center items-center text-Orange font-semibold px-2.5 rounded-xl">
                  50%
                </h4>
              </div>
              <p className="font-kumbh-Sans font-bold text-Grayish-blue text-[16px] line-through">
                $250.00
              </p>
            </div>
            <div className="flex w-full space-x-4">
              <div className="flex flex-row py-[15.04px] px-4 items-center bg-Light-grayish-blue rounded-lg">
                <button className="hover:cursor-pointer">
                  <img
                    src={IconMinus}
                    alt="IconCart"
                    className="hover:cursor-pointer object-contain"
                  ></img>
                </button>
                <div className="flex justify-center w-24 hover:cursor-text">
                  0
                </div>
                <div>
                  <button className="hover:cursor-pointer">
                    <img
                      src={IconPlus}
                      alt="IconCart"
                      className="hover:cursor-pointer object-contain"
                    ></img>
                  </button>
                </div>
              </div>
              <button className="flex flex-row grow gap-x-4 justify-center items-center bg-Orange/90 hover:bg-Orange/75 rounded-xl font-normal text-white text-[16px] shadow-xl shadow-current">
                <img
                  src={IconCart}
                  alt="IconCart"
                  className="hover:cursor-pointer w-[25px] h-[25px] fill-curren object-contain"
                ></img>
                <p className="p-4">Add to cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
