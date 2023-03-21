import Head from 'next/head';
import React from 'react';
import styles from '../styles/Rewievs.module.css';

export async function getServerSideProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10`);
    const data = await response.json();
    return {
        props:
        {
            reviews: data
        }
    }
}

const Reviews = ({reviews}) => {

    return (
        <>
        <Head>
            <title>Наши Бургеры</title>
            <meta name="the best burgers" content="burgers" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <h1>Отзывы клиентов</h1>
                {!!reviews && reviews.map((review, i) => (
                    <div className={styles.comment_container} key={review.id}>
                        <h4>Автор: {review.name}</h4>
                        <h4>{ review.body }</h4>
                        <h4>{ review.email }</h4>
                    </div>
                )) }
        </div>
      </>
  )
}

export default Reviews;
