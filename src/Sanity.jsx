import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zcbcbl6s',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-11-17',
});


export async function getPets() {
  const pets = await client.fetch('*[_type == "pet"]');
  return pets;
};