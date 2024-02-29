import React from 'react'
import { Badge } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { toggleStatus } from '../redux/slice/Taskslice';

export default function Tasklist({id, name, isDone, createdAt, updatedAt, onClickRemove}) {
  const dispatch = useDispatch()
    const handleClick = ({id}) => {
        dispatch(toggleStatus({id}))
    }
    console.log(id,name,isDone,createdAt,updatedAt);
  return (
      <tr>
            <td>
                <p className={`todo-item ${isDone && "done"}`}>{name}</p>
                <Badge bg="secondary">{createdAt}</Badge>
            </td>
            <td>
                <Badge bg={isDone ? 'success' : 'danger'}>{isDone ? "Done" : "Pending"}</Badge>
                {isDone && <p>{updatedAt}</p>}
            </td>
            {!isDone && 
                <td>
                <div style={{color: "green"}} onClick={() => handleClick({id})}>
                    <FaCheck />
                </div>
            </td>
            }
            <td colSpan={isDone ? 2 : 1}>
                <div style={{color: "red"}} onClick={() => onClickRemove({id})}>
                    <FaTimes />
                </div>
            </td>
        </tr>
    
  )
}
