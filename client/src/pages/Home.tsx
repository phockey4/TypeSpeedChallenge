import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestContainer from "@/components/TestContainer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto max-w-4xl p-4 mt-4 flex-grow">
        <TestContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
