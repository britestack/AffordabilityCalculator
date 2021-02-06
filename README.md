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

## Mortgages API
-GET `/api/listing/:id/mortgages/`

**Path Parameters:**
- `id` - listing_id

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  mortgage_id: INT
  mortgage_name: STRING
  terms: STRING[]
  fees: INT
  rate: INT
  apr: INT
}
```
-GET `/api/mortgages`

**Path Parameters:**
- `none`

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  mortgage_name: STRING
  terms: STRING[]
  fees: INT
  rate: INT
  apr: INT
}
```

-GET `/api/mortgages/:id`

**Path Parameters:**
- `id` mortgages_id

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  mortgage_name: STRING
  terms: STRING[]
  fees: INT
  rate: INT
  apr: INT
}
```

-POST `/api/mortgages`

**Path Parameters:**
- `id` - mortgages_id

**Request Body**
```json
{
  mortgage_name: STRING
  terms: STRING[]
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

-POST `/api/listings/:id/mortgages`

**Path Parameters:**
- `id` - listings_id

**Request Body**
```json
{
  mortgage_name: STRING
  terms: STRING[]
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
      "message": "Successfully added a mortgage to a specific listing."
    }
```

```json
    {
      "message": "Failed to add a mortgage to a specific listing."
    }
```

</br>

-PATCH `/api/mortgages/:id`

**Path Parameters:**
- `id` - mortgages id

**Request Body**
*
```json
{
  name: STRING
  terms: STRING[]
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
      "message": "Successfully updated a specific mortgage."
    }
```

```json
    {
      "message": "Failed to update a specific mortgage."
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
      "message": "Successfully deleted a specific mortgage."
    }
```

```json
    {
      "message": "Failed to deleted a specific mortgage."
    }
```

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
  user_password: String,
  ip: String
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
  usr_id: INT
  username: String,
  email: String,
  user_password: String,
  ip: String
}
```
</br>

-PATCH `/api/users/:id`

**Path Parameters:**
- `id` - user ID

**Request Body**
*
```json
{
  usr_id: INT
  username: String,
  email: String,
  user_password: String,
  ip: String
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

</br>

## __User Favorites API__

</br>

### Read a relationship between user and favorite mortgages

- GET `/api/user/:id/mortgages`

**Path Parameters:**
- `id` - user id

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  mortgage_id: INT
  mortgage_name: STRING
  terms: STRING[]
  fees: INT
  rate: INT
  apr: INT
}
```
</br>

### Add a relationship between user and favorite mortgages

- POST `/api/user/:id/mortgages`

**Success Status Code:** `201`


**Request Body**: Expects JSON with the following keys.

```json
{
  mortgage_id: INT
  mortgage_name: STRING
  terms: STRING[]
  fees: INT
  rate: INT
  apr: INT
}
```
## Delete a specific mortgage from a specific user

- DELETE `/api/user/:id/mortgages/:id`

**Path Parameters:**

- `user_id` - user id
- `mortgage_id` - mortgage id

**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a specific mortgage from a specific user."
    }
```

```json
    {
      "message": "Failed to deleted a specific mortgage from a specific user"
    }
```

</br>

## __listing_mortgages API__

</br>

### Add a relationship between listing and mortgages

- POST `/api/listing/:id/mortgages`

**Path Parameters:**

- `id` - listing id
**Success Status Code:** `201`


**Request Body**: Expects JSON with the following keys.

```json
{
  mortgage_name: STRING
  terms: STRING[]
  fees: INT
  rate: INT
  apr: INT
}
```
## Delete a specific mortgage from a specific listing

- DELETE `/api/listing/:id/mortgages/:id`

**Path Parameters:**

- `listing_id` - listing id
- `mortgages_id` - mortgages id

**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a specific mortgage from a specific listing."
    }
```

```json
    {
      "message": "Failed to deleted a specific mortgage from a specific listing"
    }
```

</br>

