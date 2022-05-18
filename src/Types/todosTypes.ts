export type indexable = {
  id: number,
}

export type Entity = indexable & {
  createdAt: Date,
  updatedAt: Date,
}

type StatusTodo = 'pendente' | 'em andamento' | 'pronto';

export type Todo = Entity & {
  decription: string,
  status: StatusTodo,
}