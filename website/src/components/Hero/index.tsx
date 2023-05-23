import { toast } from 'sonner';

import styles from './hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.toastWrapper}>
        <div className={styles.toast} />
        <div className={styles.toast} />
        <div className={styles.toast} />
      </div>
      <h1 className={styles.heading}>Sonner</h1>
      <p style={{ marginTop: 0, fontSize: 18 }}>An opinionated toast component for React.</p>
      <div className={styles.buttons}>
        <button
          data-primary=""
          onClick={() => {
            const toastId = toast('Sonner', {
              description: 'An opinionated toast component for React.',
            });

            setTimeout(() => {
              toast.success('This is a test', {
                id: toastId,
                description: undefined,
              });
            }, 2000);
          }}
          className={styles.button}
        >
          Render a toast
        </button>
        <a className={styles.button} href="https://github.com/emilkowalski/sonner" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};
