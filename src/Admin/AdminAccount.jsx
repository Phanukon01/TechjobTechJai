import { Form, Button, Dropdown } from 'react-bootstrap';
import React from 'react';



const AdminAccount = () => {

  return (
    <div className="p-4" style={{ width: '100%', minHeight: '100vh', marginLeft: '14rem' }}>
      <h2>Admin Account Management</h2>
      <div className='d-flex justify-content-around  w-100'>
        <div className='d-flex m-2 bg-secondary rounded align-items-center justify-content-between p-3' style={{ width: '25rem', height: '5rem' }}>
          <div className='d-flex align-items-center'>
            <div className='mx-2 bg-black' style={{ borderRadius: '100px', height: '4rem', width: '4rem' }}></div>
            <div className='ms-3'>
              <div className='text-muted small'>จำนวนงาน</div>
              <div className='fs-4 fw-bold'>XXXX</div>
            </div>
          </div>
        </div>
        <div className='d-flex m-2 bg-secondary rounded align-items-center justify-content-between p-3' style={{ width: '25rem', height: '5rem' }}>
          <div className='d-flex align-items-center'>
            <div className='mx-2 bg-black' style={{ borderRadius: '100px', height: '4rem', width: '4rem' }}></div>
            <div className='ms-3'>
              <div className='text-muted small'>รายรจ่าย</div>
              <div className='fs-4 fw-bold'>XXXX</div>
            </div>
          </div>
        </div>
        <div className='d-flex m-2 bg-secondary rounded align-items-center justify-content-between p-3' style={{ width: '25rem', height: '5rem' }}>
          <div className='d-flex align-items-center'>
            <div className='mx-2 bg-black' style={{ borderRadius: '100px', height: '4rem', width: '4rem' }}></div>
            <div className='ms-3'>
              <div className='text-muted small'>รายรับ</div>
              <div className='fs-4 fw-bold'>XXXX</div>
            </div>
          </div>
        </div>
      </div>
      <div className='m-2 bg-secondary rounded ' style={{ width: '77rem', height: '40rem' }}>
        <div className='bg-secondary p-4 h-100 ' style={{ borderRadius: '10px' }}>
          <div className='d-flex justify-content-between align-items-center '>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Search"
              className='w-25'
            />
          </div>
          <div className='bg-white h-75 p-3 my-3' style={{ borderRadius: '10px' }}>
            <table className=' border-black  m-2 p-5 text-center' style={{ width: '98%' }}>
              <thead className='m-2'>
                <tr className='m-2' >
                  <th>ลำดับ</th>
                  <th>ชื่อ</th>
                  <th>ประเภท</th>
                  <th>รายได้</th>
                  <th>สถานะ</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className='border-black border-top '>
                <tr className='m-2 border-bottom' >
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <div className='d-flex justify-content-end'>
                    <td>
                      <Dropdown >
                        <Dropdown.Toggle variant="light" size="sm" id="dropdown-basic">
                          <i className="bi bi-three-dots-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleEdit(item.id)}>
                            <i className="bi bi-pencil-square me-2"></i>
                            แก้ไข
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleDelete(item.id)} className="text-danger">
                            <i className="bi bi-trash me-2"></i>
                            ลบ
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </div>

                </tr>
                <tr className='m-2 border-bottom'>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <div className='d-flex justify-content-end'>
                    <td>
                      <Dropdown >
                        <Dropdown.Toggle variant="light" size="sm" id="dropdown-basic">
                          <i className="bi bi-three-dots-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleEdit(item.id)}>
                            <i className="bi bi-pencil-square me-2"></i>
                            แก้ไข
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleDelete(item.id)} className="text-danger">
                            <i className="bi bi-trash me-2"></i>
                            ลบ
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </div>
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
    </div>
  );

}

export default AdminAccount;
