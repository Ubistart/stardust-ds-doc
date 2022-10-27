import React from "react";
import styles from "./styles.module.css";

interface ColorSquare {
  color: string;
  label: string;
  hex: string;
}

interface Props {
  colors: ColorSquare[];
}

export const ColorSquare = ({ colors }: Props) => {
  if (!colors.length) throw new Error("Provide all props");

  return (
    <div className={styles.grid}>
      {colors.map((item) => (
        <div className={styles.container}>
          <div
            className={styles.square}
            style={{ backgroundColor: item.color }}
          />
          <div className={styles.wrapper}>
            <div className={styles.label}>{item.label}</div>
            <div className={styles.hex}>{item.hex}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
