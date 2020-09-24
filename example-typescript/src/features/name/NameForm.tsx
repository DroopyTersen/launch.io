import React from "react";
import { useName } from "./name.hooks";

const NameForm = () => {
  const { firstName, lastName, updateName } = useName();
  console.log("NameForm -> firstName", firstName, lastName);
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => {
              updateName(e.target.value, "firstName");
            }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => {
              updateName(e.target.value, "lastName");
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default NameForm;
