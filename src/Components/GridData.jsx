import React from "react";

const GridData = ({ users }) => {
  return (
    <div className="grid-data">
      <h2 className="heading">User Details</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <img
                  src={user.avatar}
                  alt={`image of${user.first_name} ${user.last_name}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridData;
