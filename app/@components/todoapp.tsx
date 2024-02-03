import { unstable_cache } from "next/cache";
import postgres from "postgres";
import { AddForm } from "@/app/add-form";
import { DeleteForm } from "@/app/delete-form";
import { Suspense } from "react";
import LoadingTodos from "../loadingTodos";

let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
    ssl: "require",
  });
  
  
  const getCachedTodos = unstable_cache(
    async () => {
      return await sql`SELECT * FROM todos`;
    },
    ['todos'],
    {
      tags: ['todos']
    }
  );

export default async function TodoApp() {
    let todos = await getCachedTodos();
   
  
    return (
        <div>
        <h1 className="sr-only">Todos</h1>
        <AddForm />
        <Suspense fallback={<LoadingTodos />}>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <DeleteForm id={todo.id} todo={todo.text} />
            </li>
          ))}
        </ul>
        </Suspense>
        </div>
    )
          }