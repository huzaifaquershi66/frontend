import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../api/axios";
import Modal from "../Modal";
import useAuth from "../../hooks/useAuth";

const DeleteAccount = ({ onClose }) => {
  const { auth, setAuth } = useAuth();
  const [confirmationText, setConfirmationText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleConfirmationChange = (e) => {
    setConfirmationText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const expectedText = "deletemyaccount"; // Phrase without spaces and in lowercase
    const userText = confirmationText.replace(/\s+/g, "").toLowerCase();

    if (userText !== expectedText) {
      setError("Phrase does not match. Please type 'Delete my account' exactly.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.delete(`/users/${auth.user.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSuccess(response.data.message);
      toast.success(response.data.message, {
        autoClose: 1000,
      });

      setAuth(null);
      localStorage.removeItem("auth");
      setConfirmationText("");
      onClose(); // Close the modal after deletion
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose} className="p-3">
      <h3 className="font-bold text-3xl mb-4">Delete Account</h3>
      <p className="mb-4 text-red-600">
        To delete your account, please type the phrase <b>"Delete my account"</b> below.
        Be aware that this action is irreversible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="confirmationText" className="font-semibold text-base">
            Type "Delete my account" to confirm
          </label>
          <input
            type="text"
            id="confirmationText"
            value={confirmationText}
            onChange={handleConfirmationChange}
            className="w-full mt-1 p-2 rounded bg-bgOne border border-gray-300"
            placeholder="Delete my account"
            required
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-red-600 text-white font-semibold text-lg"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Account"}
          </button>
        </div>
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {success && <p className="text-green-600 mt-4">{success}</p>}
      </form>
    </Modal>
  );
};

export default DeleteAccount;
