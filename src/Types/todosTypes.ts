export type indexable = {
  id: string,
}

export type Entity = indexable & {
  createdAt: Date,
  updatedAt: Date,
}

type StatusTodo = 'pendente' | 'em andamento' | 'pronto';

export type Todo = Entity & {
  description: string,
  status: StatusTodo,
}

export type AddTodo = Omit<Todo, keyof Entity>

export type EditTodo = Partial<Omit<Todo, keyof Entity>>