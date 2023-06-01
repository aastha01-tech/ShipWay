import React,{useState} from 'react';
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';

export default function Modal() {
    const [inputdata, setInputData] = useState({
        clientCode: "",
        trackingNo: "",
        courierCode: "",
        customerName: "",
        emailId: "",
        mobileNo: "",
        companyName: ""
      });

      // status option
  const options = [
    { value: 'Delivered', label: 'Delivered' },
    { value: 'RTO', label: 'RTO' },
  ];

  const option =[
    {value:"India" , label: 'India'},
    {value:"Nepal" , label: 'Nepal'},
    {value:"Japan" , label: 'Japan'},
    {value:"USA" , label: 'USA'}
  ]

  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }
  const setStatusValue = (e) => {
  }

  const setCountryName = (e)=>{
  }
    
    return (
        <>
            <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content px-4">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Shipments</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        {/* //Create Your Shipments Details */}
                      
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Client Code</Form.Label>
                  <Form.Control type="text" name='clientCode' value={inputdata.clientCode} onChange={setInputValue} placeholder='Enter Your Client code' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Tracking No</Form.Label>
                  <Form.Control type="text" name='trackingNo' value={inputdata.trackingNo} onChange={setInputValue} placeholder='Enter Your Tracking No' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Order No</Form.Label>
                  <Form.Control type="number" name='orderId' value={inputdata.orderId} onChange={setInputValue} placeholder='Enter Your Order No' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Courier Code</Form.Label>
                  <Form.Control type="text" name='courierCode' value={inputdata.courierCode} onChange={setInputValue} placeholder='Enter Your Courier Code' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control type="text" name='customerName' value={inputdata.customerName} onChange={setInputValue}  placeholder='Select Your Profile' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control type="email" name='emailId' value={inputdata.emailId} onChange={setInputValue}  placeholder='Select Your Profile' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your ShipmentType</Form.Label>
                  <Select options={options}  onChange={setStatusValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control type="number" name='mobileNo' value={inputdata.mobileNo} onChange={setInputValue}  placeholder='Select Your Mobile No' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Country Name</Form.Label>
                    <Select options={option}  onChange={setCountryName} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" name='companyName' value={inputdata.companyName} onChange={setInputValue}  placeholder='Select Your Company Name' />
                </Form.Group>
                <Button variant="primary" type="submit" >
                  Submit
                </Button>
              </Row>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
