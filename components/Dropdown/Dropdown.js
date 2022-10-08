import { useEffect, useState } from "react";
import style from "./Dropdown.module.scss";

const Dropdown = ({ title = "Dropdown", list = [], onChange, loading }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  const toggle = () => setOpen(!open);
  const lost = () => setOpen(false);
  const active = () => setOpen(true);

  const clear = (e) => {
    e.preventDefault();
    lost();
    setSelected(false);
  };

  const widthSetup = `w-full max-w-md`;

  useEffect(() => {
    if (typeof onChange === "function") onChange(selected);
  }, [selected, onChange]);

  useEffect(() => {
    if (!list || list.length < 1) setSelected(false);
  }, [list]);

  const noHaveList = !list || typeof list !== "object" || list.length < 1;

  const classOpen = open ? style.open : "";

  return (
    <div className="relative mb-6">
      <div className="text-md font-semibold">{title}</div>

      <div>
        <div className={`btn-group ${widthSetup}`} onBlur={lost}>
          <button
            className="btn text-left flex-1 justify-start"
            onClick={toggle}
            disabled={noHaveList}
          >
            {(selected && selected.label) || title}
          </button>
          {selected && (
            <button
              className={`btn btn-square ${
                selected ? "btn-error" : "btn-disabled btn-primary"
              }`}
              onClick={clear}
            >
              X
            </button>
          )}
          {loading && <div className="btn loading btn-disabled" />}
        </div>
        <div className={`${style.itemWrapper} ${widthSetup} ${classOpen}`}>
          <div className={style.itemWrapperInside}>
            {list &&
              list.map((item) => {
                const click = () => {
                  setSelected(item);
                  lost();
                };
                return (
                  <button
                    key={item.value}
                    onClick={click}
                    className={style.item}
                  >
                    {item.label}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
