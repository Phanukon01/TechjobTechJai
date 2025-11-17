import React from 'react';
import { Button, Form, Modal, Badge , Dropdown} from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { fetchdateWork } from '../data/dateWork.jsx';

const AdminWork = () => {

  const [workRaw, setWorkRaw] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const itemsPerPage = 5;

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Refs สำหรับ form inputs
  const newIdRef = useRef();
  const newnameworkRef = useRef();
  const newdetailRef = useRef();
  const newcustomerRef = useRef();
  const newdateworkRef = useRef();
  const newroleRef = useRef();
  const newtypeworkRef = useRef();

  useEffect(() => {
    setWorkRaw(fetchdateWork());
  }, []);

  const deleteClicked = (id) => {
    setWorkRaw(workRaw.filter((work) => work.id !== id));
  };

  const saveClicked = () => {
    const namework = newnameworkRef.current.value;
    const detail = newdetailRef.current.value;
    const customer = newcustomerRef.current.value;
    const datework = newdateworkRef.current.value;
    const role = newroleRef.current.value;
    const typework = newtypeworkRef.current.value;

    if (namework.trim() !== '') {
      const newWork = {
        id: workRaw.reduce((prev, work) => work.id > prev ? work.id : prev, 0) + 1,
        namework,
        typework,
        detail,
        role,
        datework,
        time: '09:00 - 18:00',
        customer
      };

      setWorkRaw([...workRaw, newWork]);
    }

    handleClose();
  };

  // Pagination functions
  const totalPages = Math.ceil(workRaw.length / itemsPerPage);
  const goToFirst = () => setCurPage(1);
  const goToLast = () => setCurPage(totalPages);
  const goToNext = () => setCurPage(prev => Math.min(prev + 1, totalPages));
  const goToPrev = () => setCurPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="p-4" style={{ width: '100%', minHeight: '100vh', marginLeft: '14rem' }}>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>สร้างใบงาน</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="mb-3">
              <Form.Label style={{ margin: 0 }}>ID:</Form.Label>
              <Form.Control
                type="text"
                placeholder="id:"
                value={workRaw.reduce((prev, work) => work.id > prev ? work.id : prev, 0) + 1}
                disabled
                ref={newIdRef}
                className="w-25"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ชื่องาน</Form.Label>
              <Form.Control
                placeholder="ชื่องาน"
                ref={newnameworkRef}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>รายละเอียดงาน</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                ref={newdetailRef}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ชื่อลูกค้า</Form.Label>
              <Form.Control
                placeholder="ชื่อลูกค้า"
                ref={newcustomerRef}
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center">
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
                ref={newdateworkRef}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ตำแหน่ง</Form.Label>
              <Form.Control
                placeholder="ตำแหน่ง"
                ref={newroleRef}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ประเภทงาน</Form.Label>
              <Form.Select ref={newtypeworkRef}>
                <option value="">เลือกประเภท</option>
                <option value="งานไฟฟ้า">งานไฟฟ้า</option>
                <option value="งานประปา">งานประปา</option>
                <option value="งานทาสี">งานทาสี</option>
                <option value="งานแอร์">งานแอร์</option>
                <option value="งานหลังคา">งานหลังคา</option>
                <option value="งานช่างทั่วไป">งานช่างทั่วไป</option>
                <option value="งานลิฟต์">งานลิฟต์</option>
                <option value="งาน IT">งาน IT</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ปิด
          </Button>
          <Button variant="primary" onClick={saveClicked}>
            บันทึก
          </Button>
        </Modal.Footer>
      </Modal>

      <h1>Admin Work</h1>

      <div className='bg-secondary p-4 h-100' style={{ borderRadius: '10px' }}>
        <div className='d-flex justify-content-between align-items-center'>
          <Form.Control
            type="text"
            placeholder="Search"
            className='w-25'
          />
          <div className='d-flex gap-2'>
            <Form.Select aria-label="Filter by type">
              <option value="">ประเภททั้งหมด</option>
              <option value="งานไฟฟ้า">งานไฟฟ้า</option>
              <option value="งานประปา">งานประปา</option>
              <option value="งานทาสี">งานทาสี</option>
              <option value="งานแอร์">งานแอร์</option>
            </Form.Select>
            <Button variant="primary" onClick={handleShow}>
              สร้างใบงาน
            </Button>
          </div>
        </div>

        <div className='bg-white h-75 p-3 my-3' style={{ borderRadius: '10px' }}>
          <table className='border-black m-2 p-5 text-center' style={{ width: '98%' }}>
            <thead className='m-2'>
              <tr className='m-2'>
                <th>ลำดับ</th>
                <th>ชื่องาน</th>
                <th>ประเภท</th>
                <th>รายละเอียด</th>
                <th>วัน/เดือน/ปี</th>
                <th>ตำแหน่ง</th>
                <th>จัดการ</th>
              </tr>
            </thead>
            <tbody className='border-black border-top mt-2'>
              {workRaw
                .filter((work, index) => {
                  return (
                    index >= (curPage - 1) * itemsPerPage &&
                    index <= curPage * itemsPerPage - 1
                  );
                })
                .map((work) => {
                  return (
                    <tr key={work.id} className='border-bottom'>
                      <td className="text-center">
                        <Badge bg="secondary">{work.id}</Badge>
                      </td>
                      <td >{work.namework}</td>
                      <td>{work.typework}</td>
                      <td>{work.detail}</td>
                      <td>{work.datework}</td>
                      <td>{work.role}</td>
                      <td className="d-flex justify-content-center align-items-center gap-2">
                        <Button
                          variant="success"
                          size="sm"
                          className="me-2"
                        >
                          ส่ง
                        </Button>

                        <Dropdown>
                          <Dropdown.Toggle variant="light" size="sm" id="dropdown-basic">
                            <i className="bi bi-three-dots-vertical"></i>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleEdit(work.id)}>
                              <i className="bi bi-pencil-square me-2"></i>
                              แก้ไข
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => deleteClicked(work.id)} className="text-danger">
                              <i className="bi bi-trash me-2"></i>
                              ลบ
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-2">
          <Button
            variant="primary"
            onClick={goToFirst}
            disabled={curPage === 1}
          >
            First
          </Button>
          &nbsp;
          <Button
            variant="primary"
            onClick={goToPrev}
            disabled={curPage === 1}
          >
            Previous
          </Button>
          &nbsp;
          <span>
            {curPage}&nbsp;/&nbsp;{totalPages}
          </span>
          &nbsp;
          <Button
            variant="primary"
            onClick={goToNext}
            disabled={curPage === totalPages}
          >
            Next
          </Button>
          &nbsp;
          <Button
            variant="primary"
            onClick={goToLast}
            disabled={curPage === totalPages}
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminWork;