import Footer from "./Footer";
import Navbar from "./Navbar";
interface Props {
  children: React.ReactNode;
}

const index = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default index;
