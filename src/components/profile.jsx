import React from "react";
import {useState, useEffect} from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile(){
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserDetails = async () => {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            setUserDetails(user);
        });
    };
    useEffect(() => {
        fetchUserDetails();
    }, []);

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/login";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }

    return (
        <div>
            {userDetails ? (
                <>
                    <h3 className="text-green-500 text-9xl text-center mb-3 mt-24">Welcome!! You Made It 🙏🙏</h3>
                    <div>
                        <p className="text-5xl text-center mb-3 mt-96">Email: {userDetails.email}</p>
                        <p className="text-5xl text-center mt2">First Name: {userDetails.displayName}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bg-red-500 px-16 py-12 text-white rounded-full h-50 w-fit mt-24" onClick={handleLogout}>
                           <p className="text-5xl text-center mt-4"> Logout</p>
                        </button>
                    </div>


                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )

}

export default Profile;