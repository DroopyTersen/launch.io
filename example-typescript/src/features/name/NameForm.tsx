import React from "react";
import { Name } from "./name.service";

const NameForm = ({ name, onChange }: NameFormProps) => {
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            value={name.firstName}
            onChange={(e) => {
              onChange(e.target.value, "firstName");
            }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            value={name.lastName}
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
  name: Name;
  onChange: (value: string, fieldName: string) => void;
}

export default NameForm;
