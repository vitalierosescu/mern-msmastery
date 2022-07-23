import axios from 'axios';
import { API_PUBLIC } from '../constants/connectionUrl';

const url = `${API_PUBLIC}/posts`;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, newData) => axios.patch(`${url}/${id}`, newData);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
