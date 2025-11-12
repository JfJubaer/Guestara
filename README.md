# Guestara Menu Management API

A Node.js backend server for menu management using Express.js and MongoDB (Mongoose). The API supports Categories, Subcategories, and Items with full CRUD and search functionality, following the MVC pattern.

## Features

- Create, read, update Categories, Subcategories, and Items
- Search items by name
- Relationships: Categories > Subcategories > Items
- CORS, environment variables, and nodemon for development

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JfJubaer/Guestara.git
   cd Guestara
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/guestara
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000` by default.

## API Routes

### Category

- `POST   /api/categories` — Create a category
- `GET    /api/categories` — Get all categories
- `GET    /api/categories/:id` — Get category by ID
- `GET    /api/categories/name/:name` — Get category by name
- `PUT    /api/categories/:id` — Edit category

### Subcategory

- `POST   /api/subcategories` — Create a subcategory (requires `category` field)
- `GET    /api/subcategories` — Get all subcategories
- `GET    /api/subcategories/category/:categoryId` — Get subcategories under a category
- `GET    /api/subcategories/:id` — Get subcategory by ID
- `GET    /api/subcategories/name/:name` — Get subcategory by name
- `PUT    /api/subcategories/:id` — Edit subcategory

### Item

- `POST   /api/items` — Create an item (requires `categoryId` and/or `subcategoryId`)
- `GET    /api/items` — Get all items
- `GET    /api/items/category/:categoryId` — Get items under a category
- `GET    /api/items/subcategory/:subcategoryId` — Get items under a subcategory
- `GET    /api/items/:id` — Get item by ID
- `GET    /api/items/name/:name` — Get item by name
- `PUT    /api/items/:id` — Edit item
- `GET    /api/items/search?name=xyz` — Search items by name

## Example JSON Bodies

### Category

```json
{
  "name": "Beverages",
  "image": "https://example.com/images/beverages.jpg",
  "description": "All types of drinks and beverages.",
  "taxApplicable": true,
  "tax": 10,
  "taxType": "percentage"
}
```

### Subcategory

```json
{
  "name": "Soft Drinks",
  "image": "https://example.com/images/softdrinks.jpg",
  "description": "All types of soft drinks.",
  "taxApplicable": true,
  "tax": 5,
  "category": "<CATEGORY_OBJECT_ID>"
}
```

### Item

```json
{
  "name": "Coca Cola",
  "image": "https://example.com/images/cocacola.jpg",
  "description": "Chilled soft drink",
  "taxApplicable": true,
  "tax": 5,
  "baseAmount": 50,
  "discount": 5,
  "categoryId": "<CATEGORY_OBJECT_ID>",
  "subcategoryId": "<SUBCATEGORY_OBJECT_ID>"
}
```

## Assignment Q&A

**Which database did you choose and why?**

- MongoDB, for its flexibility with nested data and easy integration with Mongoose in Node.js.

**3 things learned from this assignment:**

1. Structuring a real-world REST API with nested relationships.
2. Handling default values and references in Mongoose schemas.
3. Importance of clear API documentation and error handling.

**Most difficult part:**

- Ensuring correct relationships and validation between categories, subcategories, and items.

**What would you do differently with more time?**

- Add validation middleware, and more robust error handling. Also, add tests and OpenAPI documentation.

## License

MIT
