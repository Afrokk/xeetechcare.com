/**
 * Fetches data from the API.
 * @param endpoint The endpoint to fetch data from.
 * @returns A Promise that resolves to the fetched data.
 */
export default async function fetchData(endpoint: string): Promise<Ref<any>> {
  try {
    const result = await useAsyncData(endpoint, () => queryContent(`/${endpoint}`).findOne());
    return ref(result.data.value);
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return ref('Failed to fetch data.');
  }
}
