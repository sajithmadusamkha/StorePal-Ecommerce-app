import React, { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "./Loading";
import { Button, Table } from "react-bootstrap";
import { useDeleteUserMutation } from "../services/appApi";

function ClientsAdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletUser, { isLoading, isSuccess }] = useDeleteUserMutation();

  function handleDeleteUser(id) {
    if (window.confirm("Are you sure?")) deletUser({ user_id: id });
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("/users")
      .then(({ data }) => {
        setLoading(false);
        setUsers(data);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  if (loading) return <Loading />;
  if (users?.length === 0)
    return <h2 className="py-2 text-center">No users yet</h2>;

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Client Id</th>
          <th>Client Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button
                disabled={isLoading}
                className="me-2"
                onClick={() => handleDeleteUser(user._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ClientsAdminPage;
