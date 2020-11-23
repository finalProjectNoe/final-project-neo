import React from 'react'
import { Heading, Text, Button, Box, HStack, VStack, Center } from '@chakra-ui/core'
import { Input, FormControl } from '@chakra-ui/core'
import { Grid, GridItem, Img, extendTheme } from "@chakra-ui/react"



function Home() {


  return (
    <>
      <Grid

        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={10}
      >
        <GridItem colSpan={6} py={10} mx={5}>
          <VStack>
            <Heading my={10} as='h1'>Référencez votre NOE</Heading>

            <Text mb={10} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin mauris sit amet dolor commodo, non faucibus est feugiat. Proin sit amet tortor id turpis lobortis placerat ac ut libero. Quisque dapibus ac leo a volutpat. Maecenas fringilla mi augue, eget pellentesque orci vestibulum vel. Nullam suscipit velit sit amet nisl dignissim nec.
            </Text>

            <HStack spacing='24px'>

              <Button colorScheme="teal" textTransform='uppercase' variant="outline">
                espace particulier
                </Button>

              <Button colorScheme="teal" textTransform='uppercase' mx={5} variant="outline">
                espace vétérinaire
                </Button>

            </HStack>
          </VStack>
        </GridItem>
      </Grid>

      <Box my={10} mx={5}>
        <Grid m='auto' templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30}>

          <GridItem colSpan={3} rowSpan={3}>
            <Center>
              <Heading as="h2">Chiffre-clés</Heading>
            </Center>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3} >
            <VStack>
              <Text>5000</Text>
              <Text>Animaux sont répertoriés</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3}>
            <VStack>
              <Text>437</Text>
              <Text>Particuliers nous ont fait confiance</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3} >
            <VStack>
              <Text>1850</Text>
              <Center>
                <Text textAlign={"center"}>Animaux retrouvés grâce à notre plateforme</Text>
              </Center>
            </VStack>
          </GridItem>
        </Grid>
      </Box>

      <Box mx={5}>
        <Center>
          <Heading my={10} as="h2">Comment ça marche ?</Heading>
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30} spacing={10}>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px" >
            <VStack>

              <Text fontSize="2xl">Inscription</Text>
              <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px">
            <VStack>
              <Text textAlign={"center"} fontSize="2xl">Attribution de l’animal par votre vétérinaire</Text>
              <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px" >
            <VStack>
              <Text fontSize="2xl">Connexion à votre espace</Text>
              <Center>
                <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              </Center>
            </VStack>
          </GridItem>
        </Grid>
      </Box>

      <Box mx={5}>
        <Center>
          <Heading my={10} as="h2">Témoignages</Heading>
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30} spacing={10}>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px" >
            <VStack>
              <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              <Text>Alice DUPONT</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px">
            <VStack>
              <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              <Text>Bob DUBOIS</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px" >
            <VStack>
              <Center>
                <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              </Center>
              <Text>Charlie MARTIN</Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
      <VStack>
        <Center>
          <Heading my={10}>Contact</Heading>
        </Center>
        <HStack>
          <FormControl>
            <HStack>
              <VStack>
                <Input type="email" placeholder="Email" />
                <Input placeholder="Message" />
                <Button colorScheme="teal" textTransform='uppercase' variant="outline">Envoyer</Button>
                <Text mb={10}>info@form.com</Text>
              </VStack>
            </HStack>
          </FormControl >

        </HStack >
      </VStack >

    </>
  )
}

export default Home