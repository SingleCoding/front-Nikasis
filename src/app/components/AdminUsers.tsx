import React from 'react';

const UsersTab: React.FC = () => {
  const handleAddNew = () => {
    // TODO: Implement your logic for adding a new user
    alert('Add new user functionality');
  };

  return (
    <div>
      <h2>Users Tab Content</h2>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleAddNew}
      >
        Add New User
      </button>
    </div>
  );
};

export default UsersTab;