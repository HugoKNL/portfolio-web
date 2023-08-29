import { page } from "./page.css";
import { ColorThemeSwitch } from "@/components/index/color-theme-switch";

export default function Home() {
  return (
    <>
      <main className={page}>
        <ColorThemeSwitch />
        {/* <ColorSwitchButton>Button</ColorSwitchButton> */}
      </main>
    </>
  );
}
