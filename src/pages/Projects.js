import React, { useState, useEffect } from "react";
import Project from "../components/Project"
import projectDox from "../projectDox.json";

function Projects (props) {
    const [projList, setProjList] = useState({
        projectDox});

    useEffect(function () {
       setProjList({projectDox,})
    }, []);

    return ( 
        <div>
            <Project projex={projList.projectDox} />
        </div>
    );
    }

export default Projects;