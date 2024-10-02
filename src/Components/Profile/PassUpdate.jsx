import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../api/axios";
import Modal from "../Modal";
import useAuth from "../../hooks/useAuth";


const PassUpdate = ({ onClose }) => {
  const { auth } = useAuth();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const updatedData = {
        currentPassword,
        newPassword,
      };

      const response = await axios.put(
        `/users/${auth.user.id}/password`,
        JSON.stringify(updatedData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess(response.data.message);
      toast.success(response.data.message, {
        autoClose: 1000,
      });

      // Clear the input fields
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "An error occurred");
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose} className="p-3">
      <h3 className="font-bold text-3xl mb-4">Update Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="font-semibold text-base">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            className="w-full mt-1 p-2 rounded bg-bgOne border border-gray-300"
            placeholder="Enter your current password"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="font-semibold text-base">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="w-full mt-1 p-2 rounded bg-bgOne border border-gray-300"
            placeholder="Enter your new password"
            required
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-primary text-white font-semibold text-lg"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {success && <p className="text-green-600 mt-4">{success}</p>}
      </form>
    </Modal>
  );
};

export default PassUpdate;
