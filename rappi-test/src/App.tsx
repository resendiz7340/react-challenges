import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getCategories, getProducts } from "./api/shop";
import { categoriesState } from "./atoms/categories";
import { productsState } from "./atoms/products";
import CategoriesList from "./components/categories/CategoriesList";
import Filters from "./components/filters/Filters";
import ProductsList from "./components/products/ProductsList";
import Layout from "./components/ui/Layout";
import { Box } from "@chakra-ui/react";

const App = () => {
  const setCategories = useSetRecoilState(categoriesState);
  const setProducts = useSetRecoilState(productsState);

  useEffect(() => {
    const getDataFromAPI = async () => {
      const categories = await getCategories();
      setCategories(categories);

      const products = await getProducts();
      setProducts(products);
    };

    getDataFromAPI();
  }, []);

  return (
    <Layout>
      <Box flex={1}>
        <CategoriesList />
      </Box>
      <Box flex={6}>
        <Filters />
        <ProductsList />
      </Box>
    </Layout>
  );
};

export default App;
