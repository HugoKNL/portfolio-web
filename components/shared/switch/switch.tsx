"use client";
import * as RadixSwitch from "@radix-ui/react-switch";
import { useFocusVisible } from "react-aria";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { RefAttributes } from "react";
import * as styles from "./switch.css";

type SwitchVariant = {
  variant?: keyof (typeof styles)["rootVariant"];
};

export const Switch = ({
  variant = "primary",
  ...rest
}: RadixSwitch.SwitchProps &
  RefAttributes<HTMLButtonElement> &
  SwitchVariant) => {
  const { isFocusVisible } = useFocusVisible({});

  return (
    <RadixSwitch.Root
      {...rest}
      data-focus-visible={isFocusVisible}
      className={styles.rootVariant[variant]}
    >
      <RadixSwitch.Thumb className={styles.thumbVariant[variant]}>
        {variant === "themeSwitch" && (
          <div className={styles.themeIconContainer}>
            <BiSolidMoon
              className={`${styles.themeIcon} ${styles.uncheckedIcon}`}
            />
            <BiSolidSun
              className={`${styles.themeIcon} ${styles.checkedIcon}`}
            />
          </div>
        )}
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  );
};
