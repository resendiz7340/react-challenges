import {
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Divider,
  Icon,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { buyProducts } from "../../api/shop";
import { cartState } from "../../atoms/cart";
import { saveState } from "../../utils/localStorage";
import ShoppingCartProductItem from "./ShoppingCartProductItem";
import ShoppingCartStats from "./ShoppingCartStats";

const ShoppingCartModal = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const clearCart = () => {
    const newCart = { ...cart, products: [] };
    setCart(newCart);
    saveState("cartState", newCart);
  };

  const buyAllProducts = async () => {
    await buyProducts();
    clearCart();
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button leftIcon={<Icon as={FaShoppingCart} />}>
          {`${cart.products.length}`}
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Shopping Cart</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            {cart.products.length > 0 ? (
              <>
                <Stack>
                  {cart.products.map((product) => (
                    <ShoppingCartProductItem
                      key={product.id}
                      product={product}
                    />
                  ))}
                  <Divider />
                  <ShoppingCartStats />
                </Stack>
              </>
            ) : (
              <Text align="center" my={8}>
                Empty
              </Text>
            )}
          </PopoverBody>
          <PopoverFooter>
            <Stack direction="row-reverse" spacing={2}>
              <Button size="sm" colorScheme="blue" onClick={buyAllProducts}>
                Buy
              </Button>
              <Button onClick={clearCart} size="sm">
                Clear
              </Button>
            </Stack>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default ShoppingCartModal;
