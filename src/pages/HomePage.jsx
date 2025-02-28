import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import moment from "moment";

const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //get function
  const getBloodRecords = async () => {
    try {
      // const { data } = await API.get("/inventory/get-inventory");
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
      }
      if (data?.success) {
        setData(data?.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <Layout>
      {user?.role === "admin" && navigate("/admin")}
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <h4
              className="ms-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-plus text-success py-4"></i>
              Add Inventory
            </h4>
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
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity} (ML)</td>
                    <td>{record.email}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Modal />
          </div>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
