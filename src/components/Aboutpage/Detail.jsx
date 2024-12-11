import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  WebOutlined,
  CodeOutlined,
  LanguageOutlined,
  DataUsageOutlined,
  AutoAwesomeOutlined,
} from "@mui/icons-material";

const Detail = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6  md:flex flex-col justify-around">
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Know More <span className="text-green-500">About Me</span>
        </Typography>
      </div>
      <div >
        <Grid container spacing={4} justifyContent="center" className="pt-0">
          <Grid item xs={10} sm={5}>
            <div className="mb-8 text-center">
              <CodeOutlined style={{ fontSize: 60 }} />
              <Typography variant="h5" gutterBottom className="text-white mt-2">
                AI & Machine Learning
              </Typography>
              <Typography variant="body1" className="text-gray-300">
                I am diving into the world of AI and machine learning, learning
                how to develop algorithms that can process and understand
                natural language and images.
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
                I am working with the MERN stack (MongoDB, Express.js, React,
                Node.js) to build full-stack applications. I focus on creating
                responsive and user-friendly websites that enhance user
                experiences through modern web technologies.
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

          <Grid item xs={10} sm={5}>
            <div className="mb-8 text-center">
              <AutoAwesomeOutlined style={{ fontSize: 60 }} />
              <Typography variant="h5" gutterBottom className="text-white mt-2">
                Generative AI
              </Typography>
              <Typography variant="body1" className="text-gray-300">
                I am exploring generative AI technologies, creating innovative
                solutions with models like GPT, Stable Diffusion, and more for
                content generation, art, and creativity.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Detail;
