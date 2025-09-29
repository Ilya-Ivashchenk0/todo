import type { FC } from 'react'
import { Button } from '@/shared/ui/button'
import type { TodoFiltersProps } from './types'

export const TodoFilters: FC<TodoFiltersProps> = ({
  filter,
  setFilter,
  activeCount
}) => (
  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 text-sm text-slate-600">
    <div className="flex w-full gap-2 sm:w-auto">
      <Button
        variant={filter === 'all' ? 'primary' : 'secondary'}
        onClick={() => setFilter('all')}
      >
        Все
      </Button>
      <Button
        variant={filter === 'active' ? 'primary' : 'secondary'}
        onClick={() => setFilter('active')}
      >
        Активные
      </Button>
      <Button
        variant={filter === 'completed' ? 'primary' : 'secondary'}
        onClick={() => setFilter('completed')}
      >
        Выполненные
      </Button>
    </div>
    <span className="block text-slate-500">Осталось {activeCount} задач</span>
  </div>
)
