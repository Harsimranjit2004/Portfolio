import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import computerscience from "../../assets/computer-science.png";
import demo from "../../assets/demo.png";
import {
  useDeleteSkillsMutation,
  useGetSkillsQuery,
} from "../../features/skillsApiSlice";
import { useNavigate } from "react-router-dom";
const Skill = ({ id }) => {
  const navigate = useNavigate();
  const [deleteSkill] = useDeleteSkillsMutation();
  const { skill } = useGetSkillsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      skill: data?.entities[id],
    }),
  });
  const handleDeleteButton = async () => {
    await deleteSkill({ id });
  };
  const handleUpdateButton = async () => {
    navigate(`/update-skill/${id}`);
  };
  return (
    <div className="text-white ">
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={parseInt(skill?.value, 10)}
          size={200} // Increased size
          sx={{ color: "#21c55d" }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img
            src={skill?.icon}
            alt="Custom Icon"
            style={{ width: 60, height: 60 }}
          />{" "}
          {/* Increased size */}
          <Typography
            variant="caption"
            component="div"
            color="white"
            style={{ fontSize: 24, marginTop: 12, textAlign: "center" }} // Increased font size
          >
            {skill?.text}
          </Typography>
        </Box>
      </Box>
      <div className="flex gap-5 mt-2">
        <button
          className="bg-green-500 p-2 rounded-full"
          onClick={handleDeleteButton}
        >
          Delete
        </button>
        <button
          className="bg-green-500 p-2 rounded-full"
          onClick={handleUpdateButton}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Skill;
