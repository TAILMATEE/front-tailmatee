import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { EditIcon } from "../../../assets/Icons/AdminIcons/EditIcon.jsx";
import { EyeIcon } from "../../../assets/Icons/AdminIcons/EyeIcon.jsx";
import { DeleteIcon } from "../../../assets/Icons/AdminIcons/DeleteIcon.jsx";
import { columns, users } from "./data.js";

export const ListDenouncement = () => {
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "usuario":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.avatar }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "tAbuso":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-sm text-default-400 text-wrap w-96 ">{user.descripcionAbuso}</p>
                    </div>
                );
            case "fecha":
                return (
                    <Chip className="justify-center items-center" size="lg" variant="flat" color="warning">
                        {cellValue}
                    </Chip>
                );
            case "opciones":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details" >
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <Table aria-label="Example table with custom cells" className="w-[80%] mx-auto mt-14"> 
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={users}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
