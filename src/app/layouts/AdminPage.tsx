import React, { useState } from 'react';
import AdminOrders from '../components/AdminOrders';
import AdminProduct from '../components/AdminProduct';
import AdminUsers from '../components/AdminUsers';


enum Tab {
  Orders,
  Inventory,
  Users,
}

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Orders);

  const renderTabContent = () => {
    switch (activeTab) {
      case Tab.Orders:
        return <AdminOrders />;
      case Tab.Inventory:
        return <AdminProduct />;
      case Tab.Users:
        return <AdminUsers />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <button
          className={`${
            activeTab === Tab.Orders ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 rounded-l`}
          onClick={() => setActiveTab(Tab.Orders)}
        >
          Orders
        </button>
        <button
          className={`${
            activeTab === Tab.Inventory ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2`}
          onClick={() => setActiveTab(Tab.Inventory)}
        >
          Inventory
        </button>
        <button
          className={`${
            activeTab === Tab.Users ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 rounded-r`}
          onClick={() => setActiveTab(Tab.Users)}
        >
          Users
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default AdminPage;
