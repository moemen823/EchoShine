function openClientDetails(name, date, time, status, address, notes) {
  const params = new URLSearchParams({
    name,
    date,
    time,
    status,
    address,
    notes
  });
  window.location.href = `client-details.html?${params.toString()}`;
}
