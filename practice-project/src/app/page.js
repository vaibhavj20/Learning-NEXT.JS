import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Learning NEXT.JS</h1>
      <User name="vaibhav" surname="jamdhade" />
      {/* <User name="satish" surname="shejwal" /> */}
      {/* <User />  resusable compo*/}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{`User name is ${props.name} ${props.surname} `}</h1>
      {/* <p>User name is {props.name}</p> */}
    </div>
  );
};
