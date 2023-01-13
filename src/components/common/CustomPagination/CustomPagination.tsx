import React, {FC} from "react";
import {TablePagination} from "@material-ui/core";

type CustomPaginationPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (page: number, pageSize?: number) => void
}
export const CustomPagination: FC<CustomPaginationPropsType> = ({
                                                                    totalUsersCount,
                                                                    pageSize,
                                                                    onPageChanged,
                                                                    currentPage
                                                                }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const [rowsPerPage, setRowsPerPage] = React.useState(pageSize);

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        onPageChanged(1, parseInt(event.target.value, 10))
    };
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        onPageChanged(page + 1, rowsPerPage)
    };
    return (
        <TablePagination
            component="div"
            labelRowsPerPage="Users per page:"
            count={pagesCount}
            page={currentPage - 1}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}