import {
  Box,
  Button,
  Link,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from './Logo'

export const Header = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box
    bg="#0A192F"
      as="section"
    >
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container maxW='1440px'
          py={{
            base: '4',
            lg: '5',
          }}
        >
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <Flex justify="flex-end" align="center" flex="1" gap="20px">
                <Link spacing="8" color="brand.primary">About</Link>
                <Link  color="brand.primary">Work</Link>
                <Link color="brand.primary">Contact</Link>
                <HStack spacing="3">
                  <Button variant="ghost" color="brand.primary">Resume</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}