import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

import { Wrapper, FilterStyled, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <FilterStyled>
        <span>Find contact by name </span>
        <FilterInput
          type="text"
          placeholder="enter name or phone number..."
          name="filter"
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </FilterStyled>
    </Wrapper>
  );
};

export default Filter;
