import { useEffect, useState } from "react";

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    selectedNeeds: []
  });
  const [charities, setCharities] = useState([]);

  // Fetch the user's profile from the backend
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await fetch('http://localhost:5050/users/123');  // Replace '123' with the actual user ID or get it dynamically.
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const userProfile = await response.json();
        setProfile({
          name: userProfile.name,
          email: userProfile.email,
          selectedNeeds: userProfile.needs || []  // Assumes 'needs' is an array in the user object
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }

    // Fetch charities with their needs from the backend
    async function fetchCharities() {
      try {
        const response = await fetch('http://localhost:5050/charities');
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const charityData = await response.json();
        setCharities(charityData);  // Set charities in state
      } catch (error) {
        console.error("Error fetching charities:", error);
      }
    }

    fetchUserProfile();
    fetchCharities();
  }, []);

  // Handle checkbox change for selecting needs
  const handleCheckboxChange = (event) => {
    const need = event.target.value;
    if (profile.selectedNeeds.includes(need)) {
      setProfile({
        ...profile,
        selectedNeeds: profile.selectedNeeds.filter((item) => item !== need)
      });
    } else {
      setProfile({
        ...profile,
        selectedNeeds: [...profile.selectedNeeds, need]
      });
    }
  };

  // Handle form submission to update profile
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5050/users/123', {  // Replace '123' with actual user ID
        method: 'PATCH',  // Use PATCH for updating the profile
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: profile.name,
          email: profile.email,
          needs: profile.selectedNeeds,
        }),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
      } else {
        console.error('Failed to update profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // Handle profile data input change
  const handleInputChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        <h3>Select the needs you're interested in:</h3>
        <div>
          {charities.length > 0 ? (
            charities.map((charity) =>
              charity.needs.map((need, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={need}
                    checked={profile.selectedNeeds.includes(need)}
                    onChange={handleCheckboxChange}
                  />
                  {need}
                </label>
              ))
            )
          ) : (
            <p>Loading charities...</p>
          )}
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}