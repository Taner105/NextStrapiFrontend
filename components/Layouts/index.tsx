import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
interface Props {
  children: React.ReactNode;
}

const index = ({ children }: Props) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ width: "90%" }}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </Box>
    </Box>
  );
};
export default index;
