import { fetchAllCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { FormattedCustomersTable } from "@/app/lib/definitions";
import { lusitana } from "@/app/ui/fonts";
import { custom } from "zod";

// export type FormattedCustomersTable = {
//   id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   total_invoices: number;
//   total_pending: string;
//   total_paid: string;
// };

export default async function Page()  {
  const customers = await fetchAllCustomers()

  return (
    <section className="">
      <CustomersTable customers={customers}/>
    </section>
  )
}