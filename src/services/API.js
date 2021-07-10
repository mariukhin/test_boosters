import axios from 'axios';
import { getBaseUrl } from 'Utils/';

export default function API() {
  return axios.create({
    baseURL: getBaseUrl(),
    responseType: 'json',
    headers: { 'Content-Type': 'application/json' },
  });
}
