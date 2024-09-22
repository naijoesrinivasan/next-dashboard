import CustomersTable from "@/app/ui/customers/table";
import { Suspense } from "react";


export default async function Page()  {

  return (
    <section className="">
      <Suspense fallback={<h1>Loading customers</h1>}>
        <CustomersTable />
      </Suspense>
    </section>
  )
}