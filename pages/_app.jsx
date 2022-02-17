import { Provider } from "react-redux";
import { store } from "../store";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Header links={[]} />
      <Component {...pageProps} />
      <Footer text="Employee Of the Month" />
    </Provider>
  );
};

export default MyApp;
