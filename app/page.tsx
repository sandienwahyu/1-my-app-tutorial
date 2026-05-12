import Calendar from "@/components/Cards/Calendar";
import { DataTable } from "@/components/Cards/payments/data-table";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { TableChart } from "@/components/Cards/TableChart";
import { columns, Payment } from "@/components/Cards/payments/columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52j",
      amount: 400,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "828ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "928ed52g",
      amount: 200,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "128ed52h",
      amount: 300,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "228ed52j",
      amount: 400,
      status: "success",
      email: "m@example.com",
    },
  ];
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 mx-4 mt-4">
        <General />
        <div className="grid h-100 gap-2 items-center">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-rows-3 grid-cols-1 gap-4 h-210 sm:grid-rows-1 sm:grid-cols-3 sm:h-75 m-4">
        <Lines />
        <TableChart />
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
