"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import TodoItem from "./todo-item"

// This would typically come from your backend
const initialTodos = [
  { id: 1, title: "Learn Next.js", description: "Learn Next.js description", completed: false },
  { id: 2, title: "Build a todo app", description: "Learn Next.js description", completed: false },
  { id: 3, title: "Deploy to Vercel", description: "Learn Next.js description", completed: false },
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {todos.length === 0 ? (
            <p className="text-center text-muted-foreground">No todos yet. Add some!</p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

