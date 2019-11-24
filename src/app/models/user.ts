export class User {
  id?: string;
  email?: string;
  password?: string;
  token?: string;
}

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}
