import { useEffect, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
=======
import { useParams, useNavigate } from "react-router-dom";
>>>>>>> 90b15af (Work on user database)
=======
import { useNavigate } from "react-router-dom";
>>>>>>> f0b50ec (push for justin)

export default function User() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: [],
<<<<<<< HEAD
    interests: [],
=======
    interests: []
>>>>>>> 90b15af (Work on user database)
  });

  const [skillInput, setSkillInput] = useState(""); // State to track skill input field
  const [interestInput, setInterestInput] = useState(""); // State to track interest input field
<<<<<<< HEAD
  const navigate = useNavigate();

=======
  const [isNew, setIsNew] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // We can remove params.id check and focus on email
  }, [navigate]);

>>>>>>> 90b15af (Work on user database)
  // Update form state
  function updateForm(value) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Add new skill to the array
  function addSkill() {
<<<<<<< HEAD
<<<<<<< HEAD
    if (skillInput.trim()) {
      const updatedSkills = [...form.skills, skillInput.trim()];
=======
    if (skillInput) {
      const updatedSkills = [...form.skills, skillInput];
>>>>>>> 90b15af (Work on user database)
=======
    if (skillInput.trim()) {
      const updatedSkills = [...form.skills, skillInput.trim()];
>>>>>>> f0b50ec (push for justin)
      setForm((prev) => ({ ...prev, skills: updatedSkills }));
      setSkillInput(""); // Clear input field after adding
    }
  }

  // Add new interest to the array
  function addInterest() {
<<<<<<< HEAD
<<<<<<< HEAD
    if (interestInput.trim()) {
      const updatedInterests = [...form.interests, interestInput.trim()];
=======
    if (interestInput) {
      const updatedInterests = [...form.interests, interestInput];
>>>>>>> 90b15af (Work on user database)
=======
    if (interestInput.trim()) {
      const updatedInterests = [...form.interests, interestInput.trim()];
>>>>>>> f0b50ec (push for justin)
      setForm((prev) => ({ ...prev, interests: updatedInterests }));
      setInterestInput(""); // Clear input field after adding
    }
  }

  // Fetch the user by email
  async function fetchUserByEmail(email) {
    try {
      const response = await fetch(`http://localhost:5050/users?email=${email}`);
      if (!response.ok) {
        throw new Error(`Error fetching user: ${response.statusText}`);
      }
      const users = await response.json();
      return users.length > 0 ? users[0] : null;
    } catch (error) {
      console.error("Fetch user by email error: ", error);
    }
  }

  // Handle form submission
  async function onSubmit(e) {
    e.preventDefault();
<<<<<<< HEAD

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
=======
    const userProfile = { ...form };

    if (!form.email) {
      alert("Email is required!");
      return;
    }

    try {
      const existingUser = await fetchUserByEmail(form.email);

      let response;
      if (existingUser) {
        // If user exists, update their profile
        setIsNew(false);
        response = await fetch(`http://localhost:5050/users/${existingUser.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userProfile),
        });
      } else {
        // If user doesn't exist, create a new profile
        response = await fetch("http://localhost:5050/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userProfile),
        });
      }

      if (!response.ok) {
        throw new Error(`Failed to save user profile: ${response.status}`);
      }

      console.log("User profile saved successfully.");
      navigate("/list");
    } catch (error) {
      console.error("Error during form submission: ", error);
    } finally {
      setForm({ name: "", email: "", skills: [], interests: [] });
<<<<<<< HEAD
      navigate("/list");
>>>>>>> 90b15af (Work on user database)
=======
>>>>>>> f0b50ec (push for justin)
    }
  }

  return (
    <>
<<<<<<< HEAD
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
=======
      <h3 className="text-lg font-semibold p-4">Create/Update User Profile</h3>
      <div>
        {/* Name Input */}
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 sm:max-w-md">
>>>>>>> 90b15af (Work on user database)
          <input
            type="text"
            name="name"
            id="name"
<<<<<<< HEAD
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter name"
=======
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900"
            placeholder="Name"
>>>>>>> 90b15af (Work on user database)
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            required
          />
        </div>

        {/* Email Input */}
<<<<<<< HEAD
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
=======
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 sm:max-w-md">
>>>>>>> 90b15af (Work on user database)
          <input
            type="email"
            name="email"
            id="email"
<<<<<<< HEAD
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter email"
=======
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900"
            placeholder="Email"
>>>>>>> 90b15af (Work on user database)
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            required
          />
        </div>

        {/* Skills Input */}
<<<<<<< HEAD
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
=======
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="text"
            id="skills"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900"
            placeholder="Add a skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />
          <button type="button" onClick={addSkill} className="btn">
            Add Skill
          </button>
        </div>
        <ul>
          {form.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        {/* Interests Input */}
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="text"
            id="interests"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900"
            placeholder="Add an interest"
            value={interestInput}
            onChange={(e) => setInterestInput(e.target.value)}
          />
          <button type="button" onClick={addInterest} className="btn">
            Add Interest
          </button>
        </div>
        <ul>
          {form.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>

        <input
          type="submit"
          value="Save User Profile"
          className="inline-flex items-center justify-center mt-4 btn"
          onClick={onSubmit}
        />
      </div>
    </>
  );
}
<<<<<<< HEAD
>>>>>>> 90b15af (Work on user database)
=======
>>>>>>> f0b50ec (push for justin)
