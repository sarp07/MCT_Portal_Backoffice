import React, { useState } from 'react';
import styles from './styles/AddUser.module.css';
import { Container } from '../components';

const AddUser = ({ onUserAdded }) => {
    const [newUser, setNewUser] = useState({
        kullanici_adi: '',
        name: '',
        surname: '',
        sifre: '',
        eposta: '',
        tip: 2, // Varsayılan tip değeri, isteğe bağlı olarak değiştirilebilir
        cuzdan_adresi: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/add-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                const data = await response.json();
                onUserAdded(data.insertedUserId);
                // İsteğe bağlı olarak başarı mesajını kullanıcıya göstermek için bir durum değişikliği yapabilirsiniz
                console.log('User added successfully:', data.message);
            } else {
                console.error('Error adding user:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <Container>
            <div className={styles.addUserContainer}>
                <h2>Add User</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Kullanıcı Adı:
                        <input
                            type="text"
                            name="kullanici_adi"
                            value={newUser.kullanici_adi}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Adı:
                        <input
                            type="text"
                            name="name"
                            value={newUser.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Soyadı:
                        <input
                            type="text"
                            name="surname"
                            value={newUser.surname}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Şifre:
                        <input
                            type="password"
                            name="sifre"
                            value={newUser.sifre}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        E-Posta:
                        <input
                            type="email"
                            name="eposta"
                            value={newUser.eposta}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Cüzdan Adresi:
                        <input
                            type="text"
                            name="cuzdan_adresi"
                            value={newUser.cuzdan_adresi}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit">Add User</button>
                </form>
            </div>
        </Container>
    );
};

export default AddUser;
