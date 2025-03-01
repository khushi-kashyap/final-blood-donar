import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
     <div className="h-full mt-5 bg-light rounded">
      <div className="d-flex flex-column align-items-center text-center p-4">
        <h1 className="mb-3 text-primary">
          Welcome Admin <i className="text-success">{user?.name}</i>
        </h1>
        <h3 className="mb-3 text-secondary">Manage Blood Bank App</h3>
        <hr className="w-50" />
        <p className="text-muted text-justify" style={{ maxWidth: "800px" }}>
          Blood donation is a noble act that saves lives. Every drop counts, and by donating blood, you are giving someone a second chance at life. Hospitals and emergency centers rely on a steady supply of blood to treat accident victims, patients undergoing surgery, and individuals with medical conditions like anemia and cancer.
        </p>
        <ul className="text-muted text-left" style={{ maxWidth: "800px" }}>
          <li>One blood donation can save up to three lives.</li>
          <li>Blood donation helps maintain a sufficient blood supply for emergencies.</li>
          <li>Donating blood can improve heart health and reduce harmful iron stores.</li>
          <li>Regular donors are less likely to suffer from heart attacks and strokes.</li>
          <li>It is a simple and safe process that takes about 10-15 minutes.</li>
          <li>Blood cannot be manufactured; voluntary donation is the only source.</li>
        </ul>
      </div>
    </div>
    </Layout>
  );
};

export default AdminHome;
