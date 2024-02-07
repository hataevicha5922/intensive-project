interface UserInterface {
    email: string;
    uid: string;
  }
  
  export type UserState = {
    authorize: boolean;
    user: UserInterface | null;
  };