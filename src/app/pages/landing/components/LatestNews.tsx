import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Button,
    HStack,
    Center,
} from "@chakra-ui/react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const NEWS_IMG_1 = "/images/28efe5d2b49d90b5dbeeca9c4965f70da3420edb.jpg";
const NEWS_IMG_2 = "/images/9fe8123bf096fa28cc19d4f2d1fac4d7a661e8c2.jpg";
const NEWS_IMG_3 = "/images/28180bf9101f054d63ce4ccc8bf83f1679459f9b.jpg";
const NEWS_IMG_4 = "/images/5ed7d0d339dcca3293a16471198e6e0fd0d1bb46.jpg";
const NEWS_IMG_5 = "/images/9119b908eb579b6080ef684b2b162d57e4d549b0.jpg";
const NEWS_IMG_6 = "/images/1674211baaaa404517eb9568df8471f36160c5b9.jpg";

const newsItems = [
    {
        image: NEWS_IMG_1,
        title: "University of Port Harcourt set to model after Top Ivy League Schools",
        date: "25th October, 2024",
        excerpt: "As part of plans to raise the standard of the University of Port Harcourt, steps are on to be taken to model the institution after some Ivy League...",
    },
    {
        image: NEWS_IMG_2,
        title: "Uniport Wins EU-Erasmus Mundus Grant for Climate Change Education in Africa",
        date: "27th October, 2024",
        excerpt: "University of Port Harcourt led by Prof. Anthony O. Onoja wins a Consortium EU Erasmus Grant (CREATE GreenAfrica with other 4 African...",
    },
    {
        image: NEWS_IMG_3,
        title: "Peter James Kpolovie Receives The Name in Science Award (2024)",
        date: "30th October, 2024",
        excerpt: "PETER JAMES KPOLOVIE RECEIVES THE NAME IN SCIENCE AWARD Peter James Kpolovie (Director, Graduate Research, and former Director...",
    },
    {
        image: NEWS_IMG_4,
        title: "Prof. Fidelis Allen appointed Honorary Fellow, University of Leicester",
        date: "31st October, 2024",
        excerpt: "Fidelis Allen, a professor of Development Studies in the Department of Political and Administrative Studies at the University of Port Harcourt...",
    },
    {
        image: NEWS_IMG_5,
        title: "The 2nd RUFORUM Triennial Conference at the Hilton Hotel, Windhoek, Namibia.",
        date: "12th October, 2024",
        excerpt: "ARPNet Members as Change Agents Driving Projects Aimed at Transforming Lives of Youths, Women and the Less Privileged Members of Africa...",
    },
    {
        image: NEWS_IMG_6,
        title: "Fight against malaria in Africa: Prof. Ousmane Koita sends a message to Nigeria",
        date: "15th October, 2024",
        excerpt: "Professor Ousmane Koita, a molecular biologist and director of the Centre for Global Health Research (CAS-Globales), has urged Nigeria to...",
    },
];

const MotionBox = motion(Box);

const LatestNews = () => {
    return (
        <Box py={20} bg="white">
            <Container maxW="container.xl">
                <Box mb={12}>
                    <Heading as="h2" size="xl" color="#003366" mb={2}>
                        Latest News and Features
                    </Heading>
                    <Text color="gray.600">
                        Read the news and updates from across the University
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} mb={12}>
                    {newsItems.map((item, idx) => (
                        <MotionBox
                            key={idx}
                            borderRadius="md"
                            overflow="hidden"
                            boxShadow="sm"
                            bg="white"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 } as any}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                h="200px"
                                w="100%"
                                objectFit="cover"
                            />
                            <Box p={6}>
                                <Heading size="md" color="#003366" mb={3} lineHeight="shorter">
                                    {item.title}
                                </Heading>
                                <HStack fontSize="xs" color="gray.500" mb={3}>
                                    <Calendar size={14} />
                                    <Text>{item.date}</Text>
                                </HStack>
                                <Text fontSize="sm" color="gray.600" lineClamp={3} mb={4}>
                                    {item.excerpt}
                                </Text>
                                <Button size="sm" bg="#003366" color="white" _hover={{ bg: "blue.800" }} borderRadius="sm">
                                    Read More
                                </Button>
                            </Box>
                        </MotionBox>
                    ))}
                </SimpleGrid>

                <Center>
                    <Button bg="#40C4FF" color="white" px={8} borderRadius="sm" _hover={{ bg: "cyan.500", transform: "scale(1.05)" }}>
                        Read More News
                    </Button>
                </Center>
            </Container>
        </Box>
    );
};

export default LatestNews;
