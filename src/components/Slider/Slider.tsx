import { type FunctionComponent, type ReactNode } from 'react'
import { StyledSlider } from './Slider.styles'
import { Control, useController } from 'react-hook-form'

interface SliderProps {
  children?: ReactNode
  className?: string
  style?: object
  control: Control
}

const Slider = ({ className, style, control }: SliderProps) => {
  const { field } = useController({
    name: FilterEnum.ByPriceRange,
    control,
    defaultValue: [0, 100],
  })
  return (
    <Slider
      value={field.value}
      onChange={(e, v) => {
        field.onChange(FilterEnum.ByPriceRange, v as number[])
      }}
      valueLabelDisplay="auto"
      getAriaValueText={(v) => v.toString()}
    />
  )
}

export default Slider
