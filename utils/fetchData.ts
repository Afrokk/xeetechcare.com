/**
 * Fetches data from the API.
 * @param endpoint The endpoint to fetch data from.
 * @returns A Promise that resolves to the fetched data.
 */
export default async function fetchData(endpoint: string) {
  let data: Ref;

  try {
    const result = await useAsyncData('endpoint', () => queryContent(`/${endpoint}`).findOne());
    data = ref(result.data.value);
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    data = ref('Failed to fetch data.');
    return data;
  }
}
