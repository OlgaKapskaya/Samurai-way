import {TextField} from "@material-ui/core";
import React from "react";

type ProfileStatusProps = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false
    }
    activateEditMode(){
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            <div>
                {this.state.editMode
                    ? <TextField value={this.props.status} onBlur={() => this.deactivateEditMode()} autoFocus/>
                    : <span onDoubleClick={() => this.activateEditMode()}>{this.props.status} </span>
                }
            </div>
        </>
    }
}


// export const ProfileStatus = (props: ProfileStatusProps) => {
//     const [editMode, setEditMode] = useState(false)
//     const onClickStatusHandler = () => {
//         setEditMode(true)
//     }
//     return (
//         <>
//             <div>
//                 {editMode
//                     ? <TextField value={props.status} onBlur={() => setEditMode(false)}/>
//                     : <span onDoubleClick={onClickStatusHandler}>{props.status} </span>
//                 }
//             </div>
//         </>
//     )
// }
