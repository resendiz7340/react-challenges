import { FunctionComponent, PropsWithChildren } from "react";
import { Stack, Box, Image, Heading, Text } from "@chakra-ui/react";
import ShoppingCartModal from "../cart/ShoppingCartModal";

const Layout: FunctionComponent<PropsWithChildren> = (props) => {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth="1px"
        py="2"
        px="4"
        mb="2"
        boxShadow="sm"
      >
        <Box display="flex" alignItems="center">
          <Image
            src="http://blogs.eltiempo.com/digital-jumper/wp-content/uploads/sites/483/2017/07/FOTO-WEB-RAPPI-810x410.png"
            alt="Rappi"
            width="20"
          />
          <Heading as="h3" size="md">
            El Baratón
          </Heading>
        </Box>
        <Box>
          <ShoppingCartModal />
        </Box>
      </Box>
      <Stack direction={["column", "row"]} px="4">
        {props.children}
      </Stack>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderTopWidth="1px"
        py="4"
        px="4"
        mt="4"
        boxShadow="sm"
      >
        <Text>Luis Resendiz</Text>
      </Box>
    </Box>
  );
};

export default Layout;
