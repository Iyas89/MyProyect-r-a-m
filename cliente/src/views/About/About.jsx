import style from "./About.module.css"
const About = () => {
    return (
        <div className={style.aboutContainer}>
            <h2 className={style.h1}>Name: Iyas Asaad</h2>
            <h3 className={style.h3}>Species: I think human</h3>
            <h3 className={style.h3}>Gender: Male</h3>
            <h3 className={style.h3}>Origin: Syria </h3>
            <h3 className={style.h3}>Status: Alive ?? </h3>
            <h3 className={style.h3}>Location: la terra de Messi</h3> 
        </div>
    )
}

export default About;