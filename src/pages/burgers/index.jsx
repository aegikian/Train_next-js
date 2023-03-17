import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/Burgers.module.css'

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:5000/items`)
  const burgers = await res.json()

  return {
    props: {burgers}, 
  }
}

const Burgers = ({burgers}) => {
    return (
        <div>
        <h1>Наши бургеры</h1>
        <div className={styles.burgers_container}>
          {!!burgers && burgers.map(burger => (
            <Link key={burger.id} href={`/burgers/${burger.id}`} className={styles.link_burger} >
          <div className={styles.burger_container} key={burger.id}>
            <h4>{burger.name}</h4>
                <Image
                  width={350}
                  height={300}
                  className={styles.burger_image}
                  src={burger.image}
                  alt={burger.name} />
                <h4>{ burger.desc }</h4>
              </div>
          </Link>
        ))}
        </div>
        </div>

  )
}

export default Burgers;

