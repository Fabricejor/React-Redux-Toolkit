import { useState } from "react";
import Addtask from './Components/Addtask';
import Tasklist from './Components/Tasklist';
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { removeTask } from './redux/slice/Taskslice';

function App() {
  const dispatch = useDispatch()

  const taskList = useSelector(state => state.tasks.tasklist)

  const [show, setShow] = useState(false);
  const [deleteTask, setDeleteTask] = useState({});

  const handleClickRemove = (task) => {
    setShow(true)
    setDeleteTask(task)
  }

  const handleRemove = () => {
    dispatch(removeTask(deleteTask))
    setShow(false)
  }
  return (
    <div className="App">
      <Container>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Remove task?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete it?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleRemove}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
        <Addtask />
        <h1 className="title">Task to do App</h1>
        <Table striped hover bordered style={{ textAlign: "center", verticalAlign: "middle" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {taskList && taskList.map(task => {
              return (
                <Tasklist 
                  key={task.id} 
                  id={task.id}
                  name={task.description} 
                  isDone={task.isDone} 
                  createdAt={task.createdAt}
                  updatedAt={task.updatedAt}
                  onClickRemove={handleClickRemove}
                />
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
