import { useContext } from 'react';
import { ChallengesContext } from 'contexts';
import styles from 'styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/iuriaguiarr.png" alt="Iuri Aguiar" />
      <div>
        <strong>Iuri Aguiar</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
