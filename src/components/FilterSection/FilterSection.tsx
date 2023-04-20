import {
  useEffect,
  type FunctionComponent,
  type ReactNode,
  ChangeEvent,
} from 'react'
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

interface FilterSectionProps {
  children?: ReactNode
  className?: string
  style?: object
  price?: number
  onSubmit?: (data: any) => void
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
  price,
  onSubmit,
}: FilterSectionProps) => {
  const { formState, control, handleSubmit, getValues } = useForm({
    defaultValues: {
      price: [0, 20],
      colors: [],
      sizes: [],
    },
  })

  useEffect(() => {
    handleSubmit((data: any) => {
      onSubmit?.(data)
    })
  })
  console.log(getValues())
  return (
    <StyledFilterSection className={`FilterSection ${className}`} style={style}>
      <StyledFilterSectionContent>
        <StyledFilterSectionContentItem>
          <p>Price</p>
          <Controller
            control={control}
            name="price"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
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
          {/* <Controller
            name="colors"
            control={control}
            defaultValue={[]}
            render={({ field: props }) => (
              <>
                <Checkbox
                  {...props}
                  onChange={(e) => props.onChange(e.target.checked)}
                />
                <Checkbox
                  {...props}
                  onChange={(e) => props.onChange(e.target.checked)}
                />
              </>
            )}
          /> */}
          <Checkboxes
            name="colors"
            control={control}
            options={colorOptions}
            render={({ options, option, index, field }) => {
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
                        console.log('updatedValue', updatedValue)
                        field.onChange(updatedValue)
                        // setValue(updatedValue)
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
