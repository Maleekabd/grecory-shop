import { useState } from "react";
import { updateProfile } from "../../features/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Elements/Modal";
import { MdDownloadDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProfileData = useSelector((state) => state.profile);
  const [show, setShow] = useState(false);
  const [FormDataProfile, setFormDataProfile] = useState({
    firstName: getProfileData.firstName,
    lastName: getProfileData.lastName,
    Email: getProfileData.Email,
    Address: getProfileData.Address,
    City: getProfileData.City,
    State: getProfileData.State,
    postalCode: getProfileData.postalCode,
    Username: getProfileData.Username,
  });

  const handleFormDataProfileChange = (e) => {
    const { name, value } = e.target;
    setFormDataProfile({
      ...FormDataProfile,
      [name]: value,
    });
  };

  const handleSubmitFromDataProfile = (e) => {
    e.preventDefault();
    dispatch(updateProfile(FormDataProfile));
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
    navigate("/")
  };

  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
      <form
        noValidate=""
        onSubmit={handleSubmitFromDataProfile}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Personal Inormation</p>
            <p className="text-xs">Yuk lengkapi personal informasi kamu :D</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                name="firstName"
                value={FormDataProfile.firstName}
                onChange={handleFormDataProfileChange}
                placeholder="First name"
                className="p-2 w-full rounded-md focus:ring-opacity-75
                border border-gray-300 focus:ring-1 focus:ring-emerald-400 focus:outline-none dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                name="lastName"
                value={FormDataProfile.lastName}
                onChange={handleFormDataProfileChange}
                placeholder="Last name"
                className="p-2 w-full rounded-md focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border border-gray-300 focus:ring-1 focus:ring-emerald-400 focus:outline-none"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                name="Email"
                id="email"
                type="email"
                value={FormDataProfile.Email}
                onChange={handleFormDataProfileChange}
                placeholder="Email"
                className="p-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-400 focus:outline-none focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="Address"
                value={FormDataProfile.Address}
                onChange={handleFormDataProfileChange}
                placeholder=""
                className="p-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-400 focus:outline-none focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                id="city"
                type="text"
                name="City"
                placeholder="Kendari"
                value={FormDataProfile.City}
                onChange={handleFormDataProfileChange}
                className="p-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-400 focus:outline-none focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <input
                id="state"
                type="text"
                name="State"
                placeholder=""
                value={FormDataProfile.State}
                onChange={handleFormDataProfileChange}
                className="p-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-400 focus:outline-none focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                name="postalCode"
                placeholder=""
                value={FormDataProfile.postalCode}
                onChange={handleFormDataProfileChange}
                className="p-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-400 focus:outline-none focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Profile</p>
            <p className="text-xs">Yuk lengkapi profil kamu !</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="Username"
                placeholder="Username"
                value={FormDataProfile.Username}
                onChange={handleFormDataProfileChange}
                className="p-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-400 focus:outline-none focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>

            {/* <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Bio
              </label>
              <textarea
                id="bio"
                placeholder=""
                className="p-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-400 focus:outline-none focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              ></textarea>
            </div> */}
            {/* <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Photo
              </label>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/30x30/?random"
                  alt=""
                  className="w-10 h-10 bg-gray-500 rounded-full dark:bg-gray-300"
                />
                <button
                  type="button"
                  className="px-4 py-2 border rounded-md dark:border-gray-800"
                >
                  Change
                </button>
              </div>
            </div> */}
          </div>
        </fieldset>
        <button
          className="p-2 w-full 
        border border-gray-300 bg-emerald-600 rounded-md text-white"
        >
          Save
        </button>
      </form>

      <Modal show={show} handleClose={handleCloseModal}>
        <h2>profile updated</h2>
        <p>your profile has been successfully updated</p>
        <div className="flex justify-center items-center">
          <MdDownloadDone className="text-emerald-400" size={200} />
        </div>
      </Modal>
    </section>
  );
};

export default Profile;
