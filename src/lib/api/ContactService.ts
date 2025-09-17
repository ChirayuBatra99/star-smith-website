import { api } from './HttpClient';

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export class ContactService {
  static async sendMessage(payload: ContactPayload) {
    return api.post<{ success: boolean; id: string }>(`/contact`, payload);
  }
}
