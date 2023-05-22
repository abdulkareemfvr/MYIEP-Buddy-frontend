import { Provider } from "react-redux";
import "./globals.css";
import store from "@/redux/store";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Provider store={store}>{children} </Provider>
        </main>
      </body>
    </html>
  );
}
