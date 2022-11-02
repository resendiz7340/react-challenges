import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { productsFilteredState } from "../../atoms/products";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const products = useRecoilValue(productsFilteredState);

  return (
    <Box>
      <Heading as="h3" size="lg" my="4">
        Products
      </Heading>
      <SimpleGrid minChildWidth="64" spacing="20px">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductsList;
