import { FunctionComponent, PropsWithChildren } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ICartProduct } from "../../atoms/cart";

interface IShoppingCartProductItemProps {
  product: ICartProduct;
}

const ShoppingCartProductItem: FunctionComponent<
  PropsWithChildren<IShoppingCartProductItemProps>
> = (props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="sm"
      display="flex"
      justifyContent="space-between"
    >
      <Box display="flex" justifyContent="space-between" flex={1}>
        <Text>{props.product.name}</Text>
        <Text>{props.product.price}</Text>
        <Text>{props.product.items} pcs.</Text>
      </Box>
    </Box>
  );
};

export default ShoppingCartProductItem;
