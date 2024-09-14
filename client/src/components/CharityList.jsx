import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Charities = (props) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      {props.charities.name}
    </td>
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      {props.charities.email}
    </td>
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      {props.charities.location}
    </td>
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      {props.charities.description}
    </td>
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      <div className="space-y-1">
        {props.charities.needs.map((need, index) => (
          <div key={index}>{need}</div>
        ))}
      </div>
    </td>
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
      <div className="flex gap-2">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
          color="red"
          type="button"
          onClick={() => {
            props.deleteCharities(props.charities._id);
          }}
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
);

export default function CharityList() {
  const [charities, setCharities] = useState([]);

  // This method fetches the charities from the database.
  useEffect(() => {
    async function getCharities() {
      const response = await fetch(`http://localhost:5050/charities/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const charities = await response.json();
      setCharities(charities);
    }
    getCharities();
    return;
  }, [charities.length]);

  // This method will delete a charity
  async function deleteCharities(id) {
    await fetch(`http://localhost:5050/charities/${id}`, {
      method: "DELETE",
    });
    const newCharities = charities.filter((el) => el._id !== id);
    setCharities(newCharities);
  }

  // This method will map out the charities on the table
  function charitiesList() {
    return charities.map((charities) => {
      return (
        <Charities
          charities={charities}
          deleteCharities={() => deleteCharities(charities._id)}
          key={charities._id}
        />
      );
    });
  }

  // This following section will display the table with the properties of charities.
  return (
    <>
    <Link to = "/list"></Link>
    <h3 className="text-lg font-semibold p-4 text-gray-800">Charities</h3>
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-yellow-100 text-red-600">
              <tr className="border-b">
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Email
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Location
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Description
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Needs
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 text-gray-700">
              {/* Charity rows */}
              {charitiesList()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  
  
}