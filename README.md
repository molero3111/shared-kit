# Shared Kit

This npm package contains reusable code for various projects. It is designed to be a shared toolkit that can be easily integrated into different applications.

## Installation

To install the package, run the following command:

```bash
npm install shared-kit
```

## Usage

### Pagination DTO

The `pagination.dto.ts` file provides a Data Transfer Object (DTO) for handling pagination in NestJS projects.

#### Importing

To use the `PaginationDto` in your NestJS project, import it as follows:

```typescript
import { PaginationDto } from 'shared-kit/pagination.dto';
```

#### Using in a Controller

You can use the `PaginationDto` in your controller to handle pagination parameters. Here is an example:

```typescript
import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDto } from 'shared-kit/pagination.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(@Query() pagination: PaginationDto) {
        const { page, limit } = pagination;
        // Your logic to handle pagination
    }
}
```

In this example, the `PaginationDto` is used to extract pagination parameters from the query string, making it easier to handle pagination in your endpoints.