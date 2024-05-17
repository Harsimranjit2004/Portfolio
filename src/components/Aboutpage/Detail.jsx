import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  WebOutlined,
  CodeOutlined,
  LanguageOutlined,
  DataUsageOutlined,
} from "@mui/icons-material";

const Detail = () => {
  return (
    // <div className="bg-zinc-900 text-white p-6 border-b border-gray-700">
    //   <Typography variant="h4" align="center" gutterBottom>
    //     {/* <h2 className="p-4 pt-6 text-center text-5xl"> */}
    //     Know More <span className="text-green-500">About Me</span>
    //     {/* </h2> */}
    //   </Typography>

    //   <Grid container spacing={4} justifyContent="center" className="pt-5">
    //     <Grid item xs={10} sm={5}>
    //       <div className="mb-8 text-center">
    //         <WebOutlined style={{ fontSize: 60 }} />
    //         <Typography variant="h5" gutterBottom className="text-white mt-2">
    //           Web Development
    //         </Typography>
    //         <Typography variant="body1" className="text-gray-300">
    //           I am currently learning the fundamentals of web development,
    //           focusing on HTML, CSS, and JavaScript. I aim to create
    //           user-friendly websites and applications that improve user
    //           experiences.
    //         </Typography>
    //       </div>
    //     </Grid>

    //     <Grid item xs={10} sm={5}>
    //       <div className="mb-8 text-center">
    //         <CodeOutlined style={{ fontSize: 60 }} />
    //         <Typography variant="h5" gutterBottom className="text-white mt-2">
    //           AI & Machine Learning
    //         </Typography>
    //         <Typography variant="body1" className="text-gray-300">
    //           I am diving into the world of AI and machine learning, learning
    //           how to develop algorithms that can process and understand natural
    //           language and images.
    //         </Typography>
    //       </div>
    //     </Grid>

    //     <Grid item xs={10} sm={5}>
    //       <div className="mb-8 text-center">
    //         <LanguageOutlined style={{ fontSize: 60 }} />
    //         <Typography variant="h5" gutterBottom className="text-white mt-2">
    //           Data Science
    //         </Typography>
    //         <Typography variant="body1" className="text-gray-300">
    //           I am exploring data science, discovering how to analyze data to
    //           gain insights and make informed decisions.
    //         </Typography>
    //       </div>
    //     </Grid>

    //     <Grid item xs={10} sm={5}>
    //       <div className="mb-8 text-center">
    //         <DataUsageOutlined style={{ fontSize: 60 }} />
    //         <Typography variant="h5" gutterBottom className="text-white mt-2">
    //           Blogging
    //         </Typography>
    //         <Typography variant="body1" className="text-gray-300">
    //           I write blogs on LinkedIn about web development, AI, machine
    //           learning, and data science. I share what I'm learning and my
    //           thoughts on industry trends.
    //         </Typography>
    //       </div>
    //     </Grid>
    //   </Grid>
    // </div>
    <div className="bg-zinc-900 text-white p-6 border-b border-gray-700">
      <Typography variant="h4" align="center" gutterBottom>
        Know More <span className="text-green-500">About Me</span>
      </Typography>

      <Grid container spacing={4} justifyContent="center" className="pt-5">
        <Grid item xs={10} sm={5}>
          <div className="mb-8 text-center">
            <CodeOutlined style={{ fontSize: 60 }} />
            <Typography variant="h5" gutterBottom className="text-white mt-2">
              AI & Machine Learning
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              I am diving into the world of AI and machine learning, learning
              how to develop algorithms that can process and understand natural
              language and images.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={10} sm={5}>
          <div className="mb-8 text-center">
            <LanguageOutlined style={{ fontSize: 60 }} />
            <Typography variant="h5" gutterBottom className="text-white mt-2">
              Data Science
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              I am exploring data science, discovering how to analyze data to
              gain insights and make informed decisions.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={10} sm={5}>
          <div className="mb-8 text-center">
            <WebOutlined style={{ fontSize: 60 }} />
            <Typography variant="h5" gutterBottom className="text-white mt-2">
              Web Development
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              I am currently learning the fundamentals of web development,
              focusing on HTML, CSS, and JavaScript. I aim to create
              user-friendly websites and applications that improve user
              experiences.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={10} sm={5}>
          <div className="mb-8 text-center">
            <DataUsageOutlined style={{ fontSize: 60 }} />
            <Typography variant="h5" gutterBottom className="text-white mt-2">
              Blogging
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              I write blogs on LinkedIn about web development, AI, machine
              learning, and data science. I share what I'm learning and my
              thoughts on industry trends.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Detail;
