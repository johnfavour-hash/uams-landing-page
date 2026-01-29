import { Box, Container, SimpleGrid, Text, Stack, Link, Image, Flex } from "@chakra-ui/react";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";

const LOGO_SRC = "/images/a7f14cb8262ed215ba9b9d5819404f20e896d5cc.png";

const Footer = () => {
    return (
        <Box bg="#154A99" color="white" py={{ base: 12, md: 16 }}>
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 10, md: 12 }} mb={16}>

                    <Stack gap={6}>
                        <Image src={LOGO_SRC} alt="Logo" w="320px" />

                        <Box fontSize="sm" color="gray.300">
                            <Text mb={4}>
                                University of Port Harcourt, East/West Road,
                                PMB 5323 Choba, Rivers State, Nigeria
                            </Text>

                            <Stack gap={3}>
                                <Flex align="center" gap={3}>
                                    <Phone size={16} color="#40C4FF" />
                                    <Text>Hot Line: +23404017041</Text>
                                </Flex>
                                <Flex align="center" gap={3}>
                                    <Mail size={16} color="#40C4FF" />
                                    <Link href="mailto:helpdesk@uniport.edu.ng" color="white">helpdesk@uniport.edu.ng</Link>
                                </Flex>
                            </Stack>
                        </Box>

                        <Flex gap={4}>
                            {[Facebook, Twitter, Instagram, Linkedin].map((IconComp, i) => (
                                <Box key={i} border="1px solid" borderColor="gray.600" borderRadius="full" p={2} _hover={{ bg: "#40C4FF", borderColor: "#40C4FF" }} cursor="pointer">
                                    <IconComp size={18} />
                                </Box>
                            ))}
                        </Flex>
                    </Stack>

                    <Stack gap={4}>
                        <Text fontWeight="bold" fontSize="lg">Quick Links</Text>
                        {["Admissions", "Recent News", "Academic Calendar", "Uniport Weekly", "Payment for Transcript"].map(link => (
                            <Link key={link} href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>{link}</Link>
                        ))}
                    </Stack>

                    <Stack gap={4}>
                        <Text fontWeight="bold" fontSize="lg">Navigation</Text>
                        {["Home", "About", "Research", "Collaborations", "Admissions", "Updates"].map(link => (
                            <Link key={link} href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>{link}</Link>
                        ))}
                    </Stack>

                    <Box>
                        <Text fontWeight="bold" fontSize="lg" mb={4}>Location</Text>
                        <Text fontSize="sm" color="gray.400">Find us on the map or visit our campus office.</Text>
                    </Box>
                </SimpleGrid>

                <Box borderTop="1px solid" borderColor="gray.800" pt={8} textAlign="center">
                    <Text fontSize="xs" color="white">
                        Copyright © 2026 Department of Computer Science, Faculty of Computing, University of Port Harcourt
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
