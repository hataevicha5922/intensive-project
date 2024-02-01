export const useUserAuth = (key: string) => {
  const logInUser = (value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getUser = () => {
    return localStorage.getItem(key);
  };

  const logOutUser = () => {
    localStorage.removeItem(key);
  };

  return { logInUser, getUser, logOutUser };
};
