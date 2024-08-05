export const isNumber = (c: string): boolean => !isNaN(parseInt(c))

export const isUppercase = (c: string): boolean => /^[A-Z]*$/.test(c)

export const copyToClipboard = async (text: string): Promise<void> => {
  let clipboardTextAPISupported =
    'clipboard' in navigator && 'writeText' in navigator.clipboard
  let legacySupported = 'execCommand' in document

  if (!clipboardTextAPISupported && !legacySupported) {
    // eslint-disable-next-line no-console
    console.warn('Copy to clipboard not supported')
    return
  }

  try {
    if (clipboardTextAPISupported) {
      await navigator.clipboard.writeText(text)
    } else {
      document.execCommand('copy', true, text)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('Error copying text to clipboard', error)
  }
}
