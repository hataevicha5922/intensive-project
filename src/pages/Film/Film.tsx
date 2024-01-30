import s from "./Film.module.css";

export const Film = () => {
  return (
    <div className={s["film-wrapper"]}>
      <div className={s["film-image"]}>Image</div>
      <div className={s["film-description"]}>Description</div>
    </div>
  );
};
