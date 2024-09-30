import React, { use } from "react";
import style from "./Grid.module.css";
import { Card, Controls } from "../../components/index";

const Grid = ({ dataPromise }) => {
  const data = use(dataPromise);
  if (!data.data) {
    return <div>Not Found 404...</div>;
  }
  return (
    <>
      <section className={style.grid}>
        {data?.data.map((i) => {
          return (
            <Card
              url={i.url}
              title={i.title}
              author={
                i.authors
                  ? i.authors.map((a) => a.name)
                  : `Episodes: ${i.episodes}`
              }
              imgUrl={i.images.webp.image_url}
              status={i.status}
              rating={i.score}
              type={i.type}
              key={i.mal_id}
            />
          );
        })}
      </section>
      <Controls pagination={data.pagination} />
    </>
  );
};

export default Grid;
