import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import type { JSX } from 'react'

import { LinkForm } from './components/LinkForm.tsx'
import { LinkPreview } from './components/LinkPreview.tsx'

const App = (): JSX.Element => {
  const mockShortLink = 'a-sokolova-dev.github.io/pikku-url/XckW7e2'

  const handleSubmit = async (longLink: string): Promise<void> => {
    if (!longLink || !URL.canParse(longLink)) return
    // Post to API here
    // eslint-disable-next-line no-console
    console.log(`POST to /links/create: ${longLink}`)
  }

  return (
    <Center>
      <Box paddingTop="6rem" textAlign="center" w="lg">
        <Heading color="pink.400" fontSize="5rem" fontWeight="400">
          pikku link
        </Heading>
        <Flex direction="column" gap="1rem" marginTop="4rem">
          <LinkForm onSubmit={handleSubmit} />
          <LinkPreview link={mockShortLink} />
        </Flex>
      </Box>
    </Center>
  )
}

export default App
