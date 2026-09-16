# Travel Wishlist Feature Spec

## Expected behavior

- The page retrieves all destination records from Xano when it loads.
- Each returned destination displays its city and country.
- A user can submit a city and country.
- City and country are both required after surrounding whitespace is removed.
- A valid submission creates one Xano record, clears the form, and refreshes the list.
- The page communicates loading, background refresh, empty, request-error, and submission-error states.

## Manual test checklist

- [ ] Leave both fields empty and confirm that both validation messages appear.
- [ ] Enter spaces only and confirm that the fields remain invalid.
- [ ] Enter a valid city and country and confirm that one record is created.
- [ ] Confirm that the successful destination appears without manually refreshing the browser.
- [ ] Refresh the browser and confirm that the destination still appears from Xano.
- [ ] Temporarily use an incorrect Xano URL and confirm that an error and retry button appear.
- [ ] Remove all sample records and confirm that the empty state appears.
- [ ] Check the page at desktop width.
- [ ] Check the page at a narrow mobile width.

## Data contract

GET `/destination` returns:

```json
[
  {
    "id": 1,
    "city": "Chicago",
    "country": "United States"
  }
]
```

POST `/destination` accepts:

```json
{
  "city": "Accra",
  "country": "Ghana"
}
```

POST `/destination` returns the created destination, including its numeric `id`.
