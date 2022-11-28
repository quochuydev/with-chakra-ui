import { Text, Center, Flex, Input, Button } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container>
    <Flex>
      <Flex>
        <Center>
          <img src={"/images/logo.jpeg"} />
        </Center>
      </Flex>

      <Flex>
        <Center>
          <Text>Job search</Text>
        </Center>
      </Flex>
    </Flex>

    <Flex>
      <Flex>
        <Input placeholder="Basic usage" />
      </Flex>
      <Flex>
        <Input placeholder="Basic usage" />
      </Flex>
      <Flex>
        <Input placeholder="Basic usage" />
      </Flex>
      <Flex>
        <Button>Job search</Button>
      </Flex>
    </Flex>

    <Flex>
      <Flex>
        <Center>
          <Text>Job list</Text>
        </Center>
      </Flex>

      <Flex>
        <Center>
          <Text>Job detail</Text>
        </Center>
      </Flex>
    </Flex>

    <Footer />
  </Container>
);

export default Index;
