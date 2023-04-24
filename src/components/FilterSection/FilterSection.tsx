import { useEffect, type ReactNode, ChangeEvent } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import {
  StyledFilterSection,
  StyledFilterSectionContent,
  StyledFilterSectionContentItem,
} from './FilterSection.styles'
import Slider from '@mui/material/Slider'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkboxes from '../Checkboxes/Checkboxes'
import { FilterEnum, Filters } from '@/types'

interface FilterSectionProps {
  children?: ReactNode
  className?: string
  style?: object
  price?: number
  onSubmit?: (filters: Partial<Filters>) => void
  onChange?: (filters: Partial<Filters>) => void
  defaultValue?: Partial<Filters>
}

const colorOptions = [
  { label: 'Black', value: 'black' },
  { label: 'Red', value: 'red' },
  { label: 'White', value: 'white' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
  { label: 'Brown', value: 'brown' },
]

const FilterSection = ({
  className,
  style,
  onChange,
  defaultValue,
}: FilterSectionProps) => {
  const { control } = useForm({
    defaultValues: defaultValue,
  })
  const watchAll = useWatch({ control })
  useEffect(() => {
    onChange?.(watchAll)
  }, [watchAll])

  return (
    <StyledFilterSection className={`FilterSection ${className}`} style={style}>
      <StyledFilterSectionContent>
        <StyledFilterSectionContentItem>
          <p>Price</p>
          <Controller
            control={control}
            name={FilterEnum.ByPriceRange}
            render={({ field }) => (
              <Slider
                getAriaLabel={() => 'Price range'}
                value={field.value}
                onChange={(e, v) => {
                  field.onChange(v as number[])
                }}
                valueLabelDisplay="auto"
                getAriaValueText={(v) => v.toString()}
              />
            )}
          />
        </StyledFilterSectionContentItem>
        <StyledFilterSectionContentItem>
          <p>Colors</p>
          <Checkboxes
            name={FilterEnum.ByColor}
            control={control}
            options={colorOptions}
            render={({ option, field }) => {
              const fieldValue = field.value
              return (
                <FormControlLabel
                  key={option.value}
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
