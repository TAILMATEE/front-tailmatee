import React, { useState, useCallback } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import AproveIcon from "../../assets/Icons/AdminIcons/AproveIcon.svg";
import { EyeIcon } from "../../assets/Icons/AdminIcons/EyeIcon.jsx";
import { DeleteIcon } from "../../assets/Icons/AdminIcons/DeleteIcon.jsx";
import { columns, users } from "./data.js";

export const PetitionAdoptionList = () => {
    const [visible, setVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const openModal = (user) => {
        setSelectedUser(user);
        setVisible(true);
    };

    const closeModal = () => {
        setVisible(false);
        setSelectedUser(null);
    };

    const renderCell = useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.avatar }}
                        description={user.email}
                        name={cellValue}
                    >
                    </User>
                );
            case "pet":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.avatar }}
                        description={user.specie}
                        name={cellValue}
                    >
                    </User>
                );
            case "status":
                return (
                    <Chip className="justify-center items-center" size="lg" variant="flat" color="warning">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Detalles">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => openModal(user)}>
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Aprovar">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <img src={AproveIcon} />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Eliminar!">
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
        <>
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
            {selectedUser && (
                <Modal isOpen={visible} onClose={closeModal} backdrop="blur">
                    <ModalContent>
                        <ModalHeader className="flex flex-col gap-1">Detalles de la denuncia de: {selectedUser.usuario}</ModalHeader>
                        <ModalBody>
                            <p>{selectedUser.descripcionAbuso}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onClick={closeModal}>
                                Cerrar
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};