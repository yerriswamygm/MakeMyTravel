import React, { useEffect, useState } from "react";
import { db } from "../../apis/firebase";
import { getDocs, collection } from "@firebase/firestore";
import { toast } from "react-toastify";
import Moment from "react-moment";
import Styles from "./_admin.module.css";
import { Link } from "react-router-dom";
import { AiOutlineUserSwitch } from "react-icons/ai";
const ListOfUsers = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      let fetchUsers = async () => {
        let userCollectionRef = collection(db, "users");
        let userData = await getDocs(userCollectionRef);
        let payload = userData.docs.map(user => {
          return { ...user.data(), id: user.id };
        });
        setUsers(payload);
      };
      fetchUsers();
    } catch (error) {
      toast.error(error.code);
    }
  }, []);

  return (
    <div className={Styles.card}>
      <h2>
        <span>
          <AiOutlineUserSwitch />
        </span>
        Users{" "}
      </h2>
      <p>
        <span>users</span>
        <span>{users.length > 0 && users.length}</span>
      </p>
      <p>
        <Moment format="D/MMM/YYYY" withTitle>
          {new Date()}
        </Moment>
      </p>
      <p>
        <Link to="/admin/users">view users</Link>
      </p>
    </div>
  );
};

export default ListOfUsers;
