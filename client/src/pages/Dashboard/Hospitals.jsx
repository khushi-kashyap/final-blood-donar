import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const Hospitals = () => {
  const [data, setData] = useState([]);
  //find donar records
  const getDonars = async () => {
    try {
      // const { data } = await API.get("/inventory/get-hospitals");
      //   console.log(data);
      const data = {
        success: true,
        hospitals: [
          {
            _id: 1,
            hospitalName: "Hospital of ABC",
            email: "abcHospital@gmail.com",
            phone: "9854375627",
            address: "Bata Chowk, Near Kali Mandir, Gaya"
          },
          {
            _id: 2,
            hospitalName: "City Care Hospital",
            email: "citycare@gmail.com",
            phone: "9876543210",
            address: "MG Road, Patna, Bihar"
          },
          {
            _id: 3,
            hospitalName: "Lifeline Medical Center",
            email: "lifeline@gmail.com",
            phone: "9123456789",
            address: "Sector 45, Gurgaon, Haryana"
          },
          {
            _id: 4,
            hospitalName: "Global Health Hospital",
            email: "globalhealth@gmail.com",
            phone: "9988776655",
            address: "Andheri West, Mumbai, Maharashtra"
          },
          {
            _id: 5,
            hospitalName: "Red Cross Hospital",
            email: "redcross@gmail.com",
            phone: "9090909090",
            address: "Connaught Place, New Delhi"
          },
          {
            _id: 6,
            hospitalName: "Hope Multispecialty Hospital",
            email: "hopehospital@gmail.com",
            phone: "9345678901",
            address: "Salt Lake, Kolkata, West Bengal"
          },
          {
            _id: 7,
            hospitalName: "Sunrise Healthcare",
            email: "sunrise@gmail.com",
            phone: "9786543210",
            address: "Banjara Hills, Hyderabad, Telangana"
          },
          {
            _id: 8,
            hospitalName: "Apollo Medical Center",
            email: "apollohospital@gmail.com",
            phone: "9654321098",
            address: "Indiranagar, Bangalore, Karnataka"
          },
          {
            _id: 9,
            hospitalName: "Fortis Hospital",
            email: "fortis@gmail.com",
            phone: "9456123789",
            address: "Anna Salai, Chennai, Tamil Nadu"
          },
          {
            _id: 10,
            hospitalName: "Medanta The Medicity",
            email: "medanta@gmail.com",
            phone: "9532146780",
            address: "Sector 38, Gurugram, Haryana"
          }
        ]        
      }
      if (data?.success) {
        setData(data?.hospitals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  return (
    <Layout>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.hospitalName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Hospitals;
