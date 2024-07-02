## Overview

Tech Stack & Tools :

- Framework - [Next.js 14](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Authentication - [Auth.js](https://authjs.dev/)
- File Uploading - [Uploadthing](https://uploadthing.com)
- Tables - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Pre-commit Hooks - [Husky](https://typicode.github.io/husky/)

## Features

- Multiple auth methods such as GitHub, Email.
- 4 different themes with fully responsive UI.
- Implemented a Task Management Kanban Board which helps to to easy manage your tasks.
- Integrated Zustand for persisting data and state management.
- a fully accessible command menu for quick navigation.
- Implemented Uploadthing for file Uploading.

## Pages

| Pages                     | Specifications                                                                                            |
| :------------------------ | :-------------------------------------------------------------------------------------------------------- | --- |
| **http://localhost:3000** | Authentication with **NextAuth** supports login with GitHub and email logins(Enter dummy email for demo). |     |
| **People**                | Tanstack tables with server side searching, pagination etc).                                              |
| **Profile**               | Mutistep dynamic forms using react-hook-form and zod for form validation.                                 |
| **Kanban Board**          | A Drag n Drop task management board with dnd-kit and zustand to persist state locally.                    |
| **Not Found**             | Not Found Page Added in the root level -                                                                  |

## Getting Started

Follow these steps to clone the repository and start the development server:

- `git clone https://github.com/MahendraBishnoi29/chakr-crm.git`
- then run `npm install`
- Create a `.env.local` file and use paste these credentials -

```
UPLOADTHING_SECRET=sk_live_3b204317c58a7ea53f7e872dcb51395409530a0920300f50c78eaf1d620a9c2a
UPLOADTHING_APP_ID=vea36vdtf5

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=dsfdsfdsf

GITHUB_ID=Ov23li6mqoNl7RGGsNrZ
GITHUB_SECRET=c234c35360ddc6a343dabd6bc95bf9678b291029
```

- `npm run dev`

You should now be able to access the application at http://localhost:3000.
