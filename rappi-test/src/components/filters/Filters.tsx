import {
  Box,
  Heading,
  Stack,
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { filtersState } from "../../atoms/filters";

const sortByText = {
  "price-asc": "Price (low to high)",
  "price-dsc": "Price (high to low)",
  "quantity-asc": "Quantity (low to high)",
  "quantity-dsc": "Quantity (high to low)",
  none: "",
};

const Filters = () => {
  const [filters, setFilters] = useRecoilState(filtersState);

  const updateSortByFilter = (key: number) => {
    switch (key) {
      case 1:
        setFilters({ ...filters, sortBy: "price-asc" });

        break;

      case 2:
        setFilters({ ...filters, sortBy: "price-dsc" });

        break;
      case 3:
        setFilters({ ...filters, sortBy: "quantity-asc" });

        break;
      case 4:
        setFilters({ ...filters, sortBy: "quantity-dsc" });

        break;
      default:
    }
  };

  const toggleOffersOnly = () => {
    console.log("click");
    setFilters({ ...filters, offersOnly: !filters.offersOnly });
  };

  return (
    <Box>
      <Heading as="h3" size="md" mb="4">
        Filters
      </Heading>
      <Stack direction="row" spacing={4}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Sort by {`${sortByText[filters.sortBy]}`}
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => updateSortByFilter(1)}
            >{`Price (low to high)`}</MenuItem>
            <MenuItem
              onClick={() => updateSortByFilter(2)}
            >{`Price (high to low)`}</MenuItem>
            <MenuItem
              onClick={() => updateSortByFilter(3)}
            >{`Quantity (low to high)`}</MenuItem>
            <MenuItem
              onClick={() => updateSortByFilter(4)}
            >{`Quantity (high to low)`}</MenuItem>
          </MenuList>
        </Menu>

        <Box display="flex" alignItems="center">
          <Checkbox>
            <span onClick={toggleOffersOnly}>Offers only </span>
          </Checkbox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Filters;
