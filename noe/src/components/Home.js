import React from 'react'
import { Heading, Text, Button, Box, HStack, VStack, Center } from '@chakra-ui/core'
import { Grid, GridItem } from "@chakra-ui/react"

function Home() {
  return (
    <>
      <Grid

        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={10}
      >
        <GridItem mx={5}>
          <VStack>
            <Heading >Référencez votre NOE</Heading>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin mauris sit amet dolor commodo, non faucibus est feugiat. Proin sit amet tortor id turpis lobortis placerat ac ut libero. Quisque dapibus ac leo a volutpat. Maecenas fringilla mi augue, eget pellentesque orci vestibulum vel. Nullam suscipit velit sit amet nisl dignissim nec.
            </Text>

            <HStack spacing='24px'>

              <Button variant="outline">
                espace particulier
                </Button>

              <Button mx={5} variant="outline">
                espace veterinaire
                </Button>

            </HStack>
          </VStack>
        </GridItem>
        <GridItem>
          <Heading color='green.900'>Référencez votre NOE</Heading>
          <Text >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin mauris sit amet dolor commodo, non faucibus est feugiat. Proin sit amet tortor id turpis lobortis placerat ac ut libero. Quisque dapibus ac leo a volutpat. Maecenas fringilla mi augue, eget pellentesque orci vestibulum vel. Nullam suscipit velit sit amet nisl dignissim nec.
        </Text>
          <HStack spacing='24px'>

            <Button colorScheme="teal" variant="outline">
              espace particulier
                </Button>

            <Button mx={5} colorScheme="teal" variant="outline">
              espace veterinaire
                </Button>
          </HStack>
        </GridItem>
      </Grid>

      <Box mt={5} mx={5}>
        <Grid templateColumns="repeat(8, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>

          <GridItem colSpan={2} rowSpan={3}>
            <Center>
              <Text>chiffre-clés</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={2} rowSpan={3} >
            <VStack>
              <Text>5000</Text>
              <Text>Animaux sont répertoriés</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={2} rowSpan={3}>
            <VStack>
              <Text>437</Text>
              <Text>Particuliers nous ont fait confiance</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={2} rowSpan={3} >
            <VStack>
              <Text>1850</Text>
              <Text>Animaux retrouvé grâce à notre plateforme</Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>

    </>
  )
}

export default Home