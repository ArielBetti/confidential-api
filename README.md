# Confidential API

## Getting started

### 1. Setup

```
npm install
```

run dev

```
npm run dev
```

## Using the REST API

You can access the REST API of the server using the following endpoints:

### `GET`

- `/message/:id`: Fetch a single message by its `id`
### `POST`

- `/message/create`: Create a message
  - Body:
    - `title: String` (required): The title of the message
    - `subtitle: String` (optional): The sub-title of the message
    - `message: String` (required): The confidential message

### `DELETE`

- `/message/:id`: Delete a message by its `id`

### Schemas

```prisma
// ./prisma/schema.prisma

model Message {
  id       String  @id @default(auto()) @map("_id") @db.ObjectId
  title    String
  subTitle String?
  message  String
}

```

> ```
> tag: description
> ```

> The **tag** is reference its your working
> And  **description** is a low description;

### What a change to introduce? (Tag)
- [ ] `feat` new feature
- [ ] `fix` bug fixing
- [ ] `docs` doc update
- [ ] `refact` code refact
- [ ] `perf` improve code performance
- [ ] `test` add or remove tests
- [ ] `build` build changes
- [ ] `ci` change deployment
- [ ] `chore` chore
- [ ] `revert` revert older commits

**Example**: `feat: tip-card-component`
