import React from 'react';
import './styles/Table.module.css';

const UserListTable = ({ users, setUsers }) => {

    const handleDeleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const updatedUsers = users.filter((user) => user.id !== userId);
                setUsers(updatedUsers);
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className='user-list-table w-full px-6 h-auto  text-white py-8'>
            <table className='w-full flex flex-col'>
                <thead className='flex w-full'>
                    <tr className='flex w-full border  text-black border-black bg-amber-50'>
                        <th className='flex-[1] text-left px-2 border-r py-4 border-black'>ID</th>
                        <th className='flex-[4] text-left px-2 border-r py-4 border-black'>Username</th>
                        <th className='flex-[4] text-left px-2 border-r py-4 border-black'>Name</th>
                        <th className='flex-[4] text-left px-2 border-r py-4 border-black'>Surname</th>
                        <th className='flex-[5] text-left px-2 border-r py-4 border-black'>Email</th>
                        <th className='flex-[6] text-left px-2 py-4 border-r border-black'>Wallet Address</th>
                        <th className='flex-[2] text-left px-2'></th>
                    </tr>
                </thead>
                <tbody className='flex w-full flex-col'>
                    {users.map((user) => (
                        <tr className='flex w-full border-b border-l border-r border-black text-black' key={user.id}>
                            <td className='flex-[1] text-center px-2 border-r py-4 border-black'>{user.id}</td>
                            <td className='flex-[4] text-left px-2 border-r py-4 border-black'>{user.username}</td>
                            <td className='flex-[4] text-left px-2 border-r py-4 border-black'>{user.name}</td>
                            <td className='flex-[4] text-left px-2 border-r py-4 border-black'>{user.surname}</td>
                            <td className='flex-[5] text-left px-2 border-r py-4 border-black'>{user.email}</td>
                            <td className='flex-[6] text-left px-2 border-r py-4 border-black'>{user.walletAddress}</td>
                            <td className='flex-[2] text-left px-2 flex items-center justify-center'>
                                <button className='px-4 py-2 bg-red-600 rounded-lg text-white' onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserListTable