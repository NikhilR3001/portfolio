import React from 'react';

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <h3 className="project__title">{item.title}</h3>
            <p className="project__description">{item.description}</p>
            <p className="project__technologies"><strong>Technologies Used:</strong> {item.technologies.join(", ")}</p>
        </div>
    );
}

export default ProjectItems;