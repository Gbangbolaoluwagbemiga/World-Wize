import PageNav from '../components/PageNav';
import styles from './Product.module.css';

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          className={styles.img}
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWise.</h2>
          <p>
            Welcome to WorldWise – the ultimate companion for avid travelers
            like yourself! Unleash the full potential of your wanderlust and
            transform your adventures into unforgettable memories with our
            feature-packed travel companion.
          </p>
        </div>
      </section>
    </main>
  );
}
