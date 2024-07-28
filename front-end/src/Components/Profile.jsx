import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>About Us</h2>
      <div className="developer">
        <h3>Marcus B.</h3>
        <p>
          Marcus B. is a passionate software developer with expertise in full-stack development. He enjoys creating intuitive and efficient web applications. Marcus specializes in using React for frontend development and Express for backend services.
        </p>
      </div>
      <div className="developer">
        <h3>Michael D.</h3>
        <p>
          Michael D. is a talented developer who loves working on challenging projects. With a strong background in database management and server-side programming, Michael excels at creating robust and scalable applications. He is proficient in PostgreSQL and enjoys solving complex problems.
        </p>
      </div>
    </div>
  );
};

export default Profile;
