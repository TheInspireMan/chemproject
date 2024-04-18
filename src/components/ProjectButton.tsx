"use client"
import React, { useState } from 'react';

interface ProjectButtonProps {
    projectName: string;
    fullName: string;
    nisClass: string;
    group: string;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ projectName , fullName, nisClass, group }) => {
  return (
    <button className="flex flex-col items-center justify-center w-96 h-28 bg-zinc-300 text-center rounded-md transition duration-300 transform hover:scale-110">
      
      <div className="font-semibold text-4xl">
        {projectName}
      </div>

      <div className="font-medium text-base">
        {fullName} {nisClass} {group}
      </div>
      
    </button>
  );
};

export default ProjectButton;
