import React from "react";
import { Link, User } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";

export const ContentComment = () => {

    const [isSelected, setIsSelected] = React.useState(false);

    const user = [
        {
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ]

    return (
        <section>
            <div className="w-full flex justify-between gap-2">
                {user.map((user, index) => (
                    <User
                        key={index}
                        avatarProps={{ size: "md", src: user.avatar }}
                        description={
                            <Link isExternal href={user.url} size="sm">
                                @{user.username}
                            </Link>
                        }
                        
                    />
                ))
                }
            </div>
            <div>

            </div>
        </section>
    );
}