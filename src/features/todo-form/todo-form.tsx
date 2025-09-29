import type { FC } from 'react'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import type { TodoFormProps } from './types'

export const TodoForm: FC<TodoFormProps> = ({ title, setTitle, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className="flex items-center gap-2">
      <Input
        className="w-full"
        name="title"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Что нужно сделать?"
      />
      <Button size="md" disabled={title.length < 1} type="submit">
        Добавить
      </Button>
    </div>
  </form>
)
