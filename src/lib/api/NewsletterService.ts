import { api } from './HttpClient';

export class NewsletterService {
  static async subscribe(email: string) {
    return api.post<{ success: boolean }>(`/newsletter`, { email });
  }
}
