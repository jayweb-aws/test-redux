import React from "react";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{user?.username}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Id:</strong> {user?.id}
            </p>
            <p>
                <strong>Email:</strong> {user?.email}
            </p>
        </div>
    );
};

export default Profile;

