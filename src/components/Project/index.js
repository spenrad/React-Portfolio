import React from "react";
import "./style.css";

function Project(props) {
    return(props.projex.map(function (proj) {

        return (
        <div className="projCard" key={proj.id}>
            <div className="projHeader">
                <a href={proj.deployedLink} target="_blank" rel="noopener noreferrer">{proj.title}</a>
              </div>
              <div className="row">
            <div><img src={proj.image} className="projImg" alt={proj.title} /></div>
          </div>
          <div id="repo"><a href={proj.ghLink} target="_blank" rel="noopener noreferrer" className="repoLink" >GitHub repository</a></div>
        </div>
    );
})
)
}

export default Project;