import React from "react";
import { Listbox, ListboxItem, Chip, ScrollShadow, Avatar } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { tailFriends } from "./TailFriends";

export const TailFriendsList = () => {

    const [values, setValues] = React.useState(new Set(["1"]));

    const arrayValues = Array.from(values);

    const topContent = React.useMemo(() => {
        if (!arrayValues.length) {
            return null;
        }

    }, [arrayValues.length]);

    return (
        <ListboxWrapper>
            <div className="ml-3 mt-3 mb-3">
                <h1 className="font-lato font-bold text-3xl text-blue">
                    Mis tailfriends
                </h1>
            </div>
            <Listbox
                topContent={topContent}
                classNames={{
                    base: "max-w-xl",
                    list: "max-h-[500px] overflow-scroll",
                }}
                defaultSelectedKeys={["0"]}
                items={tailFriends}
                label="Assigned to"
                selectionMode="multiple"
                onSelectionChange={setValues}
                variant="flat"
            >
                {(item) => (
                    <ListboxItem key={item.id} textValue={item.name}>
                        <div className="flex gap-2 items-center">
                            <Avatar alt={item.name} className="flex-shrink-0" size="lg" src={item.avatar} />
                            <div className="flex flex-col">
                                <span className="font-lato text-small text-bold">{item.name}</span>
                                <span className="font-lato text-small">{item.race}</span>
                            </div>
                        </div>
                    </ListboxItem>
                )}
            </Listbox>
        </ListboxWrapper>
    );
}

