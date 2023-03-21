import styles from '../styles/About.module.css';

const About = () => {
    return (
    <div className={styles.about_flex_container}>
        <h1>О нас</h1>
     <div className={styles.title_container}>
        <p>Жирные бургеры - это старые добрые бургеры по классической рецептуре, нужных размеров и за приемлемую цену.</p>
        <p>Готовят их на американский, мексиканский и итальянский манер, не жалея ни соуса, ни начинки.</p>
        <p>Для тех, кто изрядно проголодался, есть необъятный «Самый жирный бургер» с пятью говяжьими котлетами, кукурузными чипсами и сыром.</p>
     </div>
    </div>
  )
}


export default About;