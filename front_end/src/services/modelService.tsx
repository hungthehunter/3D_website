import axiosClient from '../api/apiClient';
import { Contact } from '../types/types';

const API_URL = 'http://localhost:3000/hubspot';

export const getContacts = async (): Promise<Contact[]> => {
  const response = await axiosClient.get(`${API_URL}/contacts`);
  return response.data;
};

export const createContact = async (data: Contact) => {
  const response = await axiosClient.post(`${API_URL}/contacts`, data);
  return response.data;
};