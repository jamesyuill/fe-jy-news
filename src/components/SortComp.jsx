import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SortComp = ({ sortBy, setSortBy }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  return (
    <form action="sortby-form">
      <label htmlFor="select-sortby"></label>
      <select
        name="select-sortby"
        id="select-sortby"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value="date-asc">Date (ascending)</option>
        <option value="date-desc">Date (descending)</option>
        <option value="comment-count-asc">Comment Count (ascending)</option>
        <option value="comment-count-desc">Comment Count (descending)</option>
        <option value="votes-asc">Votes (ascending)</option>
        <option value="votes-desc">Votes (descending)</option>
      </select>
    </form>
  );
};
