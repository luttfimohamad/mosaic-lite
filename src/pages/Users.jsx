import React from "react";
import { useState } from "react";
import { users } from "../data/UserData";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");

  const handleRowClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  const handleDeleteClick = (userId, userName) => {
    setSelectedUserId(userId);
    setSelectedUserName(userName);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setSelectedUserId(null);
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-bold my-40">User</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td onClick={() => handleRowClick(user.username)}>
                  <img
                    src={user.profilePicture}
                    alt="img"
                    className="h-20 w-20 rounded-full"
                  />
                  {user.username}
                </td>
                <td onClick={() => handleRowClick(user.email)}>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteClick(user.id, user.username)}
                  >
                    <BsFillTrashFill className="text-3xl ml-2 text-gray-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <p>
              Are you sure you want to delete item "{selectedUserName}"?
            </p>
            <div className="flex justify-end mt-4">
              <button className="mr-2" onClick={handleCancelDelete}>
                Cancel
              </button>
              <button className="text-red-600" onClick={handleConfirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
