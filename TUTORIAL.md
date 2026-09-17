# Travel Wishlist with React, TypeScript, and Xano

In this tutorial, you will build a Travel Wishlist web application using the same general tools and development patterns you will encounter while contributing to Code-Sync Hub.

Our travel wishlist should allows us to:

- View destinations stored in Xano
- Enter a city and country
- Validate the form
- Save a destination to Xano
- Automatically see the updated destination list

---

# 1. Fork the Starter Repository

You will create your own copy using a GitHub fork.

```text id="i0hxyu"
Girls Dream Code Repository
          │
          │ Fork
          ▼
Your GitHub Account
          │
          ▼
Your Copy
```

Open the Girls Dream Code onboarding repository.

Click:

```text id="3mxqje"
Fork
```

Select your GitHub account.

Keep the repository name:

```text id="qg42mb"
gdc-intern-onboarding-tutorial
```

Create the fork.

---

# 2. Clone Your Repository

Your fork currently exists on GitHub.

We need a copy on your computer.

On your GitHub repository, click:

```text id="bj45x6"
Code
```

Select:

```text id="agk4g1"
HTTPS
```

Copy the repository URL.

It should look similar to:

```text id="ksgldz"
https://github.com/YOUR-USERNAME/gdc-intern-onboarding-tutorial.git
```

Now clone your repository:

```bash id="f3yg0b"
git clone YOUR_REPOSITORY_URL
```

Then enter the project:

```bash id="htfuzk"
cd gdc-intern-onboarding-tutorial
```
---
# 3. Install Node.js and npm

Our React application requires Node.js.

Node.js allows JavaScript and TypeScript development tools to run on your computer.

Installing Node.js also installs npm.

You do not need to install npm separately.

### Step 1: Download Node.js

Go to:

```text
https://nodejs.org/
```

Download the current recommended LTS version of Node.js that meets the project requirement.

This project requires:

```text
Node.js 20.19 or newer
```

LTS stands for Long Term Support.

For this tutorial, use an LTS release rather than an experimental release.

### Step 2: Run the Installer

Open the Node.js installer.

You can keep the default installation options.

Make sure npm is included in the installation.

Complete the installation.

### Step 3: Restart VS Code

If VS Code was open while you installed Node.js, close VS Code completely and reopen it.

This allows VS Code's terminal to recognize the newly installed commands.

---

## Install Git

Git is the version control system we will use to track changes to our code.

Git allows us to:

- Clone repositories
- Create branches
- Track changes
- Create commits
- Push code to GitHub

### Step 1: Download Git

Go to:

```text
https://git-scm.com/downloads
```

Select your operating system.

For Windows, download:

```text
Git for Windows
```

### Step 2: Run the Installer

Open the Git installer.

For this tutorial, the default installation options should work.

Continue through the installer and complete the installation.

### Step 3: Restart VS Code

If VS Code was open during the installation, close it completely and reopen it.

---

# 4. Verify Your Installations

Open VS Code.

Open:

```text id="7q1ef7"
Terminal > New Terminal
```

Check that Node.js, npm, and Git are installed:

```bash id="avm0dq"
node --version
npm --version
git --version
```

Each command should return a version number.

Development environment is ready
---

# 5. Create a Feature Branch

We do not want to develop directly on the `main` branch.

Create a feature branch:

```bash id="2b7edh"
git switch -c feature/travel-wishlist
```

Verify your branch:

```bash id="nfdp8q"
git branch
```

You should see:

```text id="pfhmw3"
* feature/travel-wishlist
  main
```

The `*` shows your current branch.

---

# 6. Install the Project

The project's dependencies are listed in:

```text id="hd85w2"
package.json
```

Install them:

```bash id="6sptmv"
npm install
```

`npm` stands for Node Package Manager.

It reads `package.json` and downloads the packages required by the project.

You may notice a new folder:

```text id="8foqzb"
node_modules/
```

Do not manually edit this folder.

---

# 7. Run the Starter Application

Run:

```bash id="0znz0g"
npm run dev
```

Vite should display a localhost URL similar to:

```text id="a33bhc"
http://localhost:5173/
```

Open it in your browser.

Keep the terminal running.

Your computer is now serving the application locally.

---

# 8. Explore the Project

The important files are organized approximately like this:

```text id="tnnjhv"
src/
│
├── assets/
│
├── components/
│   ├── ui/
│   │   └── card.tsx
│   │
│   └── DestinationForm.tsx
│
├── lib/
│   ├── api.ts
│   └── utils.ts
│
├── pages/
│   └── TravelWishlist.tsx
│
├── types/
│   └── destination.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## `components/`

Reusable pieces of the user interface.

## `pages/`

Larger application screens.

## `lib/`

Reusable application logic, including API communication.

## `types/`

TypeScript descriptions of our data.

## `assets/`

Images and other static files.

---

# 9. What Are We Building?

Our finished application will follow this architecture:

```text id="y4iyml"
┌───────────────────────────┐
│         FRONTEND          │
│                           │
│    React + TypeScript     │
│                           │
│    Travel Wishlist UI     │
└─────────────┬─────────────┘
              │
              │ HTTP Requests
              ▼
┌───────────────────────────┐
│            API            │
│                           │
│           Xano            │
│                           │
│      /destination         │
└─────────────┬─────────────┘
              │
              │ Read / Write
              ▼
┌───────────────────────────┐
│         DATABASE          │
│                           │
│           Xano            │
│                           │
│    destination table      │
└───────────────────────────┘
```


For this tutorial:

```text id="1wt6p4"
Frontend
React + TypeScript

Backend
Xano

Database
Xano

API
Xano
```

---

# 10. Understanding GET and POST

Our React application needs a way to communicate with Xano.

We will create two API endpoints:

```text id="2hvsxv"
GET /destination

POST /destination
```

## GET

A GET request retrieves information.

Think:

```text id="hh8qdn"
GET me the destinations.
```

We will use GET when the page loads.

## POST

A POST request creates information.

Think:

```text id="bxw8ht"
POST this new destination.
```

We will use POST when someone submits the form.

The basic flow will eventually look like:

```text id="hlzkt5"
React
  │
  ├── GET /destination
  │        ↓
  │      Xano
  │        ↓
  │    Destinations
  │
  └── POST /destination
           ↓
         Xano
           ↓
     New Destination
```

---

# 11. Technology We Will Use in This Tutorial

| Tool | Purpose |
| --- | --- |
| VS Code | Writing code |
| React | Building the user interface |
| TypeScript | Adding type safety |
| Vite | Running and building the application |
| Tailwind CSS | Styling |
| shadcn/ui | Reusable UI components |
| React Router | Frontend routing |
| TanStack Query | Managing server data |
| React Hook Form | Managing forms |
| Zod | Form validation |
| Xano | Backend, API, and database |
| Git | Tracking code changes |
| GitHub | Sharing and reviewing code |

---

# 12. Understanding React Components

Open:

```text id="8z3sbl"
src/components/DestinationForm.tsx
```

You will see:

```tsx id="oqvntd"
export function DestinationForm() {
```

This creates a React component.

A component is a reusable piece of a user interface.

For example:

```tsx id="s3gqyo"
function WelcomeMessage() {
  return <h1>Hello!</h1>;
}
```

Another component could display it with:

```tsx id="7xz1rl"
<WelcomeMessage />
```

Now open:

```text id="5hv6oa"
src/pages/TravelWishlist.tsx
```

You should see:

```tsx id="72z6um"
<DestinationForm />
```

The component relationship is:

```text id="m7ukf7"
TravelWishlist
      │
      ├── Header
      │
      ├── DestinationForm
      │
      └── Destination List
```

React applications are built by combining components.

---

# 13. Make a Small React Change

Inside `DestinationForm.tsx`, find:

```tsx id="n2i9lr"
<CardTitle>Add a destination</CardTitle>
```

Temporarily change it to:

```tsx id="aj3bj1"
<CardTitle>Add My Dream Destination</CardTitle>
```

Save the file.

Look at the browser.

The page should automatically update.

Vite noticed that the file changed and refreshed the application.

Change the text back to:

```tsx id="vk5j2b"
<CardTitle>Add a destination</CardTitle>
```

Save again.

---

# 14. Create the Xano Database Table

Open the Girls Dream Code Xano workspace.

Create a database table named:

```text id="79ty8x"
destination
```

The table needs:

| Field | Type | Required |
| --- | --- | --- |
| `id` | Integer | Generated by Xano |
| `city` | Text | Yes |
| `country` | Text | Yes |

A database table can be thought of somewhat like a spreadsheet:

```text id="gslxlz"
destination

┌────┬───────────┬─────────────────┐
│ id │ city      │ country         │
├────┼───────────┼─────────────────┤
│ 1  │ Tokyo     │ Japan           │
│ 2  │ Chicago   │ United States   │
│ 3  │ Nairobi   │ Kenya           │
└────┴───────────┴─────────────────┘
```

Each row is a record.

Each column is a field.

---

# 15. Add Sample Data

Create at least three records:

```text id="ty8rnm"
Tokyo     | Japan
Chicago   | United States
Nairobi   | Kenya
```

We are adding data manually so that we have something to retrieve when we build our GET request.

---

# 16. Create the GET Endpoint

Open the API section in Xano.

Create:

```text id="j50wfl"
GET /destination
```

Inside the endpoint's function stack, query all records from:

```text id="cmlj7a"
destination
```

Save the endpoint.

Test it inside Xano.

You should receive something similar to:

```json id="x4vlxe"
[
  {
    "id": 1,
    "city": "Tokyo",
    "country": "Japan"
  },
  {
    "id": 2,
    "city": "Chicago",
    "country": "United States"
  },
  {
    "id": 3,
    "city": "Nairobi",
    "country": "Kenya"
  }
]
```

If this works, your first API endpoint is complete.

---

# 17. Understanding JSON

The response from Xano is JSON.

One destination looks like:

```json id="n8nxtg"
{
  "id": 1,
  "city": "Tokyo",
  "country": "Japan"
}
```

This is an object.

Multiple objects inside square brackets form an array:

```json id="3jyd0p"
[
  {},
  {},
  {}
]
```

Our endpoint therefore returns:

```text id="2ecm1y"
An array of destination objects.
```

---

# 18. Create the Destination Types

Now we will begin implementing the frontend.

Open:

```text id="oavoy5"
src/types/destination.ts
```

Replace the contents with:

```ts id="8otfh5"
export type Destination = {
  id: number;
  city: string;
  country: string;
};

export type NewDestination = Omit<Destination, "id">;
```

Save the file.

## What does this code do?

The first type says every complete destination contains:

```text id="0u8zrn"
id       -> number
city     -> string
country  -> string
```

For example:

```ts id="2wnnt3"
{
  id: 1,
  city: "Tokyo",
  country: "Japan"
}
```

`NewDestination` uses:

```ts id="dhvlmp"
Omit<Destination, "id">
```

This means:

```text id="y7qhx3"
Start with Destination
        │
        ▼
Remove id
        │
        ▼
NewDestination
```

A new destination only needs:

```text id="mkcnf6"
city
country
```

Xano creates the ID.

---

# 19. Configure the Xano Environment Variable

Find:

```text id="c02pmg"
.env.example
```

Create a new file in the project root named:

```text id="fgvhvh"
.env
```

Add:

```text id="86jyjy"
VITE_XANO_BASE_URL=YOUR_XANO_API_GROUP_URL
```

For example:

```text id="ht9fd2"
VITE_XANO_BASE_URL=https://example.xano.io/api:ABC123
```

Do not include `/destination`.

The application will add that separately.

Do not place passwords, private API keys, authentication tokens, or other secrets in a `VITE_` environment variable.

Restart Vite after creating or changing `.env`:

```text id="x62o3x"
Ctrl + C
```

Then:

```bash id="i5ce7y"
npm run dev
```

---

# 20. Build the API Layer

Open:

```text id="fvcyl4"
src/lib/api.ts
```

Replace the contents with:

```ts id="ap79u8"
import type { Destination, NewDestination } from "@/types/destination";

const XANO_BASE_URL = import.meta.env.VITE_XANO_BASE_URL;
const DESTINATION_PATH = "/destination";

function getDestinationUrl() {
  const baseUrl = XANO_BASE_URL?.trim().replace(/\/+$/, "");

  if (!baseUrl) {
    throw new Error(
      "Add your Xano API base URL to the .env file, then restart the development server.",
    );
  }

  return `${baseUrl}${DESTINATION_PATH}`;
}

async function getErrorMessage(response: Response) {
  const fallbackMessage = `Request failed with status ${response.status}.`;

  try {
    const responseBody = (await response.json()) as { message?: string };
    return responseBody.message ?? fallbackMessage;
  } catch {
    return fallbackMessage;
  }
}

export async function getDestinations(): Promise<Destination[]> {
  const response = await fetch(getDestinationUrl());

  if (!response.ok) {
    throw new Error(await getErrorMessage(response));
  }

  return (await response.json()) as Destination[];
}

export async function addDestination(
  destination: NewDestination,
): Promise<Destination> {
  const response = await fetch(getDestinationUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(destination),
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response));
  }

  return (await response.json()) as Destination;
}
```

Save the file.

---

# 21. Understand the API File

This line:

```ts id="vlwrv4"
const XANO_BASE_URL = import.meta.env.VITE_XANO_BASE_URL;
```

retrieves the URL from `.env`.

This line:

```ts id="jhb1m4"
const DESTINATION_PATH = "/destination";
```

stores our endpoint path.

Together:

```text id="qou39f"
https://example.xano.io/api:ABC123

+

/destination

=

https://example.xano.io/api:ABC123/destination
```

---

# 22. Understanding Functions

This:

```ts id="nl0rr7"
function getDestinationUrl() {
```

creates a function.

Functions are reusable sets of instructions.

This:

```ts id="1hbj9d"
return `${baseUrl}${DESTINATION_PATH}`;
```

sends the completed URL back to whatever called the function.

---

# 23. Understanding `async` and `await`

API requests take time.

The request travels:

```text id="25c6ba"
React
  │
  ▼
Internet
  │
  ▼
Xano
  │
  ▼
Internet
  │
  ▼
React
```

This is why our API functions use:

```text id="eq76gz"
async
await
```

For example:

```ts id="5vn6ok"
const response = await fetch(getDestinationUrl());
```

means:

```text id="j3sf3u"
Send the request and wait for the response before continuing.
```

---

# 24. Understanding `fetch()`

This:

```ts id="lcf0ft"
fetch(getDestinationUrl())
```

sends an HTTP request.

If no method is specified, `fetch()` uses GET.

Therefore:

```ts id="13clfj"
getDestinations()
```

eventually performs:

```text id="8fp6qz"
GET /destination
```

The POST request explicitly includes:

```ts id="c8hhlv"
method: "POST"
```

It also includes:

```ts id="cjvjyb"
headers: {
  "Content-Type": "application/json",
}
```

This tells Xano that we are sending JSON.

The body:

```ts id="75ksw5"
body: JSON.stringify(destination)
```

converts our JavaScript object into JSON before sending it.

---

# 25. Understanding API Errors

The API file checks:

```ts id="gb0p6e"
if (!response.ok)
```

HTTP responses have status codes.

Examples:

```text id="42dzzb"
200 -> Successful request
404 -> Resource not found
500 -> Server error
```

If the request fails, our application throws an error.

The helper:

```ts id="9tl00w"
getErrorMessage()
```

attempts to retrieve a useful error message from Xano.

If Xano does not provide one, we use:

```text id="tm2izn"
Request failed with status ...
```

This will allow our UI to communicate failures to the user.

---

# 26. Create the Query Key

Inside:

```text id="8zj9u8"
src/lib/
```

create:

```text id="tw3u84"
queryKeys.ts
```

Add:

```ts id="3uopaf"
export const destinationQueryKey = ["destinations"] as const;
```

Save the file.

TanStack Query stores server data in a cache.

Think of it as temporary memory:

```text id="5rs8wu"
TanStack Query Cache

"destinations"
     │
     ├── Tokyo
     ├── Chicago
     └── Nairobi
```

The query key gives that data a consistent name.

---

# 27. Add the UI Components

Our completed form uses reusable shadcn/ui components.

Inside:

```text id="i4iy9c"
src/components/ui/
```

we need:

```text id="o1l93n"
button.tsx
input.tsx
label.tsx
```

These are reusable UI building blocks.

If these files are already included in your starter repository, do not recreate them.

If they are not present, add them using the same shadcn/ui component setup used by the starter project before continuing.

After this step, your UI directory should contain:

```text id="71j9pz"
src/components/ui/
│
├── button.tsx
├── card.tsx
├── input.tsx
└── label.tsx
```

These components allow our feature code to use:

```tsx id="l7nt1b"
<Button />
<Input />
<Label />
<Card />
```

instead of repeatedly building and styling these elements ourselves.

---

# 28. Build the Destination Form

Open:

```text id="dqrnm5"
src/components/DestinationForm.tsx
```

Replace the contents with:

```tsx id="3rnl4j"
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addDestination } from "@/lib/api";
import { destinationQueryKey } from "@/lib/queryKeys";

const destinationSchema = z.object({
  city: z.string().trim().min(1, "City is required."),
  country: z.string().trim().min(1, "Country is required."),
});

type DestinationFormValues = z.infer<typeof destinationSchema>;

export function DestinationForm() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DestinationFormValues>({
    resolver: zodResolver(destinationSchema),
    defaultValues: {
      city: "",
      country: "",
    },
  });

  const addDestinationMutation = useMutation({
    mutationFn: addDestination,
    onSuccess: async () => {
      reset();
      await queryClient.invalidateQueries({
        queryKey: destinationQueryKey,
      });
    },
  });

  function onSubmit(values: DestinationFormValues) {
    addDestinationMutation.mutate(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add a destination</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          className="space-y-5"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>

            <Input
              id="city"
              placeholder="Chicago"
              autoComplete="address-level2"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? "city-error" : undefined}
              {...register("city")}
            />

            {errors.city ? (
              <p
                id="city-error"
                className="text-sm font-medium text-red-700"
                role="alert"
              >
                {errors.city.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>

            <Input
              id="country"
              placeholder="United States"
              autoComplete="country-name"
              aria-invalid={Boolean(errors.country)}
              aria-describedby={errors.country ? "country-error" : undefined}
              {...register("country")}
            />

            {errors.country ? (
              <p
                id="country-error"
                className="text-sm font-medium text-red-700"
                role="alert"
              >
                {errors.country.message}
              </p>
            ) : null}
          </div>

          {addDestinationMutation.error ? (
            <p
              className="rounded-md border border-red-700/30 bg-red-50 p-3 text-sm text-red-800"
              role="alert"
            >
              {addDestinationMutation.error.message}
            </p>
          ) : null}

          <Button
            className="w-full sm:w-auto"
            type="submit"
            disabled={addDestinationMutation.isPending}
          >
            {addDestinationMutation.isPending
              ? "Adding destination..."
              : "Add destination"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

Save the file.

There are several new concepts here. We will break them down before continuing.

---

# 29. Understanding Zod Validation

At the top of the file:

```ts id="4ehf35"
const destinationSchema = z.object({
  city: z.string().trim().min(1, "City is required."),
  country: z.string().trim().min(1, "Country is required."),
});
```

This defines our validation rules.

For city:

```ts id="7k5fdx"
z.string()
```

means the value must be text.

```ts id="1kdf6a"
.trim()
```

removes spaces from the beginning and end.

```ts id="g6a5ne"
.min(1, "City is required.")
```

means at least one character must remain.

Therefore:

```text id="6sks0e"
"Tokyo"
   ↓
Valid

"    "
   ↓
trim()
   ↓
""
   ↓
Invalid
```

---

# 30. Understanding React Hook Form

This code:

```ts id="o69q7k"
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<DestinationFormValues>({
```

gives us several tools:

```text id="jwnv7j"
register
    ↓
Connect inputs to the form

handleSubmit
    ↓
Process form submission

reset
    ↓
Clear the form

errors
    ↓
Validation errors
```

This:

```ts id="m0cc1r"
resolver: zodResolver(destinationSchema)
```

connects React Hook Form to Zod.

The flow becomes:

```text id="1v7gxu"
User Input
    │
    ▼
React Hook Form
    │
    ▼
Zod
   / \
Valid Invalid
  │      │
  ▼      ▼
Submit  Error
```

---

# 31. Understanding `register()`

Look at:

```tsx id="ud8eyu"
{...register("city")}
```

This tells React Hook Form:

```text id="p4ffpi"
This input represents the city field.
```

The country input uses:

```tsx id="aj2jn3"
{...register("country")}
```

React Hook Form now knows which input belongs to which value.

---

# 32. Understanding Accessibility Attributes

The input also contains:

```tsx id="42ldwt"
aria-invalid={Boolean(errors.city)}
```

and:

```tsx id="h49lzr"
aria-describedby={errors.city ? "city-error" : undefined}
```

These attributes help assistive technologies understand whether the input has an error and which message describes it.

The error itself uses:

```tsx id="vb1m9p"
role="alert"
```

Accessibility is part of building a good user interface, not an optional extra.

---

# 33. Understanding the Mutation

Earlier we discussed:

```text id="2ez7fn"
Query
=
Read data

Mutation
=
Change data
```

Our form uses:

```ts id="1m4k73"
const addDestinationMutation = useMutation({
  mutationFn: addDestination,
```

This tells TanStack Query:

```text id="3dhp0f"
When this mutation runs, call addDestination().
```

Then:

```ts id="5j0mvr"
function onSubmit(values: DestinationFormValues) {
  addDestinationMutation.mutate(values);
}
```

means:

```text id="e3dd8f"
Valid Form
    │
    ▼
onSubmit()
    │
    ▼
mutate(values)
    │
    ▼
addDestination(values)
    │
    ▼
POST /destination
```

---

# 34. Understanding Query Invalidation

After the POST succeeds:

```ts id="p7m9jo"
onSuccess: async () => {
  reset();

  await queryClient.invalidateQueries({
    queryKey: destinationQueryKey,
  });
},
```

First:

```ts id="0ghvqf"
reset();
```

clears the form.

Then:

```ts id="5v1kb8"
invalidateQueries()
```

tells TanStack Query:

```text id="6g2c7n"
The destination data you previously saved may now be outdated.
```

Visual:

```text id="mpzphg"
POST Rome
    │
    ▼
Xano saves Rome
    │
    ▼
POST succeeds
    │
    ▼
Invalidate "destinations"
    │
    ▼
GET destinations again
    │
    ▼
Updated data
```

---

# 35. Test Form Validation

Go to the browser.

Submit the form without entering anything.

You should see:

```text id="5r0n67"
City is required.

Country is required.
```

Try entering only spaces.

The form should still reject the values.

At this point the form validation works, but we still need to build the destination list.

---

# 36. Create `DestinationList.tsx`

Inside:

```text id="y62sfc"
src/components/
```

create:

```text id="gv6i57"
DestinationList.tsx
```

Add:

```tsx id="ce8kfd"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Destination } from "@/types/destination";

type DestinationListProps = {
  destinations: Destination[];
  error: Error | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRetry: () => void;
};

export function DestinationList({
  destinations,
  error,
  isLoading,
  isRefreshing,
  onRetry,
}: DestinationListProps) {
  let content;

  if (isLoading) {
    content = (
      <p className="text-sm text-muted-foreground">
        Loading destinations...
      </p>
    );
  } else if (error) {
    const errorMessage =
      error.message ||
      "Unable to load destinations. Check your Xano URL and try again.";

    content = (
      <div className="space-y-3" role="alert">
        <p className="text-sm text-red-800">{errorMessage}</p>

        <Button type="button" onClick={onRetry}>
          Try again
        </Button>
      </div>
    );
  } else if (destinations.length === 0) {
    content = (
      <p className="text-sm text-muted-foreground">
        No destinations yet. Add your first one above!
      </p>
    );
  } else {
    content = (
      <ul className="grid gap-3 sm:grid-cols-2">
        {destinations.map((destination) => (
          <li
            key={destination.id}
            className="rounded-lg border border-border bg-muted/50 p-4"
          >
            <p className="font-semibold">{destination.city}</p>
            <p className="text-sm text-muted-foreground">
              {destination.country}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle>My Destinations</CardTitle>

          {isRefreshing && !isLoading ? (
            <span
              className="text-xs text-muted-foreground"
              role="status"
            >
              Refreshing...
            </span>
          ) : null}
        </div>
      </CardHeader>

      <CardContent>{content}</CardContent>
    </Card>
  );
}
```

Save the file.

---

# 37. Understanding Props

Our `DestinationList` does not retrieve its own data.

Instead, another component gives it information.

These are called props.

Our component expects:

```ts id="b85vdr"
type DestinationListProps = {
  destinations: Destination[];
  error: Error | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRetry: () => void;
};
```

This can be visualized as:

```text id="43pz18"
TravelWishlist
      │
      ├── destinations
      ├── error
      ├── isLoading
      ├── isRefreshing
      └── onRetry
             │
             ▼
      DestinationList
```

---

# 38. Understanding UI States

The destination list handles four major situations.

## Loading

```text id="4y2bzv"
Loading destinations...
```

## Error

```text id="80a0nn"
Something went wrong.

[ Try again ]
```

## Empty

```text id="cf2y7v"
No destinations yet.
Add your first one above!
```

## Success

```text id="thwcd4"
Tokyo
Japan

Chicago
United States
```

A successful request returning zero records is different from a failed request.

That is why empty and error are separate states.

---

# 39. Understanding `.map()`

When destinations exist, we use:

```tsx id="ag5jqe"
destinations.map((destination) => (
```

`.map()` goes through every item in an array.

If our data is:

```text id="2eg3pu"
Tokyo
Chicago
Nairobi
```

React creates:

```text id="byvdv5"
Tokyo
   ↓
List Item

Chicago
   ↓
List Item

Nairobi
   ↓
List Item
```

Inside each item:

```tsx id="f3rwgv"
{destination.city}
```

displays the city.

```tsx id="pnry8x"
{destination.country}
```

displays the country.

---

# 40. Understanding React Keys

Each list item contains:

```tsx id="b6l2vy"
key={destination.id}
```

React needs a reliable way to identify items in a list.

Our Xano ID provides that identifier.

```text id="ky6xmg"
1 -> Tokyo
2 -> Chicago
3 -> Nairobi
```

---

# 41. Connect Everything in `TravelWishlist.tsx`

Open:

```text id="pp7iw3"
src/pages/TravelWishlist.tsx
```

Replace the contents with:

```tsx id="vnl9ag"
import { useQuery } from "@tanstack/react-query";

import { DestinationForm } from "@/components/DestinationForm";
import { DestinationList } from "@/components/DestinationList";
import gdcLogo from "@/assets/gdc-logo.png";
import { getDestinations } from "@/lib/api";
import { destinationQueryKey } from "@/lib/queryKeys";

export function TravelWishlist() {
  const {
    data: destinations = [],
    error,
    isPending,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: destinationQueryKey,
    queryFn: getDestinations,
  });

  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <header className="space-y-3 text-center">
          <img
            src={gdcLogo}
            alt="Girls Dream Code - Aspire To Be Great and Innovate!"
            className="mx-auto h-auto w-full max-w-xl"
          />

          <h1 className="pt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Travel Wishlist
          </h1>

          <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Add somewhere you'd love to visit! This page will save your
            destinations and display them here.
          </p>
        </header>

        <DestinationForm />

        <DestinationList
          destinations={destinations}
          error={error}
          isLoading={isPending}
          isRefreshing={isFetching}
          onRetry={() => void refetch()}
        />
      </div>
    </main>
  );
}
```

Save the file.

---

# 42. Understanding `useQuery()`

The most important part of the page is:

```ts id="4feyg4"
const {
  data: destinations = [],
  error,
  isPending,
  isFetching,
  refetch,
} = useQuery({
  queryKey: destinationQueryKey,
  queryFn: getDestinations,
});
```

`useQuery()` handles retrieving our server data.

The two most important options are:

```ts id="ix7bhh"
queryKey: destinationQueryKey
```

and:

```ts id="byx68x"
queryFn: getDestinations
```

The query key identifies the data.

The query function retrieves the data.

The flow is:

```text id="glcf6x"
useQuery()
   │
   ▼
getDestinations()
   │
   ▼
fetch()
   │
   ▼
GET /destination
   │
   ▼
Xano
   │
   ▼
Destination[]
```

---

# 43. Understanding Query Results

TanStack Query gives us several useful values.

## `destinations`

```ts id="90ljvm"
data: destinations = []
```

The API data.

We rename `data` to `destinations` because it is easier to understand.

## `error`

Contains the error if the request fails.

## `isPending`

Tells us whether the first request is still loading.

## `isFetching`

Tells us whether data is currently being retrieved.

This can also happen during a refresh.

## `refetch`

Allows us to manually request the data again.

---

# 44. Pass Data Using Props

This:

```tsx id="2yyjsa"
<DestinationList
  destinations={destinations}
  error={error}
  isLoading={isPending}
  isRefreshing={isFetching}
  onRetry={() => void refetch()}
/>
```

passes the query information to `DestinationList`.

Visual:

```text id="22bvws"
useQuery()
    │
    ▼
TravelWishlist
    │
    │ Props
    ▼
DestinationList
    │
    ▼
Browser
```

---

# 45. Test the GET Flow

Your browser should now display the destinations stored in Xano.

If Xano contains:

```text id="w8xqnr"
Tokyo     Japan
Chicago   United States
Nairobi   Kenya
```

those destinations should appear in the application.

If they do not appear, do not continue yet.

Check:

1. Does the GET endpoint work directly in Xano?
2. Is `VITE_XANO_BASE_URL` correct?
3. Did you restart Vite after creating `.env`?
4. Is your endpoint named `/destination`?
5. Does the browser console show an error?
6. Does the browser Network tab show the request?

---

# 46. Create the POST Endpoint

Now return to Xano.

Create:

```text id="7z8nvx"
POST /destination
```

Add two required text inputs:

```text id="20xbhk"
city
country
```

Inside the function stack, add a record to:

```text id="3s8zt3"
destination
```

Map:

```text id="krn5sk"
Input city
    ↓
destination.city

Input country
    ↓
destination.country
```

Return the created destination record.

Save the endpoint.

---

# 47. Test POST in Xano

Test with:

```json id="8xj6ec"
{
  "city": "Rome",
  "country": "Italy"
}
```

Run the endpoint.

Check the database.

You should see a new record for:

```text id="n3d3ms"
Rome
Italy
```

Do not test the React form until the POST endpoint works directly in Xano.

---

# 48. Test the Complete Form

Return to your React application.

Enter:

```text id="6g94ho"
City:
Seoul

Country:
South Korea
```

Click:

```text id="owf3d2"
Add destination
```

Several things should happen:

```text id="1pwwhz"
User clicks Add destination
        │
        ▼
React Hook Form
        │
        ▼
Zod Validation
        │
        ▼
useMutation()
        │
        ▼
addDestination()
        │
        ▼
POST /destination
        │
        ▼
Xano
        │
        ▼
Database Record Created
        │
        ▼
Mutation Success
        │
        ├── reset()
        │
        └── invalidateQueries()
                 │
                 ▼
         GET /destination
                 │
                 ▼
           Updated List
```

Expected results:

- Seoul is saved in Xano
- The form clears
- The destination list refreshes
- Seoul appears without manually refreshing the page

---

# 49. Understand the Complete Application

You have now built the core feature.

The architecture is:

```text id="pc5yus"
USER
 │
 ▼
REACT
 │
 ├── DestinationForm
 │
 └── DestinationList
 │
 ▼
TANSTACK QUERY
 │
 ├── useQuery
 │
 └── useMutation
 │
 ▼
API.TS
 │
 ├── getDestinations()
 │
 └── addDestination()
 │
 ▼
HTTP
 │
 ├── GET /destination
 │
 └── POST /destination
 │
 ▼
XANO
 │
 ▼
DATABASE
```

---

# 50. Understand the File Responsibilities

Your project now includes:

```text id="vlcwwe"
src/
│
├── components/
│   │
│   ├── DestinationForm.tsx
│   │       │
│   │       ├── Form
│   │       ├── Validation
│   │       └── POST Mutation
│   │
│   ├── DestinationList.tsx
│   │       │
│   │       └── Display Destinations
│   │
│   └── ui/
│           │
│           ├── button.tsx
│           ├── card.tsx
│           ├── input.tsx
│           └── label.tsx
│
├── lib/
│   │
│   ├── api.ts
│   │       │
│   │       └── Xano Communication
│   │
│   └── queryKeys.ts
│           │
│           └── Query Identifiers
│
├── pages/
│   │
│   └── TravelWishlist.tsx
│           │
│           ├── GET Query
│           └── Connect Components
│
└── types/
    │
    └── destination.ts
            │
            └── Data Types
```

Separating responsibilities makes larger applications easier to understand and maintain.

---

# 51. Understand the Component Tree

Our React components form a tree:

```text id="kqeh3g"
main.tsx
   │
   ▼
App.tsx
   │
   ▼
TravelWishlist
   │
   ├───────────────┐
   ▼               ▼
DestinationForm  DestinationList
```

`TravelWishlist` is the parent of:

```text id="48tmcz"
DestinationForm
DestinationList
```

---

# 52. Understand `main.tsx`

Open:

```text id="sx1teh"
src/main.tsx
```

The starter project should already contain the application providers.

It should look similar to:

```tsx id="9k0byk"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import App from "@/App";
import "@/index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
```

You should not need to change this file.

---

# 53. Understanding `QueryClientProvider`

Our application is wrapped with:

```tsx id="z58hax"
<QueryClientProvider client={queryClient}>
```

Think of it as providing TanStack Query functionality to everything inside it.

```text id="1j9mrn"
QueryClientProvider
┌────────────────────────────┐
│                            │
│ BrowserRouter              │
│ ┌────────────────────────┐ │
│ │                        │ │
│ │ App                    │ │
│ │                        │ │
│ │ TravelWishlist         │ │
│ │                        │ │
│ │ DestinationForm        │ │
│ │ DestinationList        │ │
│ │                        │ │
│ └────────────────────────┘ │
│                            │
└────────────────────────────┘
```

This is why our components can use:

```text id="pz3s9u"
useQuery()
useMutation()
useQueryClient()
```

---

# 54. Understanding `BrowserRouter`

The application is also wrapped with:

```tsx id="s97nmq"
<BrowserRouter>
```

React Router allows React applications to support multiple frontend pages and URLs.

This tutorial only needs one main screen, but larger applications may eventually have routes such as:

```text id="klvhri"
/dashboard
/reports
/settings
```

---

# 55. Test Loading, Error, Empty, and Success States

A good application should work in more situations than the ideal case.

Test the following.

## Test 1: Successful GET

Refresh the page.

Expected:

```text id="36am91"
Destinations load.
```

## Test 2: Empty Form

Submit without entering anything.

Expected:

```text id="51b4n5"
City is required.
Country is required.
```

## Test 3: Spaces Only

Enter spaces into both fields.

Expected:

```text id="xk9cc8"
Validation fails.
```

## Test 4: Successful POST

Add a destination.

Expected:

```text id="ozj06i"
Database record created.
Form clears.
Destination appears.
```

## Test 5: Browser Refresh

Refresh the entire browser.

The destination should remain.

This demonstrates an important concept.

The destination is stored in Xano, not only in React.

## Test 6: Broken API URL

Temporarily enter an incorrect Xano URL in `.env`.

Restart Vite.

Expected:

```text id="s6l4cq"
An error message appears.
A Try Again button appears.
```

Restore the correct URL when finished.

## Test 7: Empty Database

If your mentor allows it, test with an empty destination table.

Expected:

```text id="mrvmka"
No destinations yet. Add your first one above!
```

The page should not crash.

## Test 8: Mobile Width

Open your browser's Developer Tools.

Switch to a mobile or narrow screen.

Check that:

- Text is readable
- Inputs fit
- Buttons are usable
- Destination cards fit
- Nothing requires horizontal scrolling

---

# 56. Learn Basic Debugging

Something will eventually break while developing software.

That is normal.

Debugging means determining:

```text id="6kbg6j"
What happened?

Where did it happen?

Why did it happen?

How can we fix it?
```

Do not randomly change code.

Start with evidence.

A useful debugging order is:

1. Read the error message.
2. Check VS Code for TypeScript errors.
3. Check the terminal.
4. Check the browser Console.
5. Check the browser Network tab.
6. Test the Xano endpoint directly.
7. Compare the frontend data shape with the Xano response.
8. Check environment variables.

---

# 57. Use the Browser Network Tab

Open your browser Developer Tools.

Select:

```text id="qljmb8"
Network
```

Refresh the application.

Find the request to:

```text id="5s9qxj"
destination
```

Click the request.

You can inspect:

```text id="uk9wdu"
Request URL
Request Method
Status Code
Request Payload
Response
```

For a successful POST, you might see:

```text id="p9i5ha"
Request Method:
POST

Status:
200

Payload:
{
  city: "Rome",
  country: "Italy"
}
```

This is extremely useful when debugging frontend and backend communication.

---

# 58. Debug From Both Directions

If destinations are not displaying:

```text id="qvxss3"
Does GET work directly in Xano?
          │
     ┌────┴────┐
     │         │
    NO        YES
     │         │
     ▼         ▼
Backend     Check Browser
Problem     Network Tab
                │
          Is request sent?
             /       \
           NO         YES
           │           │
           ▼           ▼
       Frontend     Check Response
       Problem
```

Do not assume every problem is a React problem.

Do not assume every problem is a Xano problem.

Determine where the data stops moving correctly.

---

# 59. Using AI Coding Tools Responsibly

During Girls Dream Code projects, you may use AI coding tools such as GitHub Copilot.

AI can help with:

- Explaining code
- Suggesting implementations
- Debugging errors
- Generating repetitive code
- Reviewing code

AI generated code still becomes your team's code.

Do not assume:

```text id="aqiv1a"
AI wrote it
=
It must be correct
```

Instead:

```text id="qkigky"
AI Suggestion
     │
     ▼
Read It
     │
     ▼
Understand It
     │
     ▼
Test It
     │
     ▼
Review Git Diff
     │
     ▼
Commit
```

If AI produces code you do not understand, ask it to explain the code before using it.

---

# 60. Protect Sensitive Information

Do not paste sensitive or confidential information into AI tools or commit it to GitHub.

Examples include:

- Passwords
- Private API keys
- Authentication tokens
- Participant information
- Private donor information
- Sensitive organization information

Your `.env` file should not be committed.

Before committing, always check:

```bash id="lvzytw"
git status
```

Make sure `.env` is not listed as a file that will be committed.

---

# 61. Run the Project Checks

Before committing your work, run:

```bash id="vbsz7s"
npm run build
```

This asks Vite to create the production build.

---

# 62. Review Your Git Changes

Run:

```bash id="u8oxk3"
git status
```

This shows which files changed.

You may see something similar to:

```text id="j6cz45"
modified:
  src/components/DestinationForm.tsx

modified:
  src/lib/api.ts

modified:
  src/pages/TravelWishlist.tsx

new file:
  src/components/DestinationList.tsx

new file:
  src/lib/queryKeys.ts
```

Now run:

```bash id="nyb0tf"
git diff
```

This shows the actual code changes.

Always review your changes before committing them.

---

# 63. Stage Your Changes

Run:

```bash id="h5lm8x"
git add .
```

This moves your changes into Git's staging area.

```text id="u5fy1a"
Working Files
     │
     │ git add .
     ▼
Staging Area
```

The staging area contains the changes you intend to include in your next commit.

---

# 64. Commit Your Changes

Run:

```bash id="d1z4h1"
git commit -m "Build Travel Wishlist Xano flow"
```

A commit is a saved checkpoint in your Git history.

```text id="k87njv"
Project History

● Starter Template
        │
        ▼
● Build Travel Wishlist Xano Flow
```

---

# 65. Push Your Branch

Run:

```bash id="mwb5d9"
git push -u origin feature/travel-wishlist
```

Your branch now exists on GitHub.

```text id="f6exk8"
Your Computer
     │
     │ git push
     ▼
GitHub
```

Refresh your repository on GitHub.

You should see your branch.

---

# 66. Create a Pull Request

A Pull Request asks someone to review your branch before its changes are merged into `main`.

```text id="i2doxk"
feature/travel-wishlist
          │
          ▼
     Pull Request
          │
          ▼
        Review
          │
          ▼
         main
```

On GitHub, click:

```text id="yok05g"
Compare & pull request
```

Use a title similar to:

```text id="9r63mz"
Build Travel Wishlist Xano Integration
```

For the description, you can use:

```md id="2d0l7e"
## Summary

- Connected the Travel Wishlist frontend to Xano
- Added destination GET request
- Added destination POST request
- Added form validation
- Added loading, error, empty, and success states
- Added automatic destination refresh after submission

## Testing

- Tested empty form validation
- Tested successful destination creation
- Tested page refresh
- Tested loading and error states
- Tested mobile layout
- Ran typecheck
- Ran production build
```

Add a screenshot of your completed application if requested.

---

# 67. Understand Code Review

Your mentor or another team member may leave comments on your Pull Request.

Code review is a normal part of software development.

It helps teams:

- Catch mistakes
- Share knowledge
- Maintain standards
- Improve code
- Prevent bugs

If someone requests a change:

1. Make the change locally.
2. Test it.
3. Commit the change.
4. Push the branch again.

You do not need to create another PR.

Your existing PR will update automatically.

---

# 68. Complete Application Data Flow

When the page loads:

```text id="xij7pz"
Browser Opens
      │
      ▼
TravelWishlist
      │
      ▼
useQuery()
      │
      ▼
getDestinations()
      │
      ▼
fetch()
      │
      ▼
GET /destination
      │
      ▼
Xano API
      │
      ▼
destination Table
      │
      ▼
JSON Response
      │
      ▼
TanStack Query
      │
      ▼
TravelWishlist
      │
      │ Props
      ▼
DestinationList
      │
      ▼
Browser
```

When the user creates a destination:

```text id="fcz4sn"
User
 │
 ▼
DestinationForm
 │
 ▼
React Hook Form
 │
 ▼
Zod
 │
 ├──────── Invalid
 │             │
 │             ▼
 │        Error Message
 │
 ▼ Valid
useMutation()
 │
 ▼
addDestination()
 │
 ▼
POST /destination
 │
 ▼
Xano
 │
 ▼
Database
 │
 ▼
Record Created
 │
 ▼
onSuccess()
 │
 ├── reset()
 │
 └── invalidateQueries()
            │
            ▼
      GET /destination
            │
            ▼
       Updated Data
            │
            ▼
      DestinationList
            │
            ▼
           User
```

---

# 69. How This Pattern Applies to Larger Applications

The Travel Wishlist is intentionally simple.

The same architecture can be reused for larger applications.

Today:

```text id="s0fhll"
GET /destination

POST /destination
```

Another application might use:

```text id="51jm91"
GET /records

POST /records

GET /reports

POST /reports
```

The names and data change.

The basic pattern stays similar.

```text id="yocfg1"
USER
  │
  ▼
REACT
  │
  ▼
TANSTACK QUERY
  │
  ▼
API FUNCTION
  │
  ▼
HTTP REQUEST
  │
  ▼
XANO
  │
  ▼
DATABASE
```

That pattern is one of the most important things to understand from this tutorial.

---

# 70. Final Challenge

Without looking at the previous diagrams, explain what happens when a user enters:

```text id="gg78p3"
Barcelona
Spain
```

Try to use these words:

- React
- Form
- Zod
- Mutation
- POST
- API
- Xano
- Database
- Query
- GET
- Props
- Component

A strong explanation might be:

> The user enters Barcelona and Spain into the React form. React Hook Form collects the values and Zod validates them. If the values are valid, the mutation calls the `addDestination` function. That function sends a POST request to the Xano API. Xano creates the destination in the database. After the POST succeeds, TanStack Query invalidates the destinations query. The application sends another GET request to Xano and receives the updated destination list. TravelWishlist passes the destinations to the DestinationList component using props, and React displays Barcelona, Spain on the page.

If you understand this process, you understand the main goal of this tutorial.

---

# 71. Final Testing Checklist

Before submitting your Pull Request, confirm:

- [ ] `npm install` completed successfully
- [ ] The project starts with `npm run dev`
- [ ] The Travel Wishlist page loads
- [ ] `.env` contains the correct Xano base URL
- [ ] GET `/destination` works directly in Xano
- [ ] Existing Xano destinations appear in React
- [ ] Loading state works
- [ ] Empty state works
- [ ] GET error state works
- [ ] City is required
- [ ] Country is required
- [ ] Spaces-only values fail validation
- [ ] POST `/destination` works directly in Xano
- [ ] A destination can be submitted from React
- [ ] POST creates exactly one database record
- [ ] The form clears after success
- [ ] The destination list automatically refreshes
- [ ] Data remains after refreshing the browser
- [ ] POST errors are communicated to the user
- [ ] The page works at mobile width
- [ ] `.env` is not being committed
- [ ] No passwords or private credentials are in the repository
- [ ] `npm run typecheck` passes
- [ ] `npm run build` passes
- [ ] `git diff` was reviewed
- [ ] Changes were committed on `feature/travel-wishlist`
- [ ] The branch was pushed to GitHub
- [ ] A Pull Request was created

---

# 72. Troubleshooting

## `npm` is not recognized

Run:

```bash id="5gwdl1"
node --version
npm --version
```

If these commands are not recognized, Node.js may not be installed correctly.

## The application will not open

Make sure:

```bash id="j8d1ej"
npm run dev
```

is still running.

Look for the localhost URL in the terminal.

## Xano data does not appear

Check:

1. Does GET work directly in Xano?
2. Is `VITE_XANO_BASE_URL` correct?
3. Did you restart Vite?
4. Is the endpoint `/destination`?
5. Check the browser Network tab.
6. Check the browser Console.

## POST does not create a destination

Check:

1. Does POST work directly in Xano?
2. Are the inputs named `city` and `country`?
3. Is the method `POST`?
4. Is the request body JSON?
5. Does the Network tab show the request?
6. Does Xano return an error?

## Destination saves but does not appear

Check:

```ts id="32fp5h"
await queryClient.invalidateQueries({
  queryKey: destinationQueryKey,
});
```

Your GET query and mutation invalidation must use the same query key.

## TypeScript shows an error

Hover over the red underline.

Read the error.

TypeScript often tells you:

```text id="4mbj0f"
Expected one type
but received another type
```

Do not remove TypeScript simply to make the error disappear.

Determine why the values do not match.

---
