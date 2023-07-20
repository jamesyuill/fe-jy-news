import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SortComp = ({ sortBy, setSortBy }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <form action="sortby-form">
      <label htmlFor="sort_by"></label>
      <select
        name="sort_by"
        id="select-sortby"
        value={searchParams.get('sort_by')}
        onChange={(e) => {
          setSearchParams((curr) => {
            return { ...curr, sort_by: e.target.value };
          });
        }}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <label htmlFor="order"></label>
      <select
        name="order"
        id="select-order"
        value={searchParams.get('order')}
        onChange={(e) => {
          setSearchParams((curr) => {
            return { ...curr, order: e.target.value };
          });
        }}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
};
