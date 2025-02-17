import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {BaseService} from "../../shared/services/base-service";

@Injectable()
export class UserService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getAll() {
    // return this.http.get<User[]>(`${config.apiUrl}/users`);
  }

  register(user: User) {
    return this.http.post(this.getServiceUrl(`/user/register`), user);
  }

  delete(id: number) {
    return this.http.delete(`users/`);
  }
}
