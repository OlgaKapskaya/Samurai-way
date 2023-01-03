import React, {FC} from "react";
import {Pagination} from "@material-ui/lab";

type CustomPaginationPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (page: number) => void
}
export const CustomPagination: FC<CustomPaginationPropsType> = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    return (
        <Pagination count={pagesCount}
                    color='primary'
                    variant='outlined'
                    shape='rounded'
                    showFirstButton
                    showLastButton
                    page={currentPage}
                    onChange={(event, page) => onPageChanged(page)}
        />
    )
}