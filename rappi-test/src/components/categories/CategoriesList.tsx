import { Box, Heading, List } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { categoriesState } from "../../atoms/categories";
import CategoryItem from "./CategoryItem";

const CategoriesList = () => {
  const categories = useRecoilValue(categoriesState);

  return (
    <Box>
      <Heading as="h3" size="md" mb="4">
        Categories
      </Heading>
      <List>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </List>
    </Box>
  );
};

export default CategoriesList;
