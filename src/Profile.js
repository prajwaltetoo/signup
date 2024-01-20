import React, { useEffect, useState } from 'react';

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const data = await response.json();

        if (response.ok) {
          // Save user object in local storage
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
        } else {
          console.error(`Fetch profile failed: ${data.error}`);
        }
      } catch (error) {
        console.error('Fetch profile error:', error);
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user details as needed */}
        </div>
      )}
    </div>
  );
};

export default Profile;
