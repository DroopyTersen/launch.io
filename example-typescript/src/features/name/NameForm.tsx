import React from "react";

const NameForm = ({ firstName, lastName, onChange }: NameFormProps) => {
  console.log("NameForm -> firstName", firstName, lastName);
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => {
              onChange(e.target.value, "firstName");
            }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => {
              onChange(e.target.value, "lastName");
            }}
          />
        </div>
      </form>
    </div>
  );
};

export interface NameFormProps {
  firstName: string;
  lastName: string;
  onChange: (value: string, fieldName: string) => void;
}

export default NameForm;
