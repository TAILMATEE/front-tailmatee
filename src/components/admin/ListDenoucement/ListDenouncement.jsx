import React, { useState, useCallback } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Tabs, Tab } from "@nextui-org/react";
import AproveIcon from "../../../assets/Icons/AdminIcons/AproveIcon.svg";
import { EyeIcon } from "../../../assets/Icons/AdminIcons/EyeIcon.jsx";
import { DeleteIcon } from "../../../assets/Icons/AdminIcons/DeleteIcon.jsx";
import { columns, users } from "./data.js";

export const ListDenouncement = () => {
    const [visible, setVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [activeTab, setActiveTab] = useState("process");

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

    const renderTable = (filterKey) => {
        const filteredColumns = filterKey === "process" ? columns : columns.filter(col => col.uid !== "opciones");

        return (
            <>
                <Table aria-label="Example table with custom cells" className="w-[80%] mx-auto mt-4">
                    <TableHeader columns={filteredColumns}>
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
    
    return (
        <>
            <Tabs aria-label="Options" color="warning" className="mt-10 ml-[150px]" onSelectionChange={setActiveTab}>
                <Tab key="process" title="En progreso">
                    {renderTable("process")}
                </Tab>
                <Tab key="denied" title="Denegados">
                    {renderTable("denied")}
                </Tab>
                <Tab key="aproved" title="Aprovados">
                    {renderTable("aproved")}
                </Tab>
            </Tabs>
        </>
    );
};
