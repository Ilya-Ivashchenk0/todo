import type { Dispatch, SetStateAction } from 'react'

export interface TodoFormProps {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  onSubmit: (e: React.FormEvent) => void
}
