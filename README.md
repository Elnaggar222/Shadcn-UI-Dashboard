# 🧭 Shadcn UI Dashboard

A modern and responsive **dashboard web app** built with **Next.js 15 (App Router)**, **Tailwind CSS**, **shadcn/ui**, **React Hook Form**, and **Zod**.  
This project was created to **practice and explore shadcn/ui components** while implementing a clean, modular dashboard experience.

---

## 🚀 Features

### 🧩 UI & Theme
- **Light / Dark mode toggle** with persistent theme using `ThemeProvider`.
- **Sidebar navigation** with state persistence via Next.js cookies.
- **Responsive layout** built with Tailwind’s grid system.
- **Custom Breadcrumb** navigation component.
- **Reusable Cards, Buttons, and Popovers** styled with `shadcn/ui`.

### 📊 Dashboard Components
- **Charts** using Recharts:
  - Line Chart
  - Bar Chart
  - Area Chart
  - Pie Chart
- **CardList** components showing dynamic content.
- **Todo List** with calendar selection using `Popover`, `ScrollArea`, and `Calendar`.

### 🧠 Data Table
- Built with **@tanstack/react-table**.
- Features:
  - Pagination
  - Sorting
  - Row selection
  - Custom cell rendering (status badges, actions, etc.)
- Integrated with shadcn/ui table components for styling.

### 👤 User Page
- Displays detailed user profile information.
- Includes:
  - **User Badges** with hover tooltips.
  - **User Information** sheet modal with edit option.
  - **Progress bar** for profile completion.
  - **Avatar and role badges** for user identity.

### 🧾 Forms
- **React Hook Form + Zod** for type-safe validation and clean form management.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [Next.js 15 (App Router)](https://nextjs.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Charts | [Recharts](https://recharts.org/en-US/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Table | [TanStack Table v8](https://tanstack.com/table/v8) |
| Icons | [Lucide React](https://lucide.dev/) |

---

## 📁 Project Structure

```
src/
 ├── app/
 │   ├── layout.tsx         # Root layout with sidebar and navbar
 │   ├── page.tsx           # Dashboard home with charts and cards
 │   ├── users/[username]/  # Dynamic user page
 │   └── payments/          # Data table example page
 ├── components/
 │   ├── ui/                # shadcn/ui components
 │   ├── charts/            # Line, Bar, Area, Pie chart components
 │   ├── CardList.tsx
 │   ├── TodoList.tsx
 │   ├── CustomBreadCrumb.tsx
 │   ├── UserBadges.tsx
 │   ├── UserInfo.tsx
 │   ├── TablePagination.tsx
 │   └── ...
 └── lib/
     └── utils.ts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Elnaggar222/Shadcn-UI-Dashboard.git
cd Shadcn-UI-Dashboard
```

### 2️⃣ Install dependencies (using pnpm)
```bash
pnpm install
```

### 3️⃣ Run the development server
```bash
pnpm dev
```

### 4️⃣ Open in your browser
```
http://localhost:3000
```

---

## 🌈 Customization

- **Theme**: Controlled via `ThemeProvider` in `layout.tsx`.
- **Sidebar**: State persisted with cookies using Next.js `headers`.
- **Reusable Components**: Every card, chart, and table follows shadcn/ui’s design patterns.

---

## 🧪 Learning Goals

This dashboard was built as a **training project** to:
- Master **shadcn/ui** components and utilities.
- Practice **dark/light mode** handling in Next.js.
- Work with **TanStack Table** for real-world data grid scenarios.
- Integrate **React Hook Form + Zod** for validation.
- Explore **responsive layouts** using Tailwind grid system.

---

## 📸 Preview

> Add screenshots or GIFs here if available (Dashboard, Charts, Data Table, etc.)

---

## 🧑‍💻 Author

**Mohamed Elnaggar**  
Frontend Developer — React & Next.js  
📍 Tanta, Egypt  
📞 01010927998  
🔗 [LinkedIn](https://www.linkedin.com/in/eng-elnaggar/)  
💻 [GitHub](https://github.com/Elnaggar222)

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).
