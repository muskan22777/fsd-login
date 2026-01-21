# Login Experiment – Context API & Redux Toolkit

# Project Overview
This project is a React-based web application developed to demonstrate modern state management techniques using:
React Context API for Authentication & Role Management
Redux Toolkit for Product Catalog and Cart State Management
The application supports role-based access control, where Admin and User have different permissions.

# Objectives

Implement authentication using Context API
Manage global application state using Redux Toolkit
Apply role-based authorization (Admin vs User)
Separate concerns between authentication state and application data
Deploy the application with a live production link

# Project Structure
<img width="274" height="312" alt="Screenshot 2026-01-20 at 12 18 57 PM" src="https://github.com/user-attachments/assets/9771b019-43d9-48d2-8964-1f5d502e8ec7" />

## Description
A React application demonstrating state management using:
- Context API for Authentication
- Redux Toolkit for Product Catalog and Cart

## Features
- Role-based login (Admin / User)
- Admin can manage products
- Users can add/remove products from cart
- Clean and simple UI
<img width="1439" height="778" alt="Screenshot 2026-01-19 at 7 35 32 PM" src="https://github.com/user-attachments/assets/34e81d0a-fc67-42d9-8978-564f81aad205" />
<img width="1439" height="773" alt="Screenshot 2026-01-19 at 7 36 08 PM" src="https://github.com/user-attachments/assets/7ed361d2-ecb9-4617-8383-801eb05d7943" />
<img width="1436" height="774" alt="Screenshot 2026-01-19 at 7 36 35 PM" src="https://github.com/user-attachments/assets/7034b0c8-259c-45eb-b7ee-ee696d5cee3b" />


## Tech Stack
- React-Frontend UI
- Redux Toolkit-Product & Cart State
- Context API-Authentication & Role State
- Vite-Build Tool
- React Redux-Store Integration
- CSS-UI
- Vercel-Deployement

# State Management (Redux Toolkit)
# Products Slice
Stores product catalog
Actions:
Add product (Admin only)
Remove product (Admin only)
# Cart Slice
Stores user-specific cart items
Actions:
Add to cart (User only)
Remove from cart (User only)
Redux ensures predictable and scalable state updates.

# Conclusion

This project successfully demonstrates how Context API and Redux Toolkit can be combined in a React application to build a scalable, maintainable, and role-based system. The separation of authentication and application data improves clarity, performance, and real-world usability.

## How to Run
```bash
npm install
npm run dev
