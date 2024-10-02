import React from "react";
import useNetwork from "../hooks/useNetwork";
import Modal from "./Modal"; // Assuming you have a Modal component

const OfflineModal = () => {
  const isOnline = useNetwork();

  return (
    <Modal isOpen={!isOnline} onClose={() => {}}>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">You're Offline</h3>
        <p className="mt-2 text-gray-600">
          It seems you have lost your internet connection. Please check your
          connection and try again.
        </p>
      </div>
    </Modal>
  );
};

export default OfflineModal;
