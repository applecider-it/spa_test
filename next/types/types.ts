export type AuthResult = {
  status: string;
  user: {
    name: string;
  } | null;
};
