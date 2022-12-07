import { ChangeEventHandler, ReactNode } from 'react'

interface TagCheckboxProps {
  value: string
  children: ReactNode
  onChange: ChangeEventHandler<HTMLInputElement>
  checked: boolean
}

const TagCheckbox = ({
  value,
  children,
  onChange,
  checked,
}: TagCheckboxProps) => {
  return (
    <label
      className={`mb-4 mr-4 inline-block cursor-pointer select-none rounded-lg px-4 py-2 font-medium ring-mauve-200 ring-offset-4 ring-offset-base-200 transition-all duration-300 hover:ring-2 dark:ring-mauve-100 dark:ring-offset-base-100 ${
        checked
          ? 'bg-pink-200 text-base-200 hover:bg-flamingo-200 active:bg-rosewater-200 dark:bg-pink-100 dark:text-base-100 dark:hover:bg-flamingo-100 dark:active:bg-rosewater-100'
          : 'bg-mantle-200 text-pink-200 hover:bg-surface0-200 active:bg-surface1-200 dark:bg-mantle-100 dark:text-pink-100 dark:hover:bg-surface0-100 dark:active:bg-surface1-100'
      }`}
    >
      <span>{children}</span>
      <input
        type='checkbox'
        value={value}
        checked={checked}
        onChange={onChange}
        className='sr-only'
      />
    </label>
  )
}

export default TagCheckbox
