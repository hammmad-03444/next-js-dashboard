// import { Metadata } from 'next';
// import { fetchCustomers } from '@/app/lib/data';

// export const metadata: Metadata = {
//   title: 'Customers',
// };

// // Define the TypeScript interface
// interface Customer {
//   id: string;
//   name: string;
//   email?: string;
//   image_url?: string;
// }

// export default async function CustomersPage() {
//   let customers: Customer[] = [];

//   try {
//     // Fetch customers from your database
//     customers = await fetchCustomers();
//   } catch (error) {
//     console.error('Error fetching customers:', error);
//   }

//   return (
//     <div>
//       <h1>Customers</h1>
//       <ul>
//         {customers.length > 0 ? (
//           customers.map((customer) => (
//             <li key={customer.id}
//             className="mb-2 w-full rounded-md bg-white p-4">
//               <p>Name: {customer.name}</p>
//               {/* <p>ID: {customer.id}</p> */}
//               {customer.email && <p>Email: {customer.email}</p>}
//               {customer.image_url && (
//                 <img src={customer.image_url} alt={customer.name} style={{ width: '50px', height: '50px' }} />
//               )}
//             </li>
//           ))
//         ) : (
//           <p>No customers found.</p>
//         )}
//       </ul>
//     </div>
//   );
// }


import { Metadata } from 'next';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers | Dashboard',
};

// Define the TypeScript interface
interface Customer {
  id: string;
  name: string;
  email?: string;
  image_url?: string;
}

export default async function CustomersPage() {
  let customers: Customer[] = [];

  try {
    // Fetch customers from your database
    customers = await fetchCustomers();
  } catch (error) {
    console.error('Error fetching customers:', error);
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold text-gray-800">Customers</h1>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full rounded-md border border-gray-300 p-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
          🔍
        </span>
      </div>

      <div className="bg-white rounded-lg shadow">
        <ul className="divide-y divide-gray-200">
          {customers.length > 0 ? (
            customers.map((customer) => (
              <li key={customer.id} className="flex items-center gap-4 p-4">
                <div className="flex-shrink-0">
                  {customer.image_url ? (
                    <img
                      src={customer.image_url}
                      alt={customer.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gray-200" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{customer.name}</p>
                  {customer.email && (
                    <p className="text-sm text-gray-500">{customer.email}</p>
                  )}
                </div>
              </li>
            ))
          ) : (
            <li className="p-4 text-center text-gray-500">No customers found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
