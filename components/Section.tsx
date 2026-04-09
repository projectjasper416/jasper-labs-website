import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default Section;
