import { Box, Flex, Heading, Text, Stack, Image, Container } from "@chakra-ui/react";
import { Circle } from "lucide-react";
import { motion } from "framer-motion";

const LIBRARY_IMG = "/images/5ed7d0d339dcca3293a16471198e6e0fd0d1bb46.jpg";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const LibrarySection = () => {
    return (
        <Box overflow="hidden">
            <Flex direction={{ base: "column", lg: "row" }} minH={{ base: "auto", lg: "500px" }}>

                <MotionBox
                    flex={1}
                    bg="#154A99"
                    color="white"
                    display="flex"
                    alignItems="center"
                    py={{ base: 12, md: 16 }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Container maxW="lg" px={{ base: 6, md: 8 }}>
                        <Text color="#40C4FF" fontWeight="bold" fontSize="sm" letterSpacing="wide" textTransform="uppercase" mb={2} textAlign={{ base: "center", lg: "left" }}>
                            LIBRARY
                        </Text>
                        <Heading as="h2" size={{ base: "xl", md: "2xl" }} mb={6} lineHeight="short" textAlign={{ base: "center", lg: "left" }}>
                            Explore One of Nigeria's Premier Academic Libraries
                        </Heading>

                        <Text fontSize="md" color="whiteAlpha.900" mb={8} textAlign={{ base: "center", lg: "left" }}>
                            The Donald Ekong Library at the University of Port Harcourt is a cornerstone of academic excellence.
                        </Text>

                        <Stack gap={4}>
                            {[
                                "Extensive Collections with over 700,000 books, journals, and multimedia materials.",
                                "Numerous Research centers and spaces for postgraduate students",
                                "Advanced Digital Resources with Online Access (OPAC) and institutional repositories"
                            ].map((item, idx) => (
                                <MotionFlex
                                    key={idx}
                                    gap={3}
                                    align="start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                                >
                                    <Box mt={1} flexShrink={0}>
                                        <Circle size={10} fill="#F6AD55" color="#F6AD55" />
                                    </Box>
                                    <Text fontSize="sm">{item}</Text>
                                </MotionFlex>
                            ))}
                        </Stack>
                    </Container>
                </MotionBox>

                <MotionBox
                    flex={1}
                    h={{ base: "300px", lg: "auto" }}
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                >
                    <Image
                        src={LIBRARY_IMG}
                        alt="Library"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                    />
                </MotionBox>
            </Flex>
        </Box>
    );
};

export default LibrarySection;
