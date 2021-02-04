# AffordabilityCalculator

> `britestack Affordability Calculator service`

## Related Projects

  -
  -
  -

## Requirements

- [PostgreSQL](https://www.postgresql.org/download/)

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:
```sh
npm i -g webpack
npm i
```

## Usage
-Start server * client using npm run react-dev npm run start

- **update this with seeding script to generate mock data in a CSV file

</br>

## Listing API

</br>

### Select listing matching listingId

-GET `/api/listings/:id`

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
    {
      id: INT
      price: INT
      rating: INT
      listings_mortagages: INT
    }

```

-POST `/api/listings`

**Path Parameters:**
- `id` - listing ID

**Request Body**
```json
{
  price: INT
  rating: INT
  istings_mortagages: INT
}
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully added a listing."
    }
```

```json
    {
      "message": "Failed to add a listing."
    }
```

-PATCH `/api/listing/:id`

**Path Parameters:**
- `id` - listing ID

**Request Body**
*
```json
 {
    price: INT
    rating: INT
    listings_mortgages: INT
  }
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updated a listing."
    }
```

```json
    {
      "message": "Failed to update a listing."
    }
```
</br>

-DELETE `/api/listing/:id`

###Path parameters:

**Request Body**
*

   ```id``` listing id


### Path responses:
**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a listing."
    }
```

```json
    {
      "message": "Failed to deleted a listing."
    }
```
## Mortgages API
-GET `/api/mortgages/:id`

**Path Parameters:**
- `id` - mortgages id

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  id: INT
  name: STRING
  terms: ARRAY[STRING,]
  fees: INT
  rate: INT
  apr: INT
}
```

-POST `/api/mortgages`

**Path Parameters:**
- `id` - mortgages id

**Request Body**
```json
{
  name: STRING
  terms: ARRAY[STRING,]
  fees: INT
  rate: INT
  apr: INT
}
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully added a mortgage."
    }
```

```json
    {
      "message": "Failed to add a mortgage."
    }
```

</br>

-PUT `/api/mortgages/:id`

**Path Parameters:**
- `id` - mortgages id

**Request Body**
*
```json
{
  name: STRING
  terms: ARRAY[STRING,]
  fees: INT
  rate: INT
  apr: INT
}
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updated a mortgage."
    }
```

```json
    {
      "message": "Failed to update a mortgage."
    }
```
</br>

-DELETE `/api/mortgage/:id`

###Path parameters:

**Request Body**
*

   ```id``` mortgage id


### Path responses:
**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a mortgage."
    }
```

```json
    {
      "message": "Failed to deleted a mortgage."
    }
```

</br>

## __user_favorites API__

</br>

### Add a relationship between user and favorite mortgages

- POST `/api/user_favorites`

**Success Status Code:** `201`


**Request Body**: Expects JSON with the following keys.

```json
{
  id: INT
  user_id: INT
  mortagages_id: INT
}
```
## Delete user_favorites matching photo id

- DELETE `/api/user_favorites/:id`

**Path Parameters:**

- `id` - user_favorites ID

**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a relationship between user and favorites."
    }
```

```json
    {
      "message": "Failed to deleted a relationship between user and favorites."
    }
```

</br>

## __listing_mortgages API__

</br>

### Add a relationship between listing and mortgages

- POST `/api/listing_mortgages`

**Success Status Code:** `201`


**Request Body**: Expects JSON with the following keys.

```json
{
  id: INT
  listing_id: INT
  mortagages_id: INT
}
```
## Delete listing_mortgages matching photo id

- DELETE `/api/listing_mortgages/:id`

**Path Parameters:**

- `id` - listing_mortgages ID

**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a relationship between listing and mortgages."
    }
```

```json
    {
      "message": "Failed to deleted a relationship between listing and mortgages."
    }
```

</br>

## __USER API__
 </br>

## Add a user

- POST `/api/users`

**Success Status Code:** `201`


**Request Body**: Expects JSON with the following keys.

```json
{
  username: String,
  email: String,
  password: String,
  ip: String
  user_favorites: INT
}
```
</br>

-GET `/api/users/:id`

**Path Parameters:**
- `id` - user ID

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  id: INT
  username: String,
  email: String,
  password: String,
  ip: String
  user_favorites: INT
}
```
</br>

-PATCH `/api/users/:userId`

**Path Parameters:**
- `id` - user ID

**Request Body**
*
```json
{
  id: INT
  username: String,
  email: String,
  password: String,
  ip: String
  user_favorites: INT
}
```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updated a user"
    }
```

```json
    {
      "message": "Failed to update a user."
    }
```

</br>

-DELETE `/api/user/:id`

**Path Parameters:**
- `id` - user ID

**Request Body**

   ```id``` user ID


### Path responses:
**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a user from database."
    }
```

```json
    {
      "message": "Failed to deleted a user from database."
    }
```
