import React from 'react'
import { Heading, Text, Center, VStack } from '@chakra-ui/core'

function Header() {
  return (
    <>
      <Center>
          <VStack>
        <Heading color='green.900'>Hello World!!</Heading>
        <Text color='yellow.400'>Welcome to Project NEO</Text>
        </VStack>
      </Center>
    </>
  )
}

export default Header