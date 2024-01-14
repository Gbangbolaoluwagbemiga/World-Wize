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
          <p>
            Features: Interactive World Map: Embark on a journey of
            self-discovery as you visualize your travels on an interactive world
            map. Pin every city you've explored and watch your personal
            travelogue unfold with each click. Detailed City Statistics: Dive
            deep into the heart of every destination. WorldWise provides
            comprehensive statistics for each city you've visited, offering
            insights into your travel habits and creating a personalized diary
            of your globetrotting escapades. Effortless Tracking: Seamlessly
            track your journey with our user-friendly interface. Mark the cities
            you've conquered, reminisce about your favorite moments, and share
            your travel stories with friends and family. Mobile Accessibility:
            Carry your travel memories in your pocket! WorldWise is optimized
            for mobile devices, allowing you to check your stats and explore new
            destinations on the go.{' '}
          </p>
        </div>
      </section>
    </main>
  );
}
