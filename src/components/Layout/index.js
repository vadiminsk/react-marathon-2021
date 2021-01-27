import s from './style.module.css';
import LayoutImage from '../../assets/images/layout_bg.jpg';

const Layout = ({ id, title, descr, urlBg = false, colorBg }) => {
  const layoutBg = urlBg ? { backgroundImage: `url(${LayoutImage})` } : {};
  const layoutBgColor = colorBg ? { background: 'lightblue' } : {};
  return (
    <section
      className={s.root}
      id={id}
      style={{ ...layoutBg, ...layoutBgColor }}
    >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
