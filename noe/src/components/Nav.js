import React from 'react'
import { Button, Box } from '@chakra-ui/core'
import { extendTheme, Grid, GridItem } from "@chakra-ui/react"

const theme = extendTheme({
    TextStyles: {
        Button: 'uppercase'


    }

})

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
                    <Button mr={5} variant="outline">
                        espace particulier
                </Button>

                    <Button variant="outline">
                        espace veterinaire
                </Button>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Nav