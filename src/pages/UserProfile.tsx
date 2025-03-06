import useSWR, { mutate } from "swr";
import axios from "axios";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWYyYmM2ZmVmOWM0MmE1MTMyMDYxOCIsInJvbGUiOiJhcnRpc3QiLCJpYXQiOjE3NDA0MTE2NDIsImV4cCI6MTc0MzAwMzY0Mn0.YL5m1sPV5csoW82kJMY0pfErXe2ArKrNCDNV4eK4cRw";

const fetcher = (url: string) => axios.get(url, { headers: { Authorization: token } }).then(res => res.data);

const UserProfile = () => {
  const { data: profile, error } = useSWR("http://localhost:5000/api/users/profile", fetcher);
  const [isEditing, setIsEditing] = useState(false);
  
  if (error) return <div className="h-[70vh] text-center text-4xl">Error loading profile.</div>;
  if (!profile) return <div className="h-[70vh] text-center text-4xl">Loading...</div>;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    mutate("http://localhost:5000/api/users/profile", { ...profile, [e.target.name]: e.target.value }, false);
  };
  
  // onchange for the socialLinks as they are a map send from the backend and we need to update it manually
  const handleSocialLinksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    mutate("http://localhost:5000/api/users/profile", { ...profile, socialLinks: { ...profile.socialLinks, [e.target.name]: e.target.value } }, false);
  };
  
  const handleSave = async () => {
    try {
      await axios.put("http://localhost:5000/api/users/profile", profile, {
        headers: { Authorization: token },
      });
      mutate("http://localhost:5000/api/users/profile");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  
  return (
    <div className="min-h-[80vh] max-w-3xl mx-4 sm:mx-auto p-4 sm:p-12 my-8 bg-white dark:bg-[#1E1E1E] shadow-lg rounded-lg">
      <div className="flex max-sm:flex-col sm:items-center gap-4">
        <div className="w-20 h-20 flex items-center justify-center text-white text-6xl bg-gray-300 dark:bg-gray-700 rounded-full select-none">M</div>
        <div>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full sm:text-lg font-semibold px-2 border rounded-lg bg-gray-100 dark:bg-[#181818] dark:text-white focus:outline-none"
              />
            ) : (
              <h2 className="text-xl font-semibold">{profile.name}</h2>
            )}
            <Badge variant="outline" className="bg-gray-900 hover:opacity-90 text-white dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 transition select-none">{profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}</Badge>
          </div>
          {isEditing ? (
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="toiterate resize-none w-full mt-2 text-sm px-2 py-1 border rounded-lg bg-gray-100 dark:bg-[#181818] dark:text-white focus:outline-none"
            />
          ) : (
            <p className="text-gray-600 dark:text-gray-400">{profile.bio}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">About the {profile.role}</h3>
        {isEditing ? (
          <textarea
            name="description"
            value={profile.description}
            onChange={handleChange}
            className="toiterate w-full mt-2 text-sm px-2 py-1 border rounded-lg bg-gray-100 dark:bg-[#181818] dark:text-white focus:outline-none"
          />
        ) : (
          <p className="mt-2 text-gray-600 dark:text-gray-400">{profile.description}</p>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Social Links</h3>
        {isEditing ? (
          <div className="flex flex-col gap-2 mt-2">
            <input type="text" name="LinkedIn" value={profile.socialLinks.LinkedIn} onChange={handleSocialLinksChange} placeholder="LinkedIn URL" className="w-fit rounded-sm px-1 focus:outline-none focus:bg-gray-100 dark:focus:bg-[#181818]" />
            <input type="text" name="Twitter" value={profile.socialLinks.Twitter} onChange={handleSocialLinksChange} placeholder="Twitter URL" className="w-fit rounded-sm px-1 focus:outline-none focus:bg-gray-100 dark:focus:bg-[#181818]" />
            <input type="text" name="Instagram" value={profile.socialLinks.Instagram} onChange={handleSocialLinksChange} placeholder="Instagram URL" className="w-fit rounded-sm px-1 focus:outline-none focus:bg-gray-100 dark:focus:bg-[#181818]" />
            <input type="text" name="Portfolio" value={profile.socialLinks.Portfolio} onChange={handleSocialLinksChange} placeholder="Portfolio URL" className="w-fit rounded-sm px-1 focus:outline-none focus:bg-gray-100 dark:focus:bg-[#181818]" />
          </div>
        ) : (
          <ul className="mt-2 space-y-2">
            {profile?.socialLinks &&
              Object.entries(profile.socialLinks).map(([key, value]) =>
                typeof value === "string" && value.trim() ? (
                  <li key={key}>
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </a>
                  </li>
                ) : null
              )}
          </ul>

        )}
      </div>
      
      <div className="mt-6 flex items-center gap-4">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-md select-none">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-500 text-white rounded-md select-none">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-gray-900 hover:opacity-90 text-white rounded-md dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 transition select-none">
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;