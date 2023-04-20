import { useState, ChangeEvent } from 'react'
import { useController, useForm, Control } from 'react-hook-form'

interface Props {
  options: { label: string; value: string }[]
  control: any
  name: string
  render: (props: any) => JSX.Element
}

const Checkboxes = ({ options, control, name, render }: Props) => {
  const { field } = useController({
    control,
    name,
  })
  console.log('field', field)
  // const [value, setValue] = useState(field.value || [])

  return (
    <>
      {options.map((option, index) =>
        render({ options, option, index, field })
      )}
    </>
  )
}

export default Checkboxes
