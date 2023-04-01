import { setThemer } from "@/utils/utils";
import { useState } from "react";
import style from "./paw.module.scss";

export default function Paw() {
  const [open, setOpen] = useState("");

  const toggle = () => setOpen(open ? "" : "open");

  return (
    <>
      <div className={`${style.screen} ${style[open]}`} />
      <div className={`${style.paw} ${style[open]}`}>
        <div className={style.pawCircle} onClick={toggle}>
          <div className={style.pawWrapper}>
            <button
              className={style.pawFinger}
              onClick={() => open && setThemer("retro")}
            />
            <button
              className={style.pawFinger}
              onClick={() => open && setThemer("halloween")}
            />
            <button
              className={style.pawFinger}
              onClick={() => open && setThemer("cyberpunk")}
            />
            <button
              className={style.pawFinger}
              onClick={() => open && setThemer("valentine")}
            />
          </div>
          <div className={style.pawWrapper}>
            <div className={style.pawMain}>X</div>
          </div>
        </div>
      </div>
    </>
  );
}
