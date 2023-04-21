import { Button } from "@/components/ui/button";

const Home = () => (
  <main className="flex min-h-screen flex-col  items-center justify-center p-24">
    <div className="container flex justify-center gap-2">
      <Button>Hello World</Button>
      <Button variant="outline">Hello World</Button>
    </div>
  </main>
);

// eslint-disable-next-line import/no-default-export
export default Home;
