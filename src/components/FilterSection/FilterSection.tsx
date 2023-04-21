import { useEffect, type ReactNode, ChangeEvent } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  StyledFilterSection,
  StyledFilterSectionContent,
  StyledFilterSectionContentItem,
} from './FilterSection.styles'
import Slider from '@mui/material/Slider'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkboxes from '../Checkboxes/Checkboxes'
import { Filters } from '@/types'

interface FilterSectionProps {
  children?: ReactNode
  className?: string
  style?: object
  price?: number
  onSubmit?: (data: Partial<Filters>) => void
  onChange?: (data: Partial<Filters>) => void
}

const colorOptions = [
  { label: 'Black', value: 'black' },
  { label: 'Red', value: 'red' },
  { label: 'White', value: 'white' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
  { label: 'Brown', value: 'brown' },
]

const FilterSection = ({ className, style, onSubmit }: FilterSectionProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      prices: [0, 20],
      colors: [],
    },
  })

  useEffect(() => {
    handleSubmit((data: Partial<Filters>) => {
      onSubmit?.(data)
    })
  })

  return (
    <StyledFilterSection className={`FilterSection ${className}`} style={style}>
      <StyledFilterSectionContent>
        <StyledFilterSectionContentItem>
          <p>Price</p>
          <Controller
            control={control}
            name="prices"
            render={({ field: { onChange, value } }) => (
              <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={onChange}
                valueLabelDisplay="auto"
                getAriaValueText={(v) => v.toString()}
              />
            )}
          />
        </StyledFilterSectionContentItem>
        <StyledFilterSectionContentItem>
          <p>Colors</p>
          <Checkboxes
            name="colors"
            control={control}
            options={colorOptions}
            render={({ option, field }) => {
              const fieldValue = field.value
              return (
                <FormControlLabel
                  label={option.label}
                  control={
                    <Checkbox
                      disableRipple={true}
                      key={option.value}
                      value={option.value}
                      checked={fieldValue?.includes(option.value)}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const updatedValue = e.target.checked
                          ? [...fieldValue, option.value]
                          : fieldValue.filter((v: string) => v !== option.value)
                        field.onChange(updatedValue)
                      }}
                    />
                  }
                />
              )
            }}
          />
        </StyledFilterSectionContentItem>
      </StyledFilterSectionContent>
    </StyledFilterSection>
  )
}

export default FilterSection
