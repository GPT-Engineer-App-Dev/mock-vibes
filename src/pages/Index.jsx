import { Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [turn, setTurn] = useState("X");

  return (
    <>
      <Heading textAlign="center" mb={4}>
        Tic-Tac-Toe
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={2} maxW="240px" mx="auto">
        {[...Array(9)].map((_, index) => (
          <GridItem key={index}>
            <Button w="100%" h="80px">
              {}
            </Button>
          </GridItem>
        ))}
      </Grid>
      <Text textAlign="center" mt={4}>
        {turn}'s turn
      </Text>
    </>
  );
};

export default Index;
