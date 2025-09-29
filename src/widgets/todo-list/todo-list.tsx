import type { FC } from 'react'
import { TodoItem } from '@/shared/ui/todo-item'
import type { TodoListProps } from './types'

export const TodoList: FC<TodoListProps> = ({
  todos,
  onToggle,
  onDelete,
  onEdit
}) => (
  <>
    {todos.length === 0 ? (
      <div className="flex flex-col items-center justify-center gap-2 py-10 text-center text-slate-500">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 shadow-sm">
          <span className="text-xl">✅</span>
        </div>
        <p className="text-sm">Список пуст — добавьте первую задачу выше.</p>
      </div>
    ) : (
      <ul className="divide-y divide-slate-100">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    )}
  </>
)
