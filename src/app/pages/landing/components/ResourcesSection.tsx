import { Box, Container, Heading, SimpleGrid, Image, Button, Flex, IconButton } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const RES_IMG_1 = "/images/eee418acf0a641e88faad2a1327bcb950478f4ee.png";
const RES_IMG_2 = "/images/a7f14cb8262ed215ba9b9d5819404f20e896d5cc.png";
const RES_IMG_3 = "/images/44ff80138d7e107798f043b8426e57d7a0f08f32.png";

const MotionBox = motion(Box);

const resources = [
    { title: "Department Handbook", image: RES_IMG_1 },
    { title: "E-books", image: RES_IMG_2 },
    { title: "E-courses", image: RES_IMG_3 },
];

const ResourcesSection = () => {
    return (
        <Box py={20} bg="white">
            <Container maxW="container.xl">
                <Heading as="h2" size="xl" color="#003366" textAlign="center" mb={12}>
                    Access Our Resources
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                    {resources.map((res, idx) => (
                        <MotionBox
                            key={idx}
                            border="1px solid"
                            borderColor="#40C4FF"
                            borderRadius="md"
                            p={6}
                            whileHover={{ y: -10, boxShadow: "xl" }}
                            transition={{ duration: 0.3 } as any}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            delay={idx * 0.1}
                        >
                            <Box bg="#E0F7FA" mb={6} borderRadius="sm" overflow="hidden" display="flex" justifyContent="center" alignItems="center" h="180px">
                                <Image src={res.image} alt={res.title} maxH="140px" objectFit="contain" />
                            </Box>

                            <Heading size="md" color="#003366" mb={6}>
                                {res.title}
                            </Heading>

                            <Flex justify="space-between" align="center">
                                <Button variant="outline" borderColor="gray.300" borderRadius="full" size="sm" color="gray.600" fontSize="xs" _hover={{ bg: "#40C4FF", color: "white" }}>
                                    See More
                                </Button>
                                <IconButton aria-label="Go" variant="ghost" borderRadius="full" size="sm" color="gray.500">
                                    <ArrowRight size={20} />
                                </IconButton>
                            </Flex>
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default ResourcesSection;
