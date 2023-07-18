function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('en-GB', {
    timeZone: 'UTC',
  });
  // const timeFinal = timestamp.match(/(\d\w:\d*)/g);
  return {
    // time: timeFinal[0],
    date: formattedDate,
  };
}

export default formatDateTime;
