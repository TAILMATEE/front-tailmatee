import React from "react";
import { Card, Image } from "@nextui-org/react";


export const Publications = () => {

    const publications = [
        {
            imgPublication: "https://cdn.prod.website-files.com/61801f88d983e9bb5edaa4c5/666b8e2af2ae31b1f89e064b_20231226-SB-hero-interacciones-instagram.webp"
        },
        {
            imgPublication: "https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_640.png"
        },
        {
            imgPublication: "https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_640.png"
        },
        {
            imgPublication: "https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_640.png"
        },
        {
            imgPublication: "https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_640.png"
        },
        {
            imgPublication: "https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_640.png"
        },
        {
            imgPublication: "https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_640.png"
        },
        {
            imgPublication: "https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_640.png"
        },
    ];
    return (
        <main className="flex flex-wrap items-end px-20">
            
            {publications.map((publication, index) => (
                <Card
                    key={index}
                    radius="lg"
                    className="border-none mb-10 mt-10 ml-10 w-[400px] h-[280]"
                >
                    <Image
                        isZoomed
                        src={publication.imgPublication}
                        alt="publication"
                        className="rounded-t-lg w-100 h-72 object-cover"
                        layout="fill"
                    />
                </Card>
            ))}
        </main>
    )
};