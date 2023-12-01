import React from 'react';

const InventoryTab: React.FC = () => {
  const handleAddNew = () => {
    // TODO: Implement your logic for adding a new item to the inventory
    alert('Add new inventory item functionality');
  };

  return (
    <div>
      <h2>Inventory Tab Content</h2>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleAddNew}
      >
        Add New Item
      </button>
    </div>
  );
};

export default InventoryTab;