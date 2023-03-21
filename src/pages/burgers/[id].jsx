import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Burgers.module.css";

export async function getServerSideProps({ params }) {
  const response = await fetch(`http://localhost:5000/items/${params.id}`)
  const burger = await response.json()

  return {
    props: {
      burger: burger
    }
  }
}

const Burger = ({ burger }) => {
  const { query } = useRouter();

    return (
      <div className={styles.burger_flex}>
        <div className={styles.burger_container} key={burger.id}>
          <h1 className={styles.burger_container}>{burger.name}</h1>
          <figure>
                <Image
                  width={550}
                  height={500}
                  className={styles.burger_image}
                  src={burger.image}
              alt={burger.name} />
            <figcaption>
              <div className={styles.burger_desc}>
                <h4>{burger.desc}</h4>
              </div>
            </figcaption>
            </figure>
              </div>
      </div>
  )
}

export default Burger;