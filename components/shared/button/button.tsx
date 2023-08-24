"use client";

import * as styles from "./button.css";

export const Button = (props: React.ComponentProps<"button">) => {
  return <button {...props} className={styles.button} />;
};
