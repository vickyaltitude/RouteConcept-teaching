import axios from "axios";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    async function getData() {
      const getData = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(getData.data);
    }
    getData();
  }, []);

  return <div>About</div>;
};

export default About;
