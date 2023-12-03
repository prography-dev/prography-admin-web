import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Input, InputLeftAddon, InputProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

type Props = {
  value: number
  onChange: (value: number) => void
  countText?: string
}

const StepperInput = (
  { value = 0, onChange, countText = '', ...props }: Props & InputProps,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <Flex gap="10px">
      <Button aspectRatio={1} onClick={() => onChange(!!value ? value - 1 : 0)}>
        <TriangleDownIcon w="12px" h="12px" />
      </Button>
      <Input
        w="110px"
        textAlign="center"
        value={value + countText}
        fontWeight="bold"
        readOnly
        ref={ref}
        {...props}
      />
      <Button aspectRatio={1} onClick={() => onChange(value + 1)}>
        <TriangleUpIcon w="12px" h="12px" />
      </Button>
    </Flex>
  )
}

export default forwardRef(StepperInput)
