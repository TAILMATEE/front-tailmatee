import { Image } from "@nextui-org/react";

export const Banner = () => {
  return (
    <div className="w-full h-[200px] border-none">
      <Image
        removeWrapper
        className="w-full h-full object-cover rounded-none"
        src="https://as1.ftcdn.net/v2/jpg/05/07/84/10/1000_F_507841060_QcTDBg7u2hu36Nv4zyxjcvKe0rUTm6jq.jpg"
      />
    </div>
  );
};
