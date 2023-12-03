import {
  Box,
  Text,
  type BoxProps,
  FormControl,
  FormLabel,
  FormControlProps,
} from '@chakra-ui/react'

type Props = {
  label: string
  renderInput: () => JSX.Element
}

const InputField = ({ label, renderInput, ...props }: Props & FormControlProps) => {
  return (
    <FormControl {...props}>
      <FormLabel color="gray.600" fontWeight="600">
        {label}
      </FormLabel>
      {renderInput()}
    </FormControl>
  )
}

export default InputField
