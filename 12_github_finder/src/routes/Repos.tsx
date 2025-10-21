import type { RepoProps } from "../types/repo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "../components/Repos.module.css";
import Loader from "../components/Loader";
import BackBtn from "../components/BackBtn";
import Repo from "../components/Repo";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      setRepos(data);
    };

    if (username) {
      loadRepos(username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!repos && isLoading) return <Loader />;
  return (
    <>
      <div>
        <BackBtn />
        <h2>Explore os reposistórios do usuário: {username}</h2>
        {repos && repos.length === 0 && <p>Não há repositórios.</p>}
        {repos && repos.length > 0 && (
          <div>
            {repos.map((repo: RepoProps) => (
              <div>
                <Repo key={repo.name} {...repo} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Repos;
