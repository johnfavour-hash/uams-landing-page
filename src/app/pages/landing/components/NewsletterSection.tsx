import { Box, Container, Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const NewsletterSection = () => {
    return (
        <Box bg="#E0F2F1" py={16}>
            <Container maxW="container.xl">
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 } as any}
                >
                    <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={8}>

                        <Box maxW="lg">
                            <Heading as="h3" size="xl" color="#003366" mb={2}>
                                Join Our Newsletter
                            </Heading>
                            <Text color="gray.600" fontSize="sm">
                                Be unique and never miss interesting happenings by joining our newsletter program.
                            </Text>
                        </Box>

                        <Flex gap={0} w={{ base: "100%", md: "auto" }} maxW="md">
                            <Input
                                placeholder="Your Email Address"
                                bg="transparent"
                                borderColor="gray.400"
                                borderRadius="none"
                                _focus={{ borderColor: "orange.400", boxShadow: "none" }}
                                borderRight="none"
                                h="12"
                                px={4}
                            />
                            <Button
                                bg="#F6AD55"
                                color="white"
                                borderRadius="none"
                                h="12"
                                px={8}
                                _hover={{ bg: "orange.400", transform: "scale(1.05)" }}
                                fontWeight="bold"
                                fontSize="sm"
                                transition="all 0.2s"
                            >
                                SUBSCRIBE
                            </Button>
                        </Flex>

                    </Flex>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default NewsletterSection;
