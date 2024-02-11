interface UserInterface {
  email: string;
  uid: string;
}

export type UserState = {
  authorizeChecked: boolean;
  user: UserInterface | null;
};
