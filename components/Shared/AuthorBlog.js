import React from 'react';
import styles from './AuthorBlog.module.scss';
function AuthorBlog({ title, author }) {
  return (
    <div className={styles.container}>
      <p className={styles.blog}>blog</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.line}></p>
      <p className={styles.author}>{author}</p>
    </div>
  );
}

export default AuthorBlog;
