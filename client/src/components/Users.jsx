import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function User() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: [],
    interests: [],
  });

  const [skillInput, setSkillInput] = useState(""); // State to track skill input field
  const [interestInput, setInterestInput] = useState(""); // State to track interest input field
  const navigate = useNavigate();

  // Update form state
  function updateForm(value) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Add new skill to the array
  function addSkill() {
    if (skillInput.trim()) {
      const updatedSkills = [...form.skills, skillInput.trim()];
      setForm((prev) => ({ ...prev, skills: updatedSkills }));
      setSkillInput(""); // Clear input field after adding
    }
  }

  // Add new interest to the array
  function addInterest() {
    if (interestInput.trim()) {
      const updatedInterests = [...form.interests, interestInput.trim()];
      setForm((prev) => ({ ...prev, interests: updatedInterests }));
      setInterestInput(""); // Clear input field after adding
    }
  }

  // Handle form submission
  async function onSubmit(e) {
    e.preventDefault();

    if (!form.email) {
      alert("Email is required!");
      return;
    }

    const userProfile = { ...form };

    try {
      const response = await fetch("http://localhost:5050/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userProfile),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      console.log("User profile saved successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error during form submission: ", error);
      alert(`Form submission error: ${error.message}`);
    } finally {
      setForm({ name: "", email: "", skills: [], interests: [] });
    }
  }

  return (
    <>
    <Link to = "/User"></Link>
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-center text-2xl font-bold text-red-600 mb-6">
          Create/Update User Profile
        </h3>

        {/* Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            required
          />
        </div>

        {/* Skills Input */}
        <div className="mb-4">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700"
          >
            Skills
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="skills"
              className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Add a skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
            />
            <button
              type="button"
              onClick={addSkill}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Add Skill
            </button>
          </div>
          <ul className="mt-2">
            {form.skills.map((skill, index) => (
              <li key={index} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Interests Input */}
        <div className="mb-4">
          <label
            htmlFor="interests"
            className="block text-sm font-medium text-gray-700"
          >
            Interests
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="interests"
              className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Add an interest"
              value={interestInput}
              onChange={(e) => setInterestInput(e.target.value)}
            />
            <button
              type="button"
              onClick={addInterest}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Add Interest
            </button>
          </div>
          <ul className="mt-2">
            {form.interests.map((interest, index) => (
              <li key={index} className="text-gray-700">
                {interest}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          onClick={onSubmit}
        >
          Save User Profile
        </button>
      </div>
    </div>
    </>
  );
}
