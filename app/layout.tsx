import { Metadata } from "next";
import { Roboto_Flex, Montserrat, Hepta_Slab } from "next/font/google";
import { ColorPreferenceProvider } from "@/components/context/color-preference";
import { ThemedBody } from "@/components/layout/body/body";
import "./theme/globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto-flex",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});
const heptaSlab = Hepta_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--hepta-slab",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${montserrat.variable} ${heptaSlab.variable} ${robotoFlex.variable}`}
      lang="en"
    >
      <ColorPreferenceProvider>
        <ThemedBody>{children}</ThemedBody>
      </ColorPreferenceProvider>
    </html>
  );
}

export const metadata: Metadata = {
  colorScheme: "dark light",
};
