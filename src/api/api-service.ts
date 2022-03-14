import axios, { AxiosInstance, AxiosResponse } from "axios";
import { FormUser, User } from "./types";

const API_URL = "https://jsonplaceholder.typicode.com";

export class ApiService {
  public static api: AxiosInstance;

  static initialize(): void {
    this.api = axios.create({
      baseURL: API_URL,
      timeout: 1000 * 5,
    });
  }

  static async loadUsers(): Promise<User[]> {
    const response: AxiosResponse<User[]> = await this.api.get("/users");
    return response.data;
  }

  static async loadUser(id: string | number | undefined): Promise<FormUser> {
    const response: AxiosResponse<User> = await this.api.get(`/users/${id}`);

    const {
      name,
      username,
      email,
      phone,
      website,
      address: { street, city, zipcode },
    } = response.data;
    return {
      name,
      username,
      email,
      phone,
      website,
      street,
      city,
      zipcode,
      comment: "",
    };
  }
}

ApiService.initialize();
