// src/services/api.ts

interface User {
  username: string;
  password: string;
}

const users: User[] = [
  { username: 'halrumah1924@gmail.com', password: 'securepassword123' },
  { username: 'admin@example.com', password: 'adminpass' }
];

export const loginUser = async (username: string, password: string): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const found = users.find(
        user => user.username === username && user.password === password
      );
      resolve(!!found); // return true if matched
    }, 500); // simulate API delay
  });
};
