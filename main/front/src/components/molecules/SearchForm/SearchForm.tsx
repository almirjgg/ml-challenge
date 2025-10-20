import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import searchIcon from '../../../assets/ic_search.png';
import './SearchForm.scss';

const SearchForm = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';
  const [query, setQuery] = useState(initialQuery);

  const navigate = useNavigate();

  useEffect(() => {
    const currentSearch = searchParams.get('search') || '';
    setQuery(currentSearch);
  }, [searchParams]);
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/items?search=${query.trim()}`);
    }
  };

  return (
    <form className='search-form' onSubmit={handleSearch}>
      <Input
        placeholder='Nunca dejes de buscar'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button type='submit' className='btn--search'>
        <img src={searchIcon} alt='Buscar' />
      </Button>
    </form>
  );
};

export default SearchForm;
