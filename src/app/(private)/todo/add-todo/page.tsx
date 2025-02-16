import AddTodoForm from "@/components/add-todo-form"

export default function AddTodoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Add New Todo</h1>
      <AddTodoForm />
    </main>
  )
}

