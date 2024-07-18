import React from "react";

export const ContentComment = () => {

    const [isSelected, setIsSelected] = React.useState(false);

    const user = [
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },      
    ]

    return (
        <section>
            <div>
                <div className="w-full flex justify-between gap-2 flex-col">
                    {user.map((userData, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <img src={userData.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
                            <div>
                                <p className="font-bold">{userData.username}</p>
                                <p>{userData.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                </div>
            </div>
        </section>
    );
}