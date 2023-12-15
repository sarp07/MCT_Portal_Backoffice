import React from "react";
import styles from "./styles/Container.module.css";

/**
 * A container component that sets the max-width of its children, and centers them on the page.
 * @param maxWidth: The max-width of the container. Can be "sm", "md", "lg", "xl", or "2xl".
 */

const Container = ({ maxWidth, children }) => {
  return (
    <div className={`${styles.container} ${styles[maxWidth]}`}>
      <br />
      {children}
    </div>
  );
};

export default Container;
