import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Headling } from "../../components/Headling";
import { getHistory } from "../../utils";
import { useAppSelector } from "../../hooks";
import { getUserSelector } from "../../store";

import s from "./History.module.css";

export default function HistoryPage() {
  const navigate = useNavigate();
  const user = useAppSelector(getUserSelector)!;
  const [history, setHistory] = useState<{ searchText: string }[]>([]);

  useEffect(() => {
    if (user?.email) {
      getHistory(user.email).then((data) => setHistory(data || []));
    }
  }, [user?.email]);

  const onClickHandler = (searchText: string) =>
    navigate(`/search?searchText=${searchText}`);

  return (
    <div className={s["wrapper"]}>
      <Headling>History</Headling>
      <div className={s["history-wrapper"]}>
        {Boolean(history?.length < 1) && <h2>History is empty</h2>}
        {user?.email &&
          history.map((item) => (
            <div
              onClick={() => onClickHandler(item.searchText)}
              className={s["history-item"]}
              key={item.searchText}
            >
              {item.searchText}
            </div>
          ))}
      </div>
    </div>
  );
}
