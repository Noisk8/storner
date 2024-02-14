import styles from './Description.module.sass';

export const Description = () => {
  return (
    <section className={styles.Description}>
     <img src="https://raw.githubusercontent.com/platzi/nextjs-14/class/statics/public/images/description.jpeg" alt="q verguero"></img>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}

