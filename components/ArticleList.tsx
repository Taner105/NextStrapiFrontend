import { IArticle } from "../types";
import { Grid, Typography, Box } from "@mui/material";
import BlogCard from "./BlogCard";

interface IPropType {
  categories: IArticle[];
}

const ArticleList = ({ articles }: IPropType) => {
  console.log(articles);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid sx={{ width: "90%" }} container>
        {articles.map((article) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <BlogCard key={article.id} article={article} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ArticleList;
