import * as React from "react";
import styles from "./index.css";
import { connect } from "dva";

interface PageProps {
  dispatch: any;
  location: any;
  message: any;
}

@connect(state => state.global)
class App extends React.Component<PageProps> {
  public render() {
    const { message } = this.props;

    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <h1 className={styles.title}>{message}</h1>

        <ul className={styles.list}>
          <li>
            To get started, edit <code>src/pages/index.js</code> and save to
            reload.
          </li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">
              Getting Started
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
