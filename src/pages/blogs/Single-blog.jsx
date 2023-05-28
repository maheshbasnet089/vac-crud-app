import { Person } from "@mui/icons-material";
import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const Singleblog = () => {
  const { id } = useParams();
  const [blog, setBlog] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const getSingleBlog = async () => {
    var response = await axios.get(``);
    if (response.data !== null) {
      setBlog(response.data);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getSingleBlog();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      {/* image starts */}
      <img
        src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
        style={{ width: "100%", objectFit: "cover", height: "450px" }}
      />
      {/* image end */}

      <Box>
        {/* author start */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Person />
          <h4>Manish Regmi</h4>
        </Box>
        {/* author end */}
        <hr />

        {/* description starts  */}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          asperiores explicabo iusto dolorem expedita iure ad doloremque cum
          labore. Non, repellat nemo porro omnis amet quo alias odit, molestias
          aliquam dicta excepturi perspiciatis sequi, ut nihil maxime. Commodi
          similique dolore rem porro. Laboriosam maxime eius similique eveniet
          ducimus. Ex, deleniti.
        </p>
        {/* description end  */}
      </Box>
    </Box>
  );
};

export default Singleblog;
