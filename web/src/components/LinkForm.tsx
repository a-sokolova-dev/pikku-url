import { Button, Flex, InputGroup, InputRightElement } from '@chakra-ui/react'
import type { ChangeEvent, FC } from 'react'
import { useState } from 'react'

import { TextField } from './TextField.tsx'

type LinkFormProps = {
  onSubmit: (longLink: string) => void
}

export const LinkForm: FC<LinkFormProps> = ({ onSubmit }) => {
  const [longLink, setLongLink] = useState<string>('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setLongLink(e.currentTarget.value)
  }

  return (
    <Flex gap="0.5rem">
      <InputGroup size="lg">
        <TextField
          onChange={handleInput}
          placeholder="enter your long link"
          required
          value={longLink}
        />
        <InputRightElement width="5.5rem">
          <Button
            colorScheme="blue"
            onClick={() => {
              onSubmit(longLink)
            }}
            type="submit"
            variant="outline"
          >
            minify
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}
