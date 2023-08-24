import Header from "@/components/layout/header/header";
import * as styles from "./page.css";

import { colorTheme } from "./theme/theme.css";
import { ColorSwitchButton } from "@/components/shared/button/color-switch-button";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <ColorSwitchButton>Button</ColorSwitchButton>
      </main>
    </>
  );
}
