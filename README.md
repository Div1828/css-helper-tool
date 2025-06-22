# CSS Helper Tool

A modern, intuitive, and responsive CSS utility generator built with React, Tailwind CSS, and ShadCN UI. The app provides an interactive playground to visually design and preview CSS styles, then instantly extract clean Tailwind or vanilla CSS code.

This tool is perfect for developers, designers, or students looking to speed up UI development without memorizing class names or writing redundant style code.

---

## 🔧 Tools Included

Each module in the app is purpose-built and accessible from the sidebar. All tools support **live preview**, **code generation**, and **Tailwind/CSS switching**.

| Tool               | Description                                                                                     |
|--------------------|-------------------------------------------------------------------------------------------------|
| **Box Styler**     | Customize box properties like size, padding, margin, shadow, border, color, transforms, and more. Includes a Hover Mode and Positioning Mode for advanced layout control. |
| **Button Maker**   | Quickly build styled buttons with text, color, border radius, and hover effects.               |
| **Font Tweaker**   | Experiment with font families, weights, sizes, line height, letter spacing, and text alignment. |
| **Shadow Forge**   | Design layered or single shadows using offset, blur, spread, and color with full Tailwind or CSS output. |
| **Transition Editor** | Create smooth transition animations with start/end states. Supports properties like opacity, color, background, and transform. |
| **Border Lab**     | Configure individual borders (top, right, bottom, left), styles (solid, dashed), and radii (shared or corner-based). |
| **Position Dragger** | Drag and drop an element freely on the screen to calculate and extract absolute `top`/`left` positioning in both Tailwind and CSS. |
| **Grid Crafter**   | Visual CSS Grid generator with adjustable columns, rows, gap, alignment, and preview scaling to fit all screen sizes cleanly. |

---

## 🧪 Features

- Live preview for every change
- Toggle between Tailwind CSS and vanilla CSS output
- Clean code generation with copy-to-clipboard support
- Fully responsive and touch-friendly UI
- Uses latest Tailwind CSS v4.1 and ShadCN components
- Built with performance and accessibility in mind
- Dark mode toggle available on every screen

---

## ⚙️ Tech Stack

- **React (JavaScript)**
- **Tailwind CSS v4.1**
- **ShadCN UI (Radix-based UI components)**
- **Vite** for fast bundling and local dev
- **Lucide Icons** for a clean and minimal look
- **Modular architecture** with clean separation of tools and components

---

## 🖼️ Screenshots

| Tool            | Preview Description                                       |
|------------------|-----------------------------------------------------------|
| Box Styler       | Customizable layout box with shadows, padding, and transforms |
| Transition Editor| Select transition properties with before/after control    |
| Position Dragger | Full-page draggable element with CSS position extraction  |
| Grid Crafter     | Dynamic grid with scaling, alignment, and visual output   |

---

## 🚀 Deployment

- **Frontend Deployed on Vercel:**  
  [https://css-helper-tool.vercel.app](https://css-helper-tool.vercel.app)

- **GitHub Repository (Frontend):**  
  [https://github.com/Div1828/css-helper-tool](https://github.com/Div1828/css-helper-tool)

---

## 🧠 How to Use

1. Select a tool from the sidebar.
2. Use sliders, selectors, and inputs to customize the element.
3. View real-time changes in the live preview area.
4. Copy the generated Tailwind or CSS code using the toggle and "Copy" button.
5. Paste the code into your project with confidence.

---

## 🛠️ Local Development

Clone the project and run locally:

```bash
git clone https://github.com/Div1828/css-helper-tool.git
cd css-helper-tool
npm install
npm run dev
