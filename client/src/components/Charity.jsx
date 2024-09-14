import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

export default function Charity() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    needs: [],
    location: "",
    description: ""
  });

  const [inputValue, setInputValue] = useState(""); // State to track input field
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;
      if (!id) return;
      setIsNew(false);
      const response = await fetch(
        `http://localhost:5050/charities/${params.id.toString()}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const charity = await response.json();
      if (!charity) {
        console.warn(`Charity with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(charity);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Function to add new need to the array
  function AddNeed() {
    if (inputValue) {
      // Create a new array with the added need, and immediately set it in the form state
      const updatedNeeds = [...form.needs, inputValue];
      setForm((prev) => ({ ...prev, needs: updatedNeeds })); // Update form's needs array directly
      setInputValue(""); // Clear input field
    }
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    const charity = { ...form };
    try {
      let response;
      if (isNew) {
        // if we are adding a new charity we will POST to /charities.
        response = await fetch("http://localhost:5050/charities", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(charity),
        });
      } else {
        // if we are updating a charity we will PATCH to /charities/:id.
        response = await fetch(`http://localhost:5050/charities/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(charity),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("A problem occurred with your fetch operation: ", error);
    } finally {
      setForm({
        name: "",
        email: "",
        needs: [],
        location: "",
        description: ""
      });
      navigate("/list");
    }
  }

  return (
    <>
    <Link to = "/create"></Link>
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-10 rounded-xl shadow-xl">
        <h2 className="text-center text-4xl font-bold text-red-600">
          Support a Cause
        </h2>
        <p className="text-center text-gray-600">
          Fill out this form to request help or post a donation need.
        </p>
        <div className="space-y-6">
          <div className="rounded-md shadow-sm">
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                placeholder="First Last"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                placeholder="name@example.com"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </div>
            {/* Needs Input */}
            <div className="mb-4">
              <label htmlFor="needs" className="block text-sm font-medium text-gray-700">Items Needed</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="needs"
                  id="needs"
                  required
                  className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  placeholder="e.g., Clothes, Food"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  onClick={AddNeed}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                  Add
                </button>
              </div>
            </div>
            {/* Location Input */}
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                required
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                placeholder="e.g., Atlanta"
                value={form.location}
                onChange={(e) => updateForm({ location: e.target.value })}
              />
            </div>
            {/* Description Input */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Charity Description</label>
              <textarea
                name="description"
                id="description"
                required
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                placeholder="Tell us more about the charity and its goals"
                value={form.description}
                onChange={(e) => updateForm({ description: e.target.value })}
              />
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            id="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={onSubmit}
          >
            Save Charity Record
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
