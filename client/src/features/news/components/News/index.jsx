import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Pagination, Section } from "@shared/components";
import { Post } from "@features/entities";
import { useNews } from "../../hooks";
import styles from "./style.module.scss";

export function News() {
  const { posts, isLoading, current, pageSize, total, onChange } = useNews();

  const content = isLoading ? (
    <Post.Loader n={2} />
  ) : (
    posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        description={post.description}
        slug={post.slug}
        photo={post.photo}
        createdAt={post.createdAt}
        categoryId={post.categoryId}
        userId={post.userId}
        metaCategory
      />
    ))
  );

  return (
    <>
      <Section.Title>Recent News</Section.Title>

      {content}

      {total ? (
        <Row>
          <Col lg={6}>
            <div className={styles.pagination}>
              <Pagination
                current={current}
                pageSize={pageSize}
                total={total}
                onChange={onChange}
              />
            </div>
          </Col>
        </Row>
      ) : null}
    </>
  );
}
