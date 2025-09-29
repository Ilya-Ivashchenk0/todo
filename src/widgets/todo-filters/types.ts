import type { Filter } from '@/types'

export interface TodoFiltersProps {
  filter: Filter
  setFilter: (f: Filter) => void
  activeCount: number
}
