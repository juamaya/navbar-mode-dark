import style from './footer.module.css'


const Footer = () => {
    return (
      <footer className={style.footer}>
        <div className= {style.container}>
          <p className={style.text}>
          JUAMAYA {new Date().getFullYear()} © Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;