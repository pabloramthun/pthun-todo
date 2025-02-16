import TodoList from "@/components/todo-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">My Todo List</h1>
      <TodoList />
      <Link href="/todo/add-todo" className="mt-4">
        <Button>Add New Todo</Button>
      </Link>
    </main>
  )
}

