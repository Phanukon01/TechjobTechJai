import React from 'react';
import { Button, Form, Modal} from 'react-bootstrap';
import { useState } from 'react';

const AdminWork = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (


    <div className="p-4" style={{ width: '100%', minHeight: '100vh', marginLeft: '14rem' }}>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>สร้างใบงาน</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ชื่องาน</Form.Label>
              <Form.Control
                placeholder="ชื่องาน"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>รายละเอียดงาน</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ชื่อลูกค้า</Form.Label>
              <Form.Control
                placeholder="ชื่อลูกค้า"
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlInput1">
              <Form.Label>แนบรูป :</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                className='w-25 mx-3'
              />
              <Form.Label>เวลา : </Form.Label>
              <Form.Control
                type='date'
                className='w-25 mx-3'
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ตำแหน่ง</Form.Label>
              <Form.Control
                placeholder="ตำแหน่ง"
              />
            </Form.Group>
            <Form.Select aria-label="Default select example" className='w-25'>
              <option>ประเภท</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <h1>Admin Work</h1>

      <div className='bg-secondary p-4 h-100 ' style={{ borderRadius: '10px' }}>
        <h5>ค้นหารายชื่อ</h5>
        <div className='d-flex justify-content-between align-items-center '>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Search"
            className='w-25'
          />
          <Form.Text id="passwordHelpBlock" muted></Form.Text>
          <div className='d-flex justify-content-around'>
            <Form.Select aria-label="Default select example" className='w-50'>
              <option>ประเภท</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Button variant="primary" onClick={handleShow}>
              สร้างใบงาน
            </Button>

          </div>
        </div>
        <div>

        </div>
        <div className='bg-white h-75 p-3 my-3' style={{ borderRadius: '10px' }}>
          <table className=' border-black  m-2 p-5 text-center' style={{ width: '98%' }}>
            <thead className='m-2'>
              <tr className='m-2' >
                <th>ลำดับ</th>
                <th>ชื่องาน</th>
                <th>ประเภท</th>
                <th>วัน/เดือน/ปี</th>
                <th>งานที่ทำ</th>
                <th>ตำแหน่ง</th>
              </tr>
            </thead>
            <tbody className='border-black border-top '>
              <tr className='m-2 border-bottom' >
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <button className='btn btn-success'>ส่ง</button>

              </tr>
              <tr className='m-2 border-bottom'>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <button className='btn btn-success'>ส่ง</button>

              </tr>
            </tbody>
          </table>
        </div>
            <div className="text-center mt-2">
                <Button
                    variant="btn btn-primary"
                >
                    First
                </Button>
                &nbsp;
                <Button
                    variant="btn btn-primary"

                >
                    Previous
                </Button>
                &nbsp;
                <span>
                    1&nbsp;/&nbsp;3
                </span>
                &nbsp;
                <Button
                    variant="btn btn-primary"

                >
                    Next
                </Button>
                &nbsp;
                <Button
                    variant="btn btn-primary"
                >
                    Last
                </Button>
            </div>
      </div>
    </div>
  );
}

export default AdminWork;
