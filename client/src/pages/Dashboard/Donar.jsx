import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const Donar = () => {
  const [data, setData] = useState([]);
  //find donar records
  const getDonars = async () => {
    try {
      // const { data } = await API.get("/inventory/get-donars");
      const data = {
        success: true,
        donars: [
          {
            _id: 1,
            name: "Shubham",
            organization: "ABC Foundation",
            email: "shubham@gmail.com",
            phone: "9864377645",
            location: "Mumbai, India",
            bloodGroup: "O+",
            role: "Donor",
            createdDate: "2025-02-28"
          },
          {
            _id: 2,
            name: "Khushi",
            organization: "XYZ Blood Bank",
            email: "khushi@example.com",
            phone: "9876543210",
            location: "Delhi, India",
            bloodGroup: "A-",
            role: "Recipient",
            createdDate: "2025-02-27"
          },
          {
            _id: 3,
            name: "Rahul",
            organization: "Red Cross Society",
            email: "rahul@example.com",
            phone: "9123456789",
            location: "Bangalore, India",
            bloodGroup: "B+",
            role: "Donor",
            createdDate: "2025-02-26"
          },
          {
            _id: 4,
            name: "Aisha",
            organization: "Global Health NGO",
            email: "aisha@example.com",
            phone: "9988776655",
            location: "New York, USA",
            bloodGroup: "AB-",
            role: "Recipient",
            createdDate: "2025-02-25"
          },
          {
            _id: 5,
            name: "Varun",
            organization: "Lifeline Blood Center",
            email: "varun@example.com",
            phone: "9090909090",
            location: "Los Angeles, USA",
            bloodGroup: "O-",
            role: "Donor",
            createdDate: "2025-02-24"
          },
          {
            _id: 6,
            name: "Meera",
            organization: "Hope Medical Center",
            email: "meera@example.com",
            phone: "9345678901",
            location: "London, UK",
            bloodGroup: "A+",
            role: "Recipient",
            createdDate: "2025-02-23"
          },
          {
            _id: 7,
            name: "Arjun",
            organization: "Helping Hands",
            email: "arjun@example.com",
            phone: "9786543210",
            location: "Dubai, UAE",
            bloodGroup: "B-",
            role: "Donor",
            createdDate: "2025-02-22"
          },
          {
            _id: 8,
            name: "Sophia",
            organization: "MedCare Foundation",
            email: "sophia@example.com",
            phone: "9654321098",
            location: "Toronto, Canada",
            bloodGroup: "AB+",
            role: "Recipient",
            createdDate: "2025-02-21"
          },
          {
            _id: 9,
            name: "Nathan",
            organization: "Heal The World",
            email: "nathan@example.com",
            phone: "9456123789",
            location: "Sydney, Australia",
            bloodGroup: "O+",
            role: "Donor",
            createdDate: "2025-02-20"
          },
          {
            _id: 10,
            name: "Emily",
            organization: "BloodConnect",
            email: "emily@example.com",
            phone: "9532146780",
            location: "Berlin, Germany",
            bloodGroup: "A-",
            role: "Recipient",
            createdDate: "2025-02-19"
          }
        ]        
      };
      
      if (data?.success) {
        setData(data?.donars);
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
            <th scope="col">Date</th>
            <th scope="col">Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.name || record.organisationName + " (ORG)"}</td>
              <td>{record.bloodGroup}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Donar;
