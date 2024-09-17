"use client";
import { FormEvent } from "react";
import { trpc } from "../_trpc/client";
import { useState } from "react";

export default function Todo(): React.ReactNode {
  const [newTodo, setNewTodo] = useState<string>("");
  const getTodos = trpc.getTodos.useQuery();
  const addTodo = trpc.addTodo.useMutation({
      onSettled: () => {
          getTodos.refetch();
      },
  });

  function addTodoHandler(evt: FormEvent) {
    evt.preventDefault();
    addTodo.mutateAsync(newTodo);
    setNewTodo("");
  }

  return (
    <div>
      <form onSubmit={addTodoHandler} className={`flex w-max items-center`}>
        <input
          className = {`border-black border-2 rounded-md`}
          onChange={(evt) => {
            setNewTodo(evt.target.value);
          }}
          value={newTodo}
          type="text"
        />
        <button type="submit" className={`m-3 p-2 text-white hover:bg-blue-300 rounded-lg bg-blue-400`}>Add Note</button>
      </form>
      {JSON.stringify(getTodos.data)}
    </div>
  );
}
