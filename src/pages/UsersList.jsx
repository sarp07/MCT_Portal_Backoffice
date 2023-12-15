import React, { useState, useEffect } from 'react';
import styles from './styles/Table.module.css';
import { Container, UserListTable } from '../components';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users');
                const data = await response.json();

                const filteredUsers = data.filter((user) => user.type === 2);

                setUsers(filteredUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Container maxWidth="md">
            <UserListTable users={users} setUsers={setUsers} />
        </Container>
    );
};

export default UserList;
