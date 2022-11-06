import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ICategory } from "../types";
import Link from "next/link";
import { useRouter } from "next/router";

interface IPropType {
  categories: ICategory[];
}

const Tabs = ({ categories }: IPropType) => {
  const router = useRouter();
  const isActiveLink = (category: ICategory) => {
    return category.attributes.Slug === router.query.category;
  };
  return (
    <Box
      sx={{
        my: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            mr: 3,
            pb: 2,
            borderBottom: 2,
            color: router.pathname === "/" ? "red" : "black",
          }}
        >
          <Link href="#">Recent</Link>
        </Box>

        {categories.map((category) => {
          return (
            <>
              <Box
                key={category.id}
                sx={{
                  mr: 3,
                  pb: 2,
                  borderBottom: 2,
                  color: isActiveLink(category) ? "red" : "black",
                }}
              >
                <Link href={`/category/${category.attributes.Slug}`}>
                  {category.attributes.Title}
                </Link>
              </Box>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default Tabs;
