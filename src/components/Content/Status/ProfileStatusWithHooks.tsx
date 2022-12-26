import {TextField} from "@material-ui/core";
import React, {ChangeEvent, FC, useState} from "react";

type ProfileStatusWithHooksPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
export const ProfileStatusWithHooks: FC<ProfileStatusWithHooksPropsType> = ({status, updateUserStatus}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(status)

    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(newStatus)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewStatus(e.currentTarget.value)
    }
    return (
        <>
            <div style={{height: 'max-content', fontWeight: 'bold'}}>
                Status:
                {
                    editMode
                        ? <TextField value={newStatus}
                                     onBlur={deactivateEditMode}
                                     onChange={onChangeStatus}
                                     autoFocus/>
                        : <span style={{
                            fontStyle: 'italic',
                            minWidth: '100px',
                            minHeight: '12px',
                            cursor: 'pointer',
                            fontWeight: 'normal'
                        }}
                                onDoubleClick={activateEditMode}>
                        {status ? ' ' + status : ' -'}
                        </span>
                }
            </div>
        </>
    )
}