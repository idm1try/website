export interface User {
  name: string;
  picture: string;
  sub: string;
  email?: string;
}

export interface Comment {
  id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
}
