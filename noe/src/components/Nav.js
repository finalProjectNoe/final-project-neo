import React from 'react'
import { Button, Box } from '@chakra-ui/core'
import { Grid, GridItem } from "@chakra-ui/react"


function Nav() {

    return (
        <Box py={3} px={150} >
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem>
                    <Button variant="outline">
                        Logo
                </Button>
                </GridItem>
                <GridItem ml='auto' >
                    <Button colorScheme="teal" textTransform='uppercase' mr={5} variant="outline">
                        espace particulier
                </Button>

                    <Button colorScheme="teal" textTransform='uppercase' variant="outline">
                        espace vétérinaire
                </Button>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Nav