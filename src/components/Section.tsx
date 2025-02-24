import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <div className='container mx-auto'>{children}</div>
  )
};

export default Section;