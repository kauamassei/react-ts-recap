import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserProfileProps {
  userId: number;
}
const UserProfile = ({ userId }: UserProfileProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      const dataUsers = await response.json();

      setUser(dataUsers);
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return (
    <>
      <div>
        {user ? (
          <div>
            <p>
              <strong>{user.name}</strong>
            </p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ) : (
          <p>Carregando perfil do usuário</p>
        )}
      </div>
    </>
  );
};

export default UserProfile;
