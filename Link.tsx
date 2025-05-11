import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Skip smooth scrolling for external links
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.open(href, '_blank');
      return;
    }
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL hash without scroll jump
      window.history.pushState(null, '', href);
    }
    
    // Handle any additional onClick prop
    if (props.onClick) {
      props.onClick(e);
    }
  };
  
  return (
    <a
      href={href}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};