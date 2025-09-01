import { useEffect, useState } from "react";

interface User {
  name: string,
  jobTitle: string,
}

const UseEffectUser = ({ name, jobTitle }: User) => {
    const [userBtn, setUserBtn] = useState<{name: string; jobTitle: string} | null>(null);

  useEffect(() => {
    if (userBtn) {
      document.title = `${name} - ${jobTitle}`;
    } else {
      document.title = "Aguardando usuário...";
    }
  }, [userBtn]);

  return (
    <>
      <div>
        {name ? (
          <div>
            <button onClick={() => setUserBtn({name, jobTitle})}>Usar meu nome de usuário</button>
            {userBtn && <p>{userBtn.name} - {userBtn.jobTitle}</p>}
          </div>
        ) : (
          <p>nenhum usuário logado</p>
        )}
      </div>
    </>
  );
};

export default UseEffectUser;
