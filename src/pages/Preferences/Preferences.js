import React from "react";
import "./Preferences.css";

function Preferences() {
  const [budget, setBudget] = React.useState("$");
  const [duration, setDuration] = React.useState("Full Day");
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    if (
      event.target.value === "$" ||
      event.target.value === "$$" ||
      event.target.value === "$$$"
    ) {
      setBudget(event.target.value);
    } else if (
      event.target.value === "Full Day" ||
      event.target.value === "Half Day" ||
      event.target.value === "After Work"
    ) {
      setDuration(event.target.value);
    } else {
      setLocation(event.target.value);
    }
  };

  const handleSubmit = () => {
    console.log(budget);
    console.log(duration);
    console.log(location);
  };

  return (
    <div className="create">
      <h2>Preferences</h2>
      <form onSubmit={handleSubmit}>
        <label>Budget</label>
        <div className="radioButtonBox">
          <label>
            <input
              type="radio"
              value="$"
              checked={budget === "$"}
              onChange={handleChange}
            />
            $
          </label>
        </div>
        <div className="radioButtonBox">
          <label>
            <input
              type="radio"
              value="$$"
              checked={budget === "$$"}
              onChange={handleChange}
            />
            $$
          </label>
        </div>
        <div className="radioButtonBox">
          <label>
            <input
              type="radio"
              value="$$$"
              checked={budget === "$$$"}
              onChange={handleChange}
            />
            $$$
          </label>
        </div>
        <label>Duration</label>
        <div className="radioButtonBox">
          <label>
            <input
              type="radio"
              value="Full Day"
              checked={duration === "Full Day"}
              onChange={handleChange}
            />
            Full Day
          </label>
        </div>
        <div className="radioButtonBox">
          <label>
            <input
              type="radio"
              value="Half Day"
              checked={duration === "Half Day"}
              onChange={handleChange}
            />
            Half Day
          </label>
        </div>
        <div className="radioButtonBox">
          <label>
            <input
              type="radio"
              value="After Work"
              checked={duration === "After Work"}
              onChange={handleChange}
            />
            After Work
          </label>
        </div>
        <label>Location</label>
        <input
          type="text"
          placeholder="Enter your location"
          className="locationInputText"
          value={location}
          onChange={handleChange}
        />
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default Preferences;
