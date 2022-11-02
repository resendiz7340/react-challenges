import {
  Box,
  Text,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";
import { Icon, IconButton } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { IProduct } from "../../atoms/products";
import { cartState, ICartProduct } from "../../atoms/cart";
import { useRecoilState } from "recoil";
import { saveState } from "../../utils/localStorage";

function replaceItemAtIndex(
  arr: ICartProduct[],
  index: number,
  newValue: ICartProduct
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

interface IProductItemProps {
  product: IProduct;
}

const ProductItem: FunctionComponent<PropsWithChildren<IProductItemProps>> = (
  props
) => {
  const [cart, setCart] = useRecoilState(cartState);
  const index = cart.products.findIndex(
    (product) => product.id === props.product.id
  );

  const addTocart = () => {
    if (index < 0) {
      const newCart = {
        ...cart,
        products: [...cart.products, { ...props.product, items: 1 }],
      };
      setCart(newCart);
      saveState("cartState", newCart);
    } else {
      const newProducts = replaceItemAtIndex(cart.products, index, {
        ...cart.products[index],
        items: cart.products[index].items + 1,
      });
      const newCart = { ...cart, products: newProducts };
      setCart(newCart);
      saveState("cartState", newCart);
    }
  };

  return (
    <Box
      height="40"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="sm"
      display="flex"
      justifyContent="space-between"
    >
      <Box>
        <Badge>{props.product.id}</Badge>

        <Text>{props.product.name}</Text>
        <Stat>
          <StatLabel>Price </StatLabel>
          <StatNumber>
            {props.product.price}{" "}
            {props.product.available && <Badge colorScheme="red">Offer!</Badge>}
          </StatNumber>
          <StatHelpText>{props.product.quantity} in stock</StatHelpText>
        </Stat>
      </Box>
      <Box>
        <IconButton
          onClick={addTocart}
          aria-label="Add to cart"
          icon={<Icon as={FaCartPlus} />}
        />
      </Box>
    </Box>
  );
};

export default ProductItem;
