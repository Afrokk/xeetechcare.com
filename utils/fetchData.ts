/**
 * Fetches data from the specified endpoint.
 *
 * @template T - The type of the data to be fetched.
 * @param {string} endpoint - The endpoint to fetch the data from.
 * @returns {Promise<T>} - A promise that resolves to the fetched data.
 */
export default async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const result = await useAsyncData(endpoint, () => queryContent(`/${endpoint}`).findOne());
    return result.data.value as T;
  } catch (error) {
    console.error('Failed to fetch data: ', error);
    return null as any as T;
  }
}
