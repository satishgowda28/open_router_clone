# Open Router Clone

This is a monorepo built with [Turborepo](https://turbo.build/repo), utilizing [Bun](https://bun.sh/) as the primary runtime and package manager.

## What's inside?

This Turborepo includes the following apps and packages:

### Apps

- `dashboard_frontend`: A frontend web application built with **React**, **Tailwind CSS**, and served via **Bun**.
- `primary-backend`: The main backend service built with **ElysiaJS** and **Bun**, handling core routing and business logic (connects to the shared database).
- `api_backend`: A backend service acting as the API layer, built with **Bun** and **TypeScript**.

### Packages

- `db`: Shared database configuration and schemas used across the backends.
- `ui`: A shared UI component library.
- `eslint-config`: Shared `eslint` configurations used throughout the monorepo.
- `typescript-config`: Shared `tsconfig.json` files used throughout the monorepo.

Each package/app is built using [TypeScript](https://www.typescriptlang.org/).

## Development

To start developing all apps and packages, simply run:

```bash
bun run dev
```

If you have global `turbo` installed, you can also run:

```bash
turbo dev
```

To run a specific app (e.g., `primary-backend`):

```bash
turbo dev --filter=primary-backend
```

## Build

To build all apps and packages, run the following command:

```bash
bun run build
# or
turbo build
```

## Useful Links

Learn more about the tools used in this repository:

- [Bun Documentation](https://bun.sh/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [ElysiaJS Documentation](https://elysiajs.com/)
- [React Documentation](https://react.dev/)
