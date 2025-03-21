export const getSidebar = async () => {
  const response = await fetch('/api/sidebar');
  const data = await response.json();
  return data;
};
