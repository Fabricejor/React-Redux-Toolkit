import React,{useState} from 'react';
import {useDispatch } from 'react-redux';
import { addTask } from '../redux/slice/Taskslice';
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Addtask() {
    const[description , setDescription]= useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() === '') return;
        dispatch(addTask({ id: Date.now(), description, isDone: false , createdAt: (new Date().toLocaleString()) }));
        setDescription('');
    };
  return (
    <div>
       <Form onSubmit={handleSubmit} className="mb-4">
            <div className="d-flex">
                <Form.Group style={{width: "100%"}}>
                    <Form.Control 
                        required
                        placeholder="Ajouter Task"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="ms-2">
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </div>
        </Form>
    </div>
  )
}
