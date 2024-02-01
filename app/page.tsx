import postgres from "postgres";

import { AddForm } from "@/app/add-form";
import { DeleteForm } from "@/app/delete-form";
import { TestingItems } from "./testingItems";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import LoadingTodos from "./loadingTodos";

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

export default async function Home() {
  let todos = await getCachedTodos();


  return (
    <main>
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
      <TestingItems/>
    </main>
  );
}
