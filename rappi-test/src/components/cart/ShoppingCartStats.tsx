import { Box, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { cartStatsState } from "../../atoms/cart";

const dollarUSLocale = Intl.NumberFormat("en-US");

const ShoppingCartStats = () => {
  const cartStats = useRecoilValue(cartStatsState);

  return (
    <Box px="4" py="2" display="flex" justifyContent="space-between">
      <Text>Total</Text>
      <Text>{`$${dollarUSLocale.format(cartStats.totalPrice)}`}</Text>
      <Text>{cartStats.totalItems} pcs.</Text>
    </Box>
  );
};

export default ShoppingCartStats;
