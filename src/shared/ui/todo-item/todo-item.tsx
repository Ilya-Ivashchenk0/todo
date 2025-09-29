import { useState, type FC } from 'react'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import type { TodoItemProps } from './types'

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.title)

  const handleSave = () => {
    const trimmed = draft.trim()
    if (!trimmed) return
    onEdit(todo.id, trimmed)
    setIsEditing(false)
  }

  return (
    <li className="flex flex-col gap-3 py-3">
      <div className="flex-1">
        {isEditing ? (
          <Input
            autoFocus
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') handleSave()
              if (e.key === 'Escape') {
                setDraft(todo.title)
                setIsEditing(false)
              }
            }}
            className="w-full"
          />
        ) : (
          <span
            className={`inline-block w-full rounded-md bg-blue-200/40 p-2 break-words ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-900'}`}
          >
            {todo.title}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-2">
        <Input
          name="checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          value={''}
        />
        <div className="flex items-center gap-2">
          {isEditing ? (
            <>
              <Button size="sm" variant="success" onClick={handleSave}>
                Сохранить
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => {
                  setDraft(todo.title)
                  setIsEditing(false)
                }}
              >
                Отмена
              </Button>
            </>
          ) : (
            <>
              <Button
                size="sm"
                variant="warning"
                onClick={() => setIsEditing(true)}
              >
                Редактировать
              </Button>
              <Button
                size="sm"
                variant="danger"
                onClick={() => onDelete(todo.id)}
              >
                Удалить
              </Button>
            </>
          )}
        </div>
      </div>
    </li>
  )
}
