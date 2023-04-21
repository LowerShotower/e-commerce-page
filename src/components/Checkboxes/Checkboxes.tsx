import { Control, useController } from 'react-hook-form'

interface Props {
  options: { label: string; value: string }[]
  control: Control
  name: string
  render: (props: any) => JSX.Element
}

const Checkboxes = ({ options, control, name, render }: Props) => {
  const { field } = useController({
    control,
    name,
  })

  return (
    <>
      {options.map((option, index) =>
        render({ options, option, index, field })
      )}
    </>
  )
}

export default Checkboxes
