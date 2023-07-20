export const SortComp = ({ searchParams, setSearchParams }) => {
  const setSortBy = (query) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort_by', query);
    setSearchParams(newParams);
  };

  const setSortOrder = (direction) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('order', direction);
    setSearchParams(newParams);
  };
  return (
    <form action="sortby-form">
      <label htmlFor="sort_by"></label>
      <select
        name="sort_by"
        id="select-sortby"
        value={searchParams.get('sort_by') || ''}
        onChange={(e) => {
          setSortBy(e.target.value);
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
        value={searchParams.get('order') || ''}
        onChange={(e) => {
          setSortOrder(e.target.value);
        }}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
};
