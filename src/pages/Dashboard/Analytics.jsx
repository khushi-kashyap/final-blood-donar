import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
  //GET BLOOD GROUP DATA
  const getBloodGroupData = async () => {
    try {
      // const { data } = await API.get("/analytics/bloodGroups-data");
      const data = {
        success: true,
        bloodGroupData: [
          {
            bloodGroup: "AB+",
            totalIn: 14,
            totalOut: 10,
            availableBlood: 4,
          },
          {
            bloodGroup: "AB-",
            totalIn: 10,
            totalOut: 6,
            availableBlood: 4,
          },
          {
            bloodGroup: "A+",
            totalIn: 20,
            totalOut: 15,
            availableBlood: 5,
          },
          {
            bloodGroup: "A-",
            totalIn: 12,
            totalOut: 8,
            availableBlood: 4,
          },
          {
            bloodGroup: "B+",
            totalIn: 18,
            totalOut: 12,
            availableBlood: 6,
          },
          {
            bloodGroup: "B-",
            totalIn: 9,
            totalOut: 5,
            availableBlood: 4,
          },
          {
            bloodGroup: "O+",
            totalIn: 25,
            totalOut: 20,
            availableBlood: 5,
          },
          {
            bloodGroup: "O-",
            totalIn: 8,
            totalOut: 4,
            availableBlood: 4,
          }
        ]
      }
      if (data?.success) {
        setData(data?.bloodGroupData);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //lifrecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  //get function
  const getBloodRecords = async () => {
    try {
      // const { data } = await API.get("/inventory/get-recent-inventory");
      const data = {
        success: true,
        inventory: [
          {
            _id: 1,
            bloodGroup: "AB+",
            inventoryType: "IN",
            quantity: 2,
            email: "donor1@example.com",
            date: "2025-02-27",
            location: "New York Blood Center"
          },
          {
            _id: 2,
            bloodGroup: "O-",
            inventoryType: "OUT",
            quantity: 1,
            email: "hospital1@example.com",
            date: "2025-02-26",
            location: "Mount Sinai Hospital"
          },
          {
            _id: 3,
            bloodGroup: "A+",
            inventoryType: "IN",
            quantity: 3,
            email: "donor2@example.com",
            date: "2025-02-25",
            location: "Los Angeles Blood Bank"
          },
          {
            _id: 4,
            bloodGroup: "B-",
            inventoryType: "OUT",
            quantity: 2,
            email: "hospital2@example.com",
            date: "2025-02-24",
            location: "Mayo Clinic"
          },
          {
            _id: 5,
            bloodGroup: "O+",
            inventoryType: "IN",
            quantity: 5,
            email: "donor3@example.com",
            date: "2025-02-23",
            location: "Chicago Red Cross"
          },
          {
            _id: 6,
            bloodGroup: "AB-",
            inventoryType: "OUT",
            quantity: 1,
            email: "recipient1@example.com",
            date: "2025-02-22",
            location: "Johns Hopkins Hospital"
          },
          {
            _id: 7,
            bloodGroup: "B+",
            inventoryType: "IN",
            quantity: 4,
            email: "donor4@example.com",
            date: "2025-02-21",
            location: "Texas Medical Center"
          },
          {
            _id: 8,
            bloodGroup: "A-",
            inventoryType: "OUT",
            quantity: 2,
            email: "hospital3@example.com",
            date: "2025-02-20",
            location: "Stanford Hospital"
          },
          {
            _id: 9,
            bloodGroup: "O-",
            inventoryType: "IN",
            quantity: 6,
            email: "donor5@example.com",
            date: "2025-02-19",
            location: "Boston Blood Donation Center"
          },
          {
            _id: 10,
            bloodGroup: "AB+",
            inventoryType: "OUT",
            quantity: 3,
            email: "recipient2@example.com",
            date: "2025-02-18",
            location: "UCLA Medical Center"
          }
        ]        
      };

      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card m-2 p-1"
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In : <b>{record.totalIn}</b> (ML)
              </p>
              <p className="card-text">
                Total Out : <b>{record.totalOut}</b> (ML)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available : <b>{record.availabeBlood}</b> (ML)
            </div>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <h1 className="my-3">Recent Blood Transactions</h1>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donar Email</th>
              <th scope="col">TIme & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
