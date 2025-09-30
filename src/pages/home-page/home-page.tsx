import { useMemo, useState, type FormEvent } from 'react'
import { TodoForm } from '@/features/todo-form'
import { TodoList } from '@/widgets/todo-list'
import type { Filter, Todo } from '@/types'
import { useLocalStorage } from '@/shared/lib/hooks/use-local-storage'
import { TodoFilters } from '@/widgets/todo-filters'

export const HomePage = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])
  const [filter, setFilter] = useLocalStorage<Filter>('todos_filter', 'all')
  const [title, setTitle] = useState('')

  const addTodo = (title: string) =>
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false
      }
    ])

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string, title: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, title } : todo)))
  }

  const activeCount = useMemo(
    () => todos.filter(todo => !todo.completed).length,
    [todos]
  )

  const filtered = useMemo(() => {
    if (filter === 'active') return todos.filter(todo => !todo.completed)
    if (filter === 'completed') return todos.filter(todo => todo.completed)
    return todos
  }, [todos, filter])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    addTodo(trimmed)
    setTitle('')
  }

  return (
    <div className="app-container">
      <header className="mb-4 sm:mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          ToDo List
        </h1>
      </header>
      <section className="card mb-3 p-3 sm:mb-4 sm:p-4">
        <TodoForm title={title} setTitle={setTitle} onSubmit={onSubmit} />
        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          activeCount={activeCount}
        />
      </section>
      <section className="card p-3 sm:p-4">
        <TodoList
          todos={filtered}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </section>
    </div>
  )
}
