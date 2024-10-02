import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../../api/axios";
import Modal from "../Modal";
import useAuth from "../../hooks/useAuth";

const ProfileUpdate = ({ onClose }) => {
  const { auth, setAuth } = useAuth();
  const [name, setName] = useState(auth.user.name || "");
  const [email, setEmail] = useState(auth.user.email || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedData = {
        name,
        email,
      };
      const response = await axios.put(
        `/users/${auth.user.id}`,
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
      
      const updatedAuth = {
        ...auth,
        user: { ...auth.user, name, email },
      };
      setAuth(updatedAuth);
      localStorage.setItem("auth", JSON.stringify(updatedAuth));

      setName("");
      setEmail("");
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
      <h3 className="font-bold text-3xl mb-4">Update Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="font-semibold text-base">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full mt-1 p-2 rounded bg-bgOne border border-gray-300"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="font-semibold text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            disabled={auth.user.isGoogle || false}
            onChange={handleEmailChange}
            className="w-full mt-1 p-2 rounded bg-bgOne border border-gray-300"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-primary text-white font-semibold text-lg"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {success && <p className="text-green-600 mt-4">{success}</p>}
      </form>
    </Modal>
  );
};

export default ProfileUpdate;
