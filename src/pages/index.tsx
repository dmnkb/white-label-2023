import { NextPage } from "next";

import { Layout } from "@/components";

type NextPageProps = {
  pageData: any;
};

// eslint-disable-next-line import/no-default-export, prefer-arrow/prefer-arrow-functions
const Home: NextPage<NextPageProps> = ({}) => (
  <Layout
    description={"Description goes here"}
    keywords={"Keywords go here"}
    menuItems={[{ slug: "/", title: "Startseite" }]}
    title={"Home Page"}
  >
    <div className="container py-24">
      <h1 className="mb-8 text-5xl">Headline</h1>
      <div className="grid grid-cols-3 gap-3">
        <p className="col-span-3 mb-3 md:col-span-1 md:mb-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          quis labore suscipit magni dolores laudantium voluptates magnam
          maiores excepturi incidunt?
        </p>
        <p className="col-span-3 mb-3 md:col-span-1 md:mb-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          quis labore suscipit magni dolores laudantium voluptates magnam
          maiores excepturi incidunt?
        </p>
        <p className="col-span-3 mb-3 md:col-span-1 md:mb-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          quis labore suscipit magni dolores laudantium voluptates magnam
          maiores excepturi incidunt?
        </p>
      </div>
    </div>
  </Layout>
);

// eslint-disable-next-line import/no-default-export
export default Home;
