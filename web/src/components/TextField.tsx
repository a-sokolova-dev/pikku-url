import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import type { ChangeEvent, FC } from 'react'
import { useEffect, useState } from 'react'

type TextFieldProps = {
  label?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  required?: boolean
  value: string
}

export const TextField: FC<TextFieldProps> = ({
  label,
  onChange,
  placeholder,
  required = false,
  value
}) => {
  const [inputError, setInputError] = useState<string | undefined>()
  const [input, setInput] = useState<{
    valid: boolean
    value: string
  }>({ valid: isValid(), value })

  useEffect(() => {
    if (input.value && !URL.canParse(input.value)) {
      setInputError('Invalid URL.')
    }
  }, [])

  function validate(): void {
    if (required && !input.value) {
      setInputError('URL is required.')
    } else if (!URL.canParse(input.value)) {
      setInputError('Invalid URL.')
    } else setInputError(undefined)
  }

  function isValid(): boolean {
    return !inputError
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    validate()
    setInput({ valid: isValid(), value: e.currentTarget.value })
    onChange(e)
  }

  function onBlur(): void {
    validate()
  }

  return (
    <FormControl isInvalid={!isValid()}>
      {Boolean(label) && <FormLabel>{label}</FormLabel>}
      <Input
        borderColor="gray.300"
        borderRadius="lg"
        color="gray.500"
        onBlur={onBlur}
        onChange={handleChange}
        placeholder={placeholder}
        pr="5.5rem"
        size="lg"
        value={input.value}
      ></Input>
      {Boolean(inputError) && <FormErrorMessage>{inputError}</FormErrorMessage>}
    </FormControl>
  )
}
