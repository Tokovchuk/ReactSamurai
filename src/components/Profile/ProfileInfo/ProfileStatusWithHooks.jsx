import React, {useEffect, useState} from 'react';


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChanged = (evt) => {
        setStatus(evt.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
            </div>
            }
            { editMode &&
            <div>
                <input
                    onBlur={deactivateEditMode}
                    onChange={onStatusChanged}
                    autoFocus={true}
                    value={status}
                    type='text'
                />
            </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;