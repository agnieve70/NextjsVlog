/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="An image showing myself"
          width={300}
          height={353}
        />
      </div>
      <h1>Hi, I'm AG</h1>
      <p>
        I love creating front and backend applications using React.js, Next.js, Node.js and much more!
      </p>
    </section>
  );
}

export default Hero