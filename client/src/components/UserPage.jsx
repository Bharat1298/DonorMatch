import { useEffect, useState } from "react";

export default function NeedsSelectionForm() {
  const [charities, setCharities] = useState([]);
  const [selectedNeeds, setSelectedNeeds] = useState([]);

  // Fetch the available needs from the backend
  useEffect(() => {
    async function fetchCharities() {
      try {
        const response = await fetch('http://localhost:5050/charities');
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const data = await response.json();
        setCharities(data);
      } catch (error) {
        console.error("Error fetching charities:", error);
      }
    }

    fetchCharities();
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const need = event.target.value;
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter((item) => item !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  /*// Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Example API call to save the selected needs to the user's profile
    try {
      const response = await fetch('http://localhost:5050/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          needs: selectedNeeds, // Send selected needs to the server
        }),
      });

      if (response.ok) {
        console.log('Selected needs saved to user profile');
      } else {
        console.error('Failed to save needs:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving needs:', error);
    }
  };
*/
  return (
    <form>
      <h3>Select the needs you're interested in:</h3>
      <div>
        {charities.map((charity) =>
          charity.needs.map((need, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={need}
                checked={selectedNeeds.includes(need)}
                onChange={handleCheckboxChange}
              />
              {need}
            </label>
          ))
        )}
      </div>
      <button type="submit">Save to Profile</button>
    </form>
  );
}
