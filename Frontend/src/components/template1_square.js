import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
  Wrap,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useResume } from "../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

const ResumePreview = () => {
  const { theme, about, educationList, skills, workList, projects, printElem } =
    useResume();
    const imgStyle = {
      width:"115px",
      height:"115px",
     
      margin:"15px",

      borderRadius: "0%",
     
    };
  return (
    <>
      <Box
        bg={"white"}
        w={"full"}
        rounded={"md"}
        shadow={"md"}
        overflow={"hidden"}
        minH={"100vh"}
      >
        <div ref={printElem} style={{ height: '100%', display: 'flex'}}>
          

          <HStack alignItems={"flex-start"}>
            //placeholder
            <VStack align="flex-start"
              bg={theme}
              color={"white"}
              p={4}
              w={1/4}
              h='100%'
            >
              <HStack>
              {about.picture && (
                <img
                  style={imgStyle}
                  
                  src={about.picture}
                  alt="avatar"
                />
              )}
            </HStack>
              <VStack m={4} alignItems={"flex-start"} spacing={0.5}>
                <Heading as="h4" size="md">
                  {about.name ? about.name : "Jhon Doe"}
                </Heading>
                <Text color={"gray.300"}>
                  {about.role ? about.role : "Full Stack Web Developer"}
                </Text>
              </VStack>

              <HStack spacing={1}>
                <MdMail />{" "}
                <Text>{about.email ? about.email : "jhondoe@gmail.com"}</Text>
              </HStack>
              <HStack spacing={1}>
                <MdLocalPhone />{" "}
                <Text>{about.phone ? about.phone : "+918559584846"}</Text>
              </HStack>
              <HStack spacing={1}>
                <MdLocationPin />{" "}
                <Text>{about.address ? about.address : "Pune, MH"}</Text>
              </HStack>
              <HStack spacing={1}>
                <RiLinkedinBoxFill />{" "}
                <Text as="a" href={about.linkedin}>
                  LinkedIn
                </Text>
              </HStack>
            </VStack>

            <HStack
              w={"full"}
              h={"full"}
              my={2}
              mb={6}
              px={2}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              spacing={1}
            >
              <VStack marginTop={6} alignItems={"flex-start"}>
                // EDUCATION starts
                <VStack alignItems={"flex-start"}>
                  <Heading as="h4" size="md" color={"gray.700"}>
                    EDUCATION
                  </Heading>

                  {educationList.map((education) => {
                    const { degree, school, startYr, endYr, grade } = education;

                    return (
                      <VStack
                        spacing={0}
                        alignItems={"flex-start"}
                        w={"full"}
                        pb={2}
                      >
                        <Text fontWeight={"medium"}>
                          {degree ? degree : "B.Tech Computer Engineering"}
                        </Text>
                        <Text fontSize={"sm"}>
                          {school ? school : "College of Engineering Pune"}
                        </Text>
                        <HStack
                          fontSize={"xs"}
                          fontStyle={"italic"}
                          justifyContent={"space-between"}
                          w={"full"}
                        >
                          <Text>
                            {startYr ? startYr : 2014} - {endYr ? endYr : 2018}
                          </Text>
                          <Text>{grade ? grade : "8.7 CGPA"}</Text>
                        </HStack>
                      </VStack>
                    );
                  })}
                </VStack>
                //EDUCATION ENDS 

                // EDUCATION // WORK EXPERIENCE BEGINS
                <VStack alignItems={"flex-start"}>
                  <Heading as="h4" size="md" color={"gray.700"}>
                    WORK EXPERIENCE
                  </Heading>

                  {workList.map((work) => {
                    const {
                      position,
                      type,
                      company,
                      startDate,
                      endDate,
                      description: desc,
                    } = work;

                    return (
                      <VStack
                        spacing={0.5}
                        alignItems={"flex-start"}
                        lineHeight={1.3}
                        pb={2}
                      >
                        <Text fontWeight={"medium"}>
                          {position ? position : "Full Stack Developer"}
                        </Text>
                        <Text fontSize={"sm"}>
                          {company ? company : "XYZ Infotech Services"} -{" "}
                          {type ? type : "Full-time"}
                        </Text>
                        <Text fontSize={"xs"} fontStyle={"italic"}>
                          {startDate ? startDate : "2018-03"} -{" "}
                          {endDate ? endDate : "2021-12"}
                        </Text>
                        <Text fontSize={"sm"} as="p">
                          {desc
                            ? desc
                            : "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."}
                        </Text>
                      </VStack>
                    );
                  })}
                </VStack>
                // WORK EXPERIENCE ENDS
                // SKILLS
              <VStack alignItems={"flex-start"}>
                <Heading as="h4" size="md" color={"gray.700"}>
                  SKILLS
                </Heading>
                <Wrap>
                  {skills.map((skill, index) => (
                    <Tag
                      size={"md"}
                      borderRadius="md"
                      variant="solid"
                      bg={theme.replace("400", "500")}
                      key={index}
                    >
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  ))}
                </Wrap>
              </VStack>
                <VStack alignItems={"flex-start"}>
                  <Heading as="h4" size="md" color={"gray.700"}>
                    PROJECTS
                  </Heading>

                  {projects.map((project) => {
                    const { name, url, description: desc } = project;
                    return (
                      <VStack
                        spacing={0.5}
                        alignItems={"flex-start"}
                        lineHeight={1.3}
                        pb={2}
                      >
                        <HStack as="a" href={url} target="_blank" spacing={0.5}>
                          <Text fontWeight={"medium"} flex={"row"}>
                            {name ? name : "Project Name"}{" "}
                          </Text>{" "}
                          <BiLinkExternal />
                        </HStack>
                        <UnorderedList pl={5}>
                          <ListItem>
                            <Text fontSize={"sm"} as="p">
                              {desc
                                ? desc
                                : "Lorem ipsum dolor sit amet consectetur adipisicing."}
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </VStack>
                    );
                  })}
                </VStack>
              </VStack>
            </HStack>
          </HStack>
        </div>
      </Box>
    </>
  );
};

export default ResumePreview;
