import React, { useEffect, useState } from 'react';
import { getContacts, createContact } from '../../services/modelService';
import { Contact } from '../../types/types';

export const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState<Contact>({
    firstname: '',
    lastname: '',
    email: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createContact(formData);
      alert('create successfully!');
      fetchData(); 
      setFormData({ firstname: '', lastname: '', email: '' }); 
    } catch (error) {
      alert('Error creating contact!');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Danh sách HubSpot Contacts</h2>
      

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input 
          placeholder="First Name" 
          value={formData.firstname}
          onChange={e => setFormData({...formData, firstname: e.target.value})}
        />
        <input 
          placeholder="Last Name" 
          value={formData.lastname}
          onChange={e => setFormData({...formData, lastname: e.target.value})}
        />
        <input 
          placeholder="Email" 
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
        <button type="submit">Add Contact</button>
      </form>

      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            {c.firstname} {c.lastname} - <strong>{c.email}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};