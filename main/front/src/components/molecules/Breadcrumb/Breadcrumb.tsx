import './Breadcrumb.scss';

interface BreadcrumbProps {
  categories: string[];
}

const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <nav className='breadcrumb-nav'>
      <ol className='breadcrumb'>
        {categories.map((category, index) => (
          <li key={index} className='breadcrumb__item'>
            {category}
            {index < categories.length - 1 && <span className='breadcrumb__separator'>{'>'}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
