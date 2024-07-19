import React from "react";
import { Avatar } from "@nextui-org/react";

export const ContentProfile = () => {

    const profileData = [
        {
            imageProfile: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            userName: "js_2020_dp",
            posts: "20",
            tailFriends: "10",
            name: "José Soto",
            description: "I love pets :D",
        }
    ]

    return (
        <main className="font-lato mt-20 flex justify-center">
            {profileData.map((data, index) => (
                <section key={index} className="flex">
                    <Avatar src={data.imageProfile} className="w-40 h-40 text-large" />
                    <article className="w-fit flex flex-col ml-28">
                        <h1 className="text-[20px] mb-5">{data.userName}</h1>
                        <div className="flex w-80 mb-5">
                            <p className="mr-10">{data.posts} Posts</p>
                            <p>{data.tailFriends} Tailfriends</p>
                        </div>
                        <p className="mb-1 font-bold">{data.name}</p>
                        <p>{data.description}</p>
                    </article>
                </section>
            ))}
        </main>

    )
}