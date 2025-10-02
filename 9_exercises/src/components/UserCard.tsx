interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const UserCard = ({ name, age, isAdmin }: User) => {
  if (isAdmin) {
    console.log("Adm logado");
  } else {
    console.log("Lamento, você não é adm");
  }

  return (
    <>
      <h1>Exercício 1</h1>
      <div>
        Nome: {name} - idade: {age} - Adm:{" "}
        {isAdmin ? <p>Você é adm</p> : <p>Você NÃO é adm otário</p>}
      </div>
    </>
  );
};

export default UserCard;
