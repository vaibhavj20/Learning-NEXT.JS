import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Learning NEXT.JS</h1>
      <User />
      {/* <User />  resusable compo*/}
    </div>
  );
}

const User = () => {
  return (
    <div>
      <h1>User name is Vaibhav</h1>
    </div>
  );
};
