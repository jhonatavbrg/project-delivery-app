import React, { useEffect, useState } from 'react';
import getAllUsers from '../services/users';
import { useNavigate } from 'react-router-dom';
import deleteUser from '../services/deleteUser';

export default function ListUsers() {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const AllUsers = async () => {
      
      const dataUsers = await getAllUsers();
      setAllUsers(dataUsers);
    };
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.role ===' administrator') {
      AllUsers();
    } else if (user.role === 'customer'){
      navigate('/customer/orders', { replace: true });
    } else {
      navigate('/sellers/orders', { replace: true });
    }
  }, [allUsers, navigate]);

  const removeUser = async (id) => {
    await deleteUser(id);
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        { allUsers && allUsers.map((user, index) => (
          <li key={ user.id }>
            <span datatest-id="admin_manage__element-user-table-item-number-">
              { index + 1 }
            </span>

            <span datatest-id="admin_manage__element-user-table-name-">
              { user.name }
            </span>

            <span datatest-id="admin_manage__element-user-table-email-">
              { user.email }
            </span>
            <span datatest-id="admin_manage__element-user-table-role-">
              { user.role }
            </span>

            <button
              type="button"
              datatest-id="admin_manage__element-user-table-remove-"
              // disabled={ () => (user.role === 'administrator') }
              onClick={ () => removeUser(user.id) }
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
