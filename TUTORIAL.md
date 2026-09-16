# Travel Wishlist: Step-by-Step Tutorial

This guide starts with the Girls Dream Code onboarding template and finishes the Travel Wishlist application. Complete the steps in order so each new concept builds on the previous one.

## 1. Create a feature branch

Do not work directly on `main`.

```bash
git switch -c feature/travel-wishlist
```

Check the current branch:

```bash
git branch --show-current
```

## 2. Install and run the starter

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution is blocked:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the localhost URL printed by Vite. Stop the server with `Ctrl+C` when needed.

## 3. Create the Xano database table

In your Xano workspace:

1. Open the database area.
2. Create a table named `destination`.
3. Keep Xano's automatically generated integer `id` field.
4. Add a required text field named `city`.
5. Add a required text field named `country`.
6. Save the table.

Field names are case-sensitive in frontend code. Use exactly `id`, `city`, and `country`.

## 4. Add sample records

Add two or three records manually so the GET endpoint has data to return. Use fake travel data, for example:

| city | country |
| --- | --- |
| Chicago | United States |
| Nairobi | Kenya |
| Tokyo | Japan |

Do not use confidential participant information.

## 5. Create `GET /destination` in Xano

1. Open the API group you will use for this tutorial.
2. Add a GET endpoint named `/destination`.
3. Add a database request that queries all records from the `destination` table.
4. Return the resulting list as the endpoint response.
5. Run the endpoint in Xano and confirm that the response is a JSON array.

The frontend expects this shape:

```json
[
  {
    "id": 1,
    "city": "Chicago",
    "country": "United States"
  }
]
```

Xano's [Query All Records documentation](https://docs.xano.com/the-function-stack/functions/database-requests/query-all-records) explains the database operation used here.

## 6. Create `POST /destination` in Xano

1. Add a POST endpoint named `/destination` in the same API group.
2. Add required text inputs named `city` and `country`.
3. Add an **Add Record** database step for the `destination` table.
4. Map the endpoint's `city` input to the record's `city` field.
5. Map the endpoint's `country` input to the record's `country` field.
6. Return the newly created record.
7. Test the endpoint in Xano with sample city and country values.

The request body should look like:

```json
{
  "city": "Accra",
  "country": "Ghana"
}
```

See Xano's [Add Record documentation](https://docs.xano.com/the-function-stack/functions/database-requests/add-record) for the database step.

## 7. Configure the local environment

Copy the example file:

```powershell
Copy-Item .env.example .env
```

Open `.env` and paste the base URL for the Xano API group after the equals sign:

```text
VITE_XANO_BASE_URL=<your-xano-api-group-base-url>
```

Use the API group base URL only. The application adds `/destination` itself.

Do not put a password, private API key, or authentication token in a `VITE_` variable. Vite variables are included in browser code. `.env` is ignored by Git and must never be committed.

Restart `npm run dev` after changing `.env`; Vite reads environment values when the server starts.

## 8. Describe destination data with TypeScript

In `src/types/destination.ts`, define the record returned by Xano:

```ts
export type Destination = {
  id: number;
  city: string;
  country: string;
};

export type NewDestination = Omit<Destination, "id">;
```

Xano creates the `id`, so the POST request only sends `city` and `country`.

## 9. Build the shared API layer

In `src/lib/api.ts`:

1. Read `import.meta.env.VITE_XANO_BASE_URL` once.
2. Build the shared `/destination` URL.
3. Create `getDestinations()` with a GET request.
4. Create `addDestination()` with a POST request and JSON body.
5. Check `response.ok` before reading successful data.
6. Throw an `Error` when Xano returns an unsuccessful response.

Keep API requests out of React components. This makes the code easier to find, explain, test, and reuse.

## 10. Create a shared query key

In `src/lib/queryKeys.ts`, define:

```ts
export const destinationQueryKey = ["destinations"] as const;
```

Both the query and mutation use the same key. Keeping it in one place prevents small spelling differences from breaking cache refreshes.

## 11. Build and validate the form

In `src/components/DestinationForm.tsx`:

1. Create a Zod schema that requires trimmed `city` and `country` strings.
2. Use `z.infer` to create the form-value type from the schema.
3. Call `useForm()` with `zodResolver` and empty default values.
4. Register both fields with React Hook Form.
5. Display each validation message near its field.
6. Use semantic labels and connect errors with `aria-describedby`.

React Hook Form manages input state. Zod describes valid input. `zodResolver` connects them.

## 12. Submit with a mutation

Still in `DestinationForm.tsx`:

1. Create a mutation with `useMutation()`.
2. Use `addDestination` as its mutation function.
3. Submit validated values with `mutate()`.
4. Disable the button while the request is pending.
5. Display a request error if submission fails.
6. After success, reset the form.
7. Refresh the cached list with `queryClient.invalidateQueries()`.

Invalidating the `destinations` query tells TanStack Query that its saved list is outdated. TanStack Query then retrieves the updated records from Xano.

## 13. Retrieve and display destinations

In `src/pages/TravelWishlist.tsx`, call `useQuery()` with:

- `destinationQueryKey` to identify the cached data
- `getDestinations` to retrieve records from Xano

Pass the query result to `DestinationList`. The list should render:

- A loading message during the first request
- An error message and retry button after failure
- An empty message when the response contains no records
- City and country cards after success
- A small refreshing status during background requests

## 14. Understand the completed data flow

```text
Form input
  → React Hook Form and Zod validation
  → TanStack Query mutation
  → POST /destination
  → Xano database
  → refresh destinations query
  → GET /destination
  → updated destination list
```

## 15. Test the feature

Use the checklist in [`docs/TRAVEL_WISHLIST_SPEC.md`](./docs/TRAVEL_WISHLIST_SPEC.md). At minimum, test:

- Empty form validation
- A successful submission
- Data remaining after a browser refresh
- Xano/network failure behavior
- An empty database table
- Desktop and narrow mobile widths

Run the automated project checks:

```bash
npm run typecheck
npm run build
```

## 16. Review and save your work with Git

Review every generated change before staging it:

```bash
git status
git diff
```

Then practice the team workflow with your mentor:

```bash
git add .
git commit -m "Build Travel Wishlist Xano flow"
git push -u origin feature/travel-wishlist
```

Open a pull request. Include a summary, the assigned task link, a screenshot of the desktop or mobile UI, and your manual testing notes. Do not merge until the work has been reviewed and tested locally.
