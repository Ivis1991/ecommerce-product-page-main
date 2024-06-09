import ImageAvatar from "../../../assets/images/image-avatar.png";
import Logo from "../../../assets/images/logo.svg";
import { Cart } from "@/components/Cart/cart";

export const Navbar = () => {

  return (
    <nav className="flex justify-center px-6">
      <div className="container max-w-[1110px] h-[67px] md:h-auto flex items-center justify-between sm:border-b-[1px] sm:border-Grayish-custom">
        <section className="flex flex-row items-center">
          <div className="md:hidden">
            <button className="text-Dark-grayish-blue mr-4">&#9776;</button>
          </div>
          <img src={Logo} alt="Sneaker Logo" className="mr-14 h-[20px]"></img>
          <ul className="hidden md:flex md:h-full space-x-8  text-Dark-grayish-blue font-kumbh-Sans font-normal text-[15px]">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </section>

        <section className="relative flex flex-row justify-end items-center gap-x-5 md:gap-x-12">
            <Cart />
          <img
            src={ImageAvatar}
            alt="Icon Avatar"
            className="w-[50px] hover:ring-Orange hover:ring-[2px] hover:rounded-full hover:cursor-pointer"
          />
        </section>
      </div>
    </nav>
  );
};
