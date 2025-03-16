import React from "react";

const Application = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <h1>Job Application</h1>
      <h2>Apply Here</h2>
      <p>this is some Text</p>
      <img src={undefined} alt="some-text" />
      <div data-testid="someTestId"></div>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="FullName"
            id="name"
            value="text-value"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>

        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="az">Az</option>
            <option value="en">En</option>
            <option value="ru">Ru</option>
            <option value="tr">Tr</option>
          </select>
        </div>

        <label htmlFor="terms">
          <input type="checkbox" name="" id="terms" /> I agree
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Application;
