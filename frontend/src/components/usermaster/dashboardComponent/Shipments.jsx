import React, { useEffect, useState } from 'react';
import BulkInsert from './AddShipment';
import './styles/FilterShipments.css';
import  Form  from 'react-bootstrap/Form';
import {IoIosColorFilter , IoMdCloudDownload} from 'react-icons/io';
import Select from 'react-select';
import {FaCloudUploadAlt} from 'react-icons/fa';
import {BiCartAdd} from 'react-icons/bi';
import Pagination from '@mui/material/Pagination';


const Shipments = () => {
    const [data, setData] = useState([]);
    const [date, setDate] = useState();
    const[TrackingNo,setTrackingNo] = useState('');
    const[awb,setAwb] = useState('');
    const[couriers,setCouriers] = useState('');

    const filterRecord=async()=>{
    const newData = data.filter(x => x.TrackingNo === (TrackingNo == "" ? x.TrackingNo : TrackingNo))
    .filter(y=>y.CourierCode == (awb == "" ? y.awb : awb))
    .filter(z=>z.couriers == (couriers == "" ? z.couriers : couriers))
    if(newData.length>0){
        setData(newData)
    }else{
        getData()
    }
    
    }

    const getData = () => {
        fetch('http://localhost:8080/shipments').then((result) => {
            result.json().then((resp) => {
                setData(resp)
                console.log(resp)
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const exportData = async () => {
        try {
          const response = await fetch("http://localhost:8080/export", {
            method: "GET",
          });
      
          if (response.ok) {
            const data = await response.json();
            window.open(data.downloadUrl, "_blank");
          } else {
            console.log("Response error:", response);
            alert("An error occurred");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred");
        }
      };
      
      const options = [
        { value: 'Delivered', label: 'Delivered' },
        { value: 'RTO', label: 'RTO' },
      ];
      

    return (
        <>
            <div className='container-fluid'>
               <p>Shipment</p>
                <div className='row bg-light'>
                    <div className='col-sm-7'></div>
                    <div className='col-sm-5 mt-2'>
                        <button className='btn btn-secondary fs-6  text-light me-2' > <FaCloudUploadAlt className="fs-5" /> Bulk Upload Shipments</button>
                        <button className='btn btn-secondary text-light fs-6'
                            data-bs-toggle="modal" data-bs-target="#exampleModal"> <BiCartAdd className='fs-5' /> Add Shipments</button>
                    </div>
                </div>


                <div className='row bg-light pt-5'>
                <div className='col-md-2 txt-width'>
                    <label>Date Form</label>
                    <input type="date" className='form-control' />
                </div>
                <div className='col-md-2 txt-width'>
                    <label>Date To</label>
                    <input type="date" className='form-control' />
                </div>
                <div className='col-md-2 txt-width'>
                    <label>Tracking No.</label>
                    <input type='text' placeholder='Tracking No.' value={TrackingNo} onChange={(e)=>setTrackingNo(e.target.value)} className='form-control'/>
                </div>
                <div className='col-md-2 txt-width'>
                    <label>Order No</label>
                    <input type='text' placeholder='Order No' value={couriers} onChange={(e)=>setCouriers(e.target.value)} className='form-control'/>
                </div>
                <div className='col-md-2 txt-width'>
                  <label>Status</label>
                  <Select options={options} />
                    
                </div>
                <div className='col-md-2 txt-width'>
                    <label>Carrier</label>
                    <input type='text' placeholder='Carrier' value={couriers} onChange={(e)=>setCouriers(e.target.value)} className='form-control'/>
                </div>
                <div className='col-md-2 txt-width text-center  pt-4'>
                    <button className='btn  w-75 text-light fs-6' onClick={filterRecord} style={{"background" : "#ed721d"}}> <IoIosColorFilter className='fs-5' /> Apply</button>
                </div>
            </div>
                    <div className='row bg-light  rounded pt-3' >
                    <div className='col-sm-12' style={{"overflowX":"auto"}}>
                        <div >
                        <p className='m-0' style={{ "fontFamily": "Calibri", "letterSpacing": ".8px" }}>Current Status</p>
                        <button className='btn btn-outline-dark' style={{marginLeft:"10px"}} >All</button><button style={{marginLeft:"10px"}} className='btn btn-outline-success' >Delivered</button><button style={{marginLeft:"10px"}} className='btn btn-outline-success' >RTO</button>
                        </div>
                    <div className='pb-3' style={{ "display": "flex" }}>
                            <span className='m-0' style={{ "fontFamily": "Calibri", "letterSpacing": ".8px" }}>Total : {data.length}  Shipments</span>
                            <div className='align-right'>
                                <button className='btn btn-secondary download-shipment text-light' onClick={exportData} > <IoMdCloudDownload className='fs-5'/> Download Shipments</button>
                            </div>
                        </div>
                        <table className='table table-striped table-bordered text-center ' style={{ "fontSize": "13px", }} >
                            <thead style={{ "background": "#ced4da" }}>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Tracking Number</th>
                                    <th>Current Status</th>
                                    <th>Courier Code</th>
                                    <th>Customer Details</th>
                                    <th>Email ID</th>
                                    <th>Mobile Number</th>
                                    <th>Shipment Type</th>
                                    <th>Country Name</th>
                                    <th>Date Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) =>
                                        
                                        
                                                <tr>
                                                <td>{item.TrackingNo}</td>
                                                <td>{item.ClientCode}<br />{item.TrackingNo}</td>
                                                <td><button className='btn btn-secondary text-light'>
                                                {
                                                    item.TrackingHistory[item.TrackingHistory.length-1].CurrentStatus
                                                }
                                                    </button></td>
                                                <td>{item.name}<br />{item.mobile}<br />{item.email}</td>
                                                <td>N/A</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>1</td>
                                                <td>N/A</td>
                                                <td>{item.TrackingHistory[item.TrackingHistory.length-1].ActionDate}</td>
                                            </tr>
                                              
                                    )
                                }
                            </tbody>
                        </table>
                        <Pagination count={10} shape="rounded" />
                      </div>
                </div>
            </div>
            <BulkInsert />
        </>

    );
};

export default Shipments;