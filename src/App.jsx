import { useState } from "react";

export default function App() {
  const [seats, setSeats] = useState(5);
  const [months, setMonths] = useState(12);
  const [customer, setCustomer] = useState("Startup");

  return (
    <div className="min-h-screen">
      <nav className="p-4 font-bold">Cloudline | YOUR NAME</nav>

      <div className="bg-black text-white p-6">
        <header>
          <h1>{customer}: {seats} seats for {months} months</h1>
        </header>
        <button onClick={() => setSeats(seats + 1)}>Add seat</button>
        <button onClick={() => setMonths(months + 12)}>Add year</button>
        <button onClick={() => setCustomer("Enterprise")}>Enterprise</button>
      </div>

      <main className="flex gap-4 p-6">
        <div className="border p-4">
          <h2>Basic</h2>
          <p>Total: ${9 * seats * months}</p>
          <ul>
            <li>10 GB storage</li>
            <li>Email support</li>
          </ul>
        </div>
        <div className="border p-4">
          <h2>Pro</h2>
          <p>Total: ${19 * seats * months}</p>
          <ul>
            <li>100 GB storage</li>
            <li>Chat support</li>
          </ul>
        </div>
        <div className="border p-4">
          <h2>Business</h2>
          <p>Total: ${29 * seats * months}</p>
          <ul>
            <li>1 TB storage</li>
            <li>Phone support</li>
          </ul>
        </div>
      </main>

      <footer className="p-4">© 2026 Cloudline</footer>
    </div>
  );
}