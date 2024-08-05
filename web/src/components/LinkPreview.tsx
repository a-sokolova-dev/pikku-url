import { Box, Text, useToken } from '@chakra-ui/react'
import type { FC } from 'react'
import { useState } from 'react'

import { copyToClipboard, isNumber, isUppercase } from '../utils/index.ts'

type LinkPreviewProps = {
  link: string
}

export const LinkPreview: FC<LinkPreviewProps> = ({ link }) => {
  const [copied, setCopied] = useState<boolean>(false)
  const [pink500, blue500, purple500] = useToken('colors', [
    'pink.500',
    'blue.500',
    'purple.500'
  ])

  const charColor = (c: string): string => {
    if (isNumber(c)) return `${pink500}`
    if (isUppercase(c)) return `${purple500}`
    return `${blue500}`
  }

  const handleCopy = async (): Promise<void> => {
    await copyToClipboard(link)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 800)
  }

  return (
    <Box
      _hover={{
        fontSize: '4xl',
        transition: 'font-size 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)'
      }}
      border="1px"
      borderColor="gray.300"
      borderRadius="3xl"
      cursor="pointer"
      fontSize="3xl"
      minH="14rem"
      onClick={handleCopy}
      padding="1rem"
      position="relative"
      textAlign="center"
    >
      <code>
        {link.split('').map((c, i) => {
          return (
            <span key={`${c}-${i}`} style={{ color: charColor(c) }}>
              {c}
            </span>
          )
        })}
      </code>
      <Box bottom="0.75rem" position="absolute" right="1.25rem">
        {copied ? (
          <Text color="green.400" fontSize="md" fontWeight="600">
            copied! ✅
          </Text>
        ) : (
          <Text color="gray.400" fontSize="md">
            click to copy
          </Text>
        )}
      </Box>
    </Box>
  )
}
