/* eslint-disable no-undef */
import { Card, CardFooter, Image, Button, Link } from "@nextui-org/react";

export const TailHouse = () => {
  const houses = [
    {
      id: 1,
      name: "House 1",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/469377606.jpg?k=09d3bed1330616d150ad5d015196224bb3a0d6f62f1e981ffacf64a6b8eee507&o=&hp=1",
    },
    {
      id: 2,
      name: "House 2",
      image: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      id: 3,
      name: "House 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3t0p3xGvAq0i3Drs7EjQsYo3hLzyCxnwmg&s",
    },
    {
      id: 4,
      name: "House 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3t0p3xGvAq0i3Drs7EjQsYo3hLzyCxnwmg&s",
    },
  ];

  return (
    <>
      {houses.map((house) => (
        <Card
          key={house.id}
          isFooterBlurred
          radius="lg"
          className="border-none w-[300px] h-[280px] my-5 mx-8"
        >
          <div className="aspect-w-3 aspect-h-2">
            <Image
              src={house.image}
              layout="fill"
              className="rounded-t-lg w-96 h-72 object-cover"
            />
          </div>
          <div>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">{house.name}</p>
              <Button
                className="text-tiny text-white bg-blue"
                variant="flat"
                color="secondary"
                radius="lg"
                size="sm"
                onClick={() => handleHouseClick(house.id)}
              >
                <Link
                  className="text-white font-lato"
                  color="warning"
                  href="/tailhousedetail"
                >
                  info
                </Link>
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </>
  );
};
