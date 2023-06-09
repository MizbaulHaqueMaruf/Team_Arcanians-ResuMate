import {
  Box,
  Container,
  Stack,
  Text,
  HStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import Builder from "./Builder";
import ResumePreview from "./ResumePreview";
import ResumePreview1 from "./template1_oval";
import ResumePreview2 from "./template1_square";
import ResumePreview3 from "./template2_oval";
import ThemeSelect from "./Theme/ThemeSelect";
import { useReactToPrint } from "react-to-print";
import { useResume } from "../Context";
import { MdOutlineFileDownload } from "react-icons/md";

const Main = () => {
  const { printElem } = useResume();

  const handlePrint = useReactToPrint({
    content: () => printElem.current,
  });

  return (
    <Container bg={"gray.50"} minW={"full"} py={10} id="builder">
      <Heading
        as="h4"
        size="lg"
        textAlign={"center"}
        color={"gray.700"}
        style={{ fontFamily: "Poppins" }}
        fontWeight={"medium"}
      >
        Make Your Resume
      </Heading>

      <Container maxW={"7xl"} px={8} my={3}>
        <Stack
          justifyContent={"space-between"}
          pt={4}
          direction={{ base: "column", sm: "row" }}
        >
          <ThemeSelect />
          <Button
            rightIcon={<MdOutlineFileDownload />}
            onClick={handlePrint}
            colorScheme={"blue"}
          >
            Download
          </Button>
        </Stack>
      </Container>

      <Stack
        direction={{ base: "column", md: "row" }}
        // mt={16}
        gap={4}
        mx={{ base: 2, md: 12 }}
        my={8}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Builder />
        <ResumePreview />
      </Stack>

      <Container maxW={"7xl"} px={8} my={3}>
        <Stack
          justifyContent={"space-between"}
          pt={4}
          direction={{ base: "column", sm: "row" }}
        >
          <ThemeSelect />
          <Button
            rightIcon={<MdOutlineFileDownload />}
            onClick={handlePrint}
            colorScheme={"blue"}
          >
            Download
          </Button>
        </Stack>
      </Container>

      <Stack
        direction={{ base: "column", md: "row" }}
        // mt={16}
        gap={4}
        mx={{ base: 2, md: 12 }}
        my={8}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Box
          bg={"white"}
          w={"full"}
          maxW={"xl"}
          rounded={"md"}
          shadow={"md"}
          overflow={"hidden"}
        ></Box>
        <ResumePreview1 />
      </Stack>

      {/* <Stack
        direction={{ base: "column", md: "row" }}
        // mt={16}
        gap={4}
        mx={{ base: 2, md: 12 }}
        my={8}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Box
          bg={"white"}
          w={"full"}
          maxW={"xl"}
          rounded={"md"}
          shadow={"md"}
          overflow={"hidden"}
        ></Box>
        <ResumePreview2 />
      </Stack> */}

      <Stack
        justifyContent={"space-between"}
        pt={4}
        direction={{ base: "column", sm: "row" }}
      >
        <ThemeSelect />
        <Button
          rightIcon={<MdOutlineFileDownload />}
          onClick={handlePrint}
          colorScheme={"blue"}
        >
          Download
        </Button>
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        // mt={16}
        gap={4}
        mx={{ base: 2, md: 12 }}
        my={8}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Box
          bg={"white"}
          w={"full"}
          maxW={"xl"}
          rounded={"md"}
          shadow={"md"}
          overflow={"hidden"}
        ></Box>
        <ResumePreview3 />
      </Stack>
    </Container>
  );
};

export default Main;
