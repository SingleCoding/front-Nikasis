import { useState } from "react";
import styles from "./Color.module.css";

interface Props {
  selectedItem?: number;
  colors: string[];
}

export default function ({ colors, selectedItem = 0 }: Props) {
  const [selected, setSelected] = useState(selectedItem);
  return (
    <div className={styles.colorPalette}>
      <span className={styles.colorPaletteText}>Colors</span>
      <div className={styles.colorPaletteBox}>
        {colors.map((color, index) => (
          <button
            className={[
              styles.color,
              selected === index ? styles.active : "",
            ].join(" ")}
            key={color}
            onClick={() => setSelected(index)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
