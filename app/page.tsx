import postgres from "postgres";

import { AddForm } from "@/app/add-form";
import { DeleteForm } from "@/app/delete-form";
import { TestingItems } from "./@components/testingItems";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import LoadingTodos from "./loadingTodos";
import TodoApp from "./@components/todoapp";
import { FetchItems } from "./@components/fetchItems";

export default function Home() {
  
  return (
    <main>
      <TodoApp/>
      <div>
        This is 2nd unstable cache with seperate cache tag
      </div>
      <TestingItems/>
      <div>
        This is a fetch with seperate cache tag
      <FetchItems/>
      </div>
    </main>
  );
}
