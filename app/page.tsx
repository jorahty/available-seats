import * as cheerio from 'cheerio';
import { Card, CardContent } from '@/components/ui/card';

export default async function Home() {
  const classes = await Promise.all(
    [
      'YToyOntzOjU6IjpTVFJNIjtzOjQ6IjIyNDIiO3M6MTA6IjpDTEFTU19OQlIiO3M6NToiNTE2NjciO30%3D',
      'YToyOntzOjU6IjpTVFJNIjtzOjQ6IjIyNDIiO3M6MTA6IjpDTEFTU19OQlIiO3M6NToiNTE2NTciO30%3D',
    ].map(async (classData) => {
      const url = `https://pisa.ucsc.edu/class_search/index.php?action=detail&class_data=${classData}`;
      const response = await fetch(url, { cache: 'no-store' });
      const html = await response.text();
      const $ = cheerio.load(html);

      const title = $('h2').first().text();
      const classCode = title.match(/(.*)\s-/)![1].trim();
      const availableSeats = $('dt:contains("Available Seats")')
        .next('dd')
        .text();

      return { classCode, availableSeats };
    }),
  );

  return (
    <main className="mx-auto my-16 flex max-w-sm flex-col gap-8 p-8">
      {classes.map(({ classCode, availableSeats }) => (
        <Card className="bg-secondary">
          <CardContent className="flex items-center justify-between p-8 ">
            <h3 className="text-xl font-medium text-muted-foreground">
              {classCode}
            </h3>
            <h1 className="text-4xl font-semibold dark:text-green-500">
              {availableSeats}
            </h1>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
