import React from 'react';
import './BreadCrumbs.scss';

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState(["test 1", "test 2", "test 3"]);
  let breadcrumb = "test";
  let isActive = false;

  function addBreadcrumb() {
      setBreadcrumbs(breadcrumbs);
  }

  function removeBreadcrumb() {
      let breadcrumbIndex = breadcrumbs.findIndex(breadcrumb);
      breadcrumbs.slice(breadcrumbIndex)
      setBreadcrumbs(breadcrumbs);
  }

  return (
    <div className="breadcrumbs-container">
        {breadcrumbs.map((breadcrumb, index) => {
            return (
                <div className="breadcrumbs-block">
                <div className={`breadcrumb ${isActive ? 'active' : ''}`} >
                    {breadcrumb}
                </div>
                    <div  className={ `${breadcrumbs.length && index !== breadcrumbs.length - 1  ? 'breadcrumb-line' : ''}`}>
                    </div>
                </div>
            );
        })}
    </div>
);
}

export { Breadcrumbs };

