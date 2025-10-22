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

      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      orderedRepos = orderedRepos.slice(0, 5);

      setRepos(orderedRepos);
    };

    if (username) {
      loadRepos(username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!repos && isLoading) return <Loader />;
  return (
    <>
      <div className={classes.repos}>
        <BackBtn />
        <h2>Explore os reposistórios do usuário: {username}</h2>
        {repos && repos.length === 0 && <p>Não há repositórios.</p>}
        {repos && repos.length > 0 && (
          <div className={classes.repos_container}>
            {repos.map((repo: RepoProps) => (
              <Repo key={repo.name} {...repo} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Repos;
