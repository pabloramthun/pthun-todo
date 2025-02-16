"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2, ChevronDown, ChevronUp } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-4 border border-gray-200 rounded-md p-2">
      <div className="flex items-center space-x-2">
        <Checkbox checked={todo.completed} onCheckedChange={onToggle} id={`todo-${todo.id}`} />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`flex-grow ${todo.completed ? "line-through text-muted-foreground" : ""}`}
        >
          {todo.title}
        </label>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <Button variant="ghost" size="icon" onClick={onDelete} className="h-8 w-8">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      <CollapsibleContent className="mt-2">
        <p className="text-sm text-muted-foreground">{todo.description}</p>
      </CollapsibleContent>
    </Collapsible>
  )
}

