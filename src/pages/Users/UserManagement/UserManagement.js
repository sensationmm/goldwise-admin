import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoleBadge from "../../../components/organisms/RoleBadge";
import BaseLayout from "../../BaseLayout/BaseLayout";
import { Button } from "@mui/material";
import { styleCell, styleCellDefault, styleEmptyCell, styleHeader, styleHeaderFilled, styleSectionHeader } from "../../../utils/table";
import Locked from "../../Kyc/Locked";

const SpreadManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/mock-data/list-users.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);


  const cellOverride = `${styleCellDefault} !text-left`

  return (
    <BaseLayout title="User Management"
      action={
        <Button
          variant="contained"
          size="large"
        >Add New User</Button>
      }
    >
      <h2 className="mb-5">Admin Users</h2>

      <table>
        <thead>
          <tr>
            <th className={cellOverride}>Name</th>
            <th className={cellOverride}>Email</th>
            <th className={cellOverride}>Two Factor Mobile</th>
            <th className={cellOverride}>Role</th>
            <th className={cellOverride}>User Status</th>
            <th className={cellOverride}></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={`user-${index}`}>
              <td className={cellOverride}>{user.fullName}</td>
              <td className={cellOverride}>{user.emailAddress}</td>
              <td className={cellOverride}></td>
              <td className={cellOverride}><RoleBadge level={user.idLevel}/></td>
              <td className={cellOverride}>
                <Locked isLocked={!user.canLogin} isActive={user.canLogin} isEmailVerified={user.canLogin} />
              </td>
              <td className={cellOverride}>
                <Button
                  variant="outlined"
                  disabled
                >
                  Lock Account
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
              
    </BaseLayout>
  );
};

export default SpreadManagement;
