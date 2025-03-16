import React from "react";
import { useUnit } from "effector-react";
import { $selectedUser } from "../../store/store";

const UserDetails: React.FC = () => {
  const selectedUser = useUnit($selectedUser);

  if (!selectedUser)
    return <p style={{ textAlign: "center" }}>No user selected.</p>;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {selectedUser.name}
      </p>
      <p>
        <strong>Email:</strong> {selectedUser.email}
      </p>
    </div>
  );
};

export default UserDetails;
