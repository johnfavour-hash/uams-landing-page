import { Box, Button, Container, Flex, Heading, Stack, Image, Text } from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const STUDENT_IMG = "/images/44ff80138d7e107798f043b8426e57d7a0f08f32.png";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const SecureFuture = () => {
    return (
        <Box bg="#154A99" py={{ base: 12, md: 16 }} position="relative" overflow="hidden">
            <Container maxW="container.xl">
                <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={10}>

                    <MotionBox
                        flex={1}
                        color="white"
                        textAlign={{ base: "center", md: "left" }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Heading as="h2" size={{ base: "xl", md: "2xl" }} mb={6}>
                            Secure Your Future in Tech Now!!!
                        </Heading>

                        <Box bg="white" borderRadius="md" p={{ base: 4, md: 6 }} color="gray.800" mb={8} maxW="lg" mx={{ base: "auto", md: "0" }}>
                            <Stack gap={4} align={{ base: "flex-start" }}>
                                {[
                                    "Up to 100% Discount on Training Fees",
                                    "Tutor-Led Training at an Affordable Rate",
                                    "6-12 Months Access to Labs & Study Materials",
                                    "Earn Globally Recognized Certifications"
                                ].map((item, i) => (
                                    <MotionFlex
                                        key={i}
                                        align="start"
                                        gap={3}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                    >
                                        <Box as={CheckCircle} color="#40C4FF" mt={1} flexShrink={0} />
                                        <Text fontSize={{ base: "sm", md: "md" }} textAlign="left">{item}</Text>
                                    </MotionFlex>
                                ))}
                            </Stack>
                        </Box>

                        <Button
                            bg="#40C4FF"
                            color="white"
                            size="lg"
                            px={10}
                            borderRadius="sm"
                            _hover={{ bg: "cyan.500", scale: 1.05 }}
                            fontWeight="bold"
                            w={{ base: "full", sm: "auto" }}
                            transition="all 0.2s"
                        >
                            Get Started Now
                        </Button>
                    </MotionBox>

                    <MotionBox
                        flex={1}
                        display="flex"
                        justifyContent={{ base: "center", md: "flex-end" }}
                        w="100%"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <Image
                            src={STUDENT_IMG}
                            alt="Student"
                            borderRadius="lg"
                            border="4px solid white"
                            maxH={{ base: "300px", md: "400px" }}
                            w="100%"
                            objectFit="cover"
                            boxShadow="2xl"
                        />
                    </MotionBox>
                </Flex>
            </Container>
        </Box>
    );
};

export default SecureFuture;
