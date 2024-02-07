import s from "./Poster.module.css";

export const Poster = ({ posterUrl }: { posterUrl: string }) => (
  <div className={s["poster-wrapper"]}>
    <img src={posterUrl} alt="Poster" className={s["poster"]} />
  </div>
);
