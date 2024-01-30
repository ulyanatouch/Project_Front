import React, { useState } from 'react';
import './BreadCrumbs.scss';

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState(["Main Page", "Categories", "All product", "All sales"]);

  const addBreadcrumb = () => {
    setBreadcrumbs([...breadcrumbs, `test ${breadcrumbs.length + 1}`]);
  };

  const removeBreadcrumb = () => {
    if (breadcrumbs.length > 1) {
      setBreadcrumbs(breadcrumbs.slice(0, breadcrumbs.length - 1));
    }
  };

  return (
    <div className="breadcrumbs-container">
      {breadcrumbs.map((breadcrumb, index) => (
        <div className="breadcrumbs-block" key={index}>
          <div className={`breadcrumb ${index === breadcrumbs.length - 1 ? 'active' : ''}`}>
            {breadcrumb}
          </div>
          <div className={`${index !== breadcrumbs.length - 1 ? 'breadcrumb-line' : ''}`}></div>
        </div>
      ))}
      <button onClick={addBreadcrumb}>Add Breadcrumb</button>
      <button onClick={removeBreadcrumb} disabled={breadcrumbs.length === 1}>Remove Breadcrumb</button>
    </div>
  );
};

export { Breadcrumbs };
