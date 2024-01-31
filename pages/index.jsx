import Layout from "@/src/layouts/Layout";
import Landing from "@/src/layouts/home/Landing";
import Features from '@/src/layouts/home/Features';
import Category from '@/src/layouts/home/Category';
import About from '@/src/layouts/home/About';
import Service from '@/src/layouts/home/Service';
import Project from '@/src/layouts/home/Project';
import Team from '@/src/layouts/home/Team';
import ModernGardening from '@/src/layouts/home/ModernGardening';
import Testimonial from '@/src/layouts/home/Testimonial';
import Blog from '@/src/layouts/home/Blog';

const Index = () => {
  return (
    <Layout header={1} footer={3}>
      <Landing />
      <Features />
      <Category />
      <About />
      <Service />
      {/* <Project /> */}
      <Team />
      <ModernGardening />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
    </Layout>
  );
};
export default Index;
