import PageNav from '../components/PageNav';
import styles from './Product.module.css';

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Gain access to a world of premium features for just $9 a month. Your
            subscription opens up a treasure trove of tools designed to enhance
            your travel tracking experience.
          </p>
        </div>
        <img
          src="img-2.jpg"
          className={styles.img}
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}
