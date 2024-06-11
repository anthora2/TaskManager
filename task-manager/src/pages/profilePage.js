import React, { useState } from 'react';

export default function ProfilePage() {
    const [profilePic, setProfilePic] = useState("https://avatars0.githubusercontent.com/u/35900628?v=4");

    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-gray-300 antialiased">
            <div className="container mx-auto my-60">
                <div>
                    <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto">
                        <div className="flex justify-center relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePicChange}
                                style={{ display: 'none' }}
                                id="fileInput"
                            />
                            <label htmlFor="fileInput" className="cursor-pointer">
                                <img
                                    src={profilePic}
                                    alt="Profile"
                                    className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                                />
                            </label>
                        </div>

                        <div className="mt-16 text-center">
                            <h1 className="font-bold text-3xl text-gray-900">Pantazi Software</h1>
                            <p className="text-sm text-gray-400 font-medium">UI Components Factory</p>
                            <p>
                                <span></span>
                            </p>
                            <div className="my-5 px-6">
                                <a href="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                                    Connect with <span className="font-bold">@pantazisoft</span>
                                </a>
                            </div>
                            <div className="flex justify-between items-center my-5 px-6">
                                <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                                    Facebook
                                </a>
                                <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                                    Twitter
                                </a>
                                <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                                    Instagram
                                </a>
                                <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                                    Email
                                </a>
                            </div>

                            <div className="w-full">
                                <h3 className="font-medium text-gray-900 text-left px-6">Recent activities</h3>
                                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150">
                                        <img
                                            src={profilePic}
                                            alt="Recent Activity"
                                            className="rounded-full h-6 shadow-md inline-block mr-2"
                                        />
                                        Updated his status
                                        <span className="text-gray-500 text-xs">24 min ago</span>
                                    </a>

                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150">
                                        <img
                                            src={profilePic}
                                            alt="Recent Activity"
                                            className="rounded-full h-6 shadow-md inline-block mr-2"
                                        />
                                        Added new profile picture
                                        <span className="text-gray-500 text-xs">42 min ago</span>
                                    </a>

                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150">
                                        <img
                                            src={profilePic}
                                            alt="Recent Activity"
                                            className="rounded-full h-6 shadow-md inline-block mr-2"
                                        />
                                        Posted new article in <span className="font-bold">#Web Dev</span>
                                        <span className="text-gray-500 text-xs">49 min ago</span>
                                    </a>

                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150">
                                        <img
                                            src={profilePic}
                                            alt="Recent Activity"
                                            className="rounded-full h-6 shadow-md inline-block mr-2"
                                        />
                                        Edited website settings
                                        <span className="text-gray-500 text-xs">1 day ago</span>
                                    </a>

                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                        <img
                                            src={profilePic}
                                            alt="Recent Activity"
                                            className="rounded-full h-6 shadow-md inline-block mr-2"
                                        />
                                        Added new rank
                                        <span className="text-gray-500 text-xs">5 days ago</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
