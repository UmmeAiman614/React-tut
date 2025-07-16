import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite"; // <-- might use ID
import { v4 as uuidv4 } from 'uuid';

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      console.log("✅ createAccount CALLED");
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Name:", name);

      const userId = uuidv4();
      console.log("✅ UUID:", userId, userId.length);

      const userAccount = await this.account.create(userId, email, password, name);
      console.log("✅ UserAccount:", userAccount);

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("❌ createAccount ERROR:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      console.log("✅ login called");
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("❌ login ERROR:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("❌ getCurrentUser ERROR:", error);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("❌ logout ERROR:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
