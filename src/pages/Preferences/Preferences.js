import React, { useEffect, useRef } from "react";
import "./Preferences.css";

const apiKey = process.env.REACT_APP_API_KEY;
const mapApiJs = "https://maps.googleapis.com/maps/api/js";

// load google map api js
function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}

function Preferences() {
  const searchInput = useRef(null);

  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;
    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    autocomplete.setFields(["address_component", "geometry"]);
  };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => {
      initAutocomplete();
    });
  }, []);

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
          ref={searchInput}
        />
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default Preferences;
