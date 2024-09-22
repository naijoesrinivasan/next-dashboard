import { fetchAllCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";


export default async function Page()  {
  const customers = await fetchAllCustomers()

  return (
    <section className="">
      <CustomersTable customers={customers}/>
    </section>
  )
}