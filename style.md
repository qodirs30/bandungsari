# Pedoman Styling CSS Proyek "bandungsari.com"

Dokumen ini berisi semua Custom Properties, Utility Classes, styling spesifik untuk Neobrutalism dan Raycast, serta detail lain untuk proyek "bandungsari.com".

---

## 1. Custom Properties (CSS Variables)

Definisikan di `:root` untuk akses global.

```css
:root {
    /* Colors */
    --primary-color: #00d5ff; /* Main accent color (Bandungsari Blue) */
    --primary-dark: #00a0cc; /* Darker primary for hover/active */
    --text-color-dark: #222222; /* Dominant text color */
    --text-color-light: #fefefe; /* Text color on dark backgrounds */
    --bg-light: #f0f0f0; /* Main light background */
    --bg-medium: #e0e0e0; /* Secondary light background, for blocks/cards */
    --bg-dark: #1a1a1a; /* Dark background, for footer or specific sections */
    --border-color: #222222; /* Primary border color, stark */
    --shadow-color: #333333; /* For neobrutalist shadows */
    --error-color: #d10000; /* For error messages */

    /* Typography */
    --font-heading: 'Inter', sans-serif; /* For h1, h2, strong titles */
    --font-body: 'Inter', sans-serif; /* For paragraphs, general text */
    --font-mono: 'Fira Code', monospace; /* For data, code-like elements */
    --font-size-base: 1rem; /* 16px */
    --line-height-base: 1.6;

    /* Spacing */
    --spacing-xs: 0.25rem; /* 4px */
    --spacing-sm: 0.5rem; /* 8px */
    --spacing-md: 1rem; /* 16px */
    --spacing-lg: 2rem; /* 32px */
    --spacing-xl: 4rem; /* 64px */

    /* Border Radius (minimal for neobrutalism, slight hint for Raycast) */
    --radius-none: 0;
    --radius-sm: 2px; /* Very subtle, only where absolutely needed */
    --radius-md: 4px; /* For minor refinement in Raycast-like components */

    /* Transitions */
    --transition-fast: 0.15s ease-out;
    --transition-normal: 0.3s ease-in-out;
}
```

---

## 2. Global Styles & Base Reset

```css
/* Universal box-sizing */
*, *::before, *::after {
    box-sizing: border-box;
}

/* Basic Reset */
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    color: var(--text-color-dark);
    background-color: var(--bg-light);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--text-color-dark);
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
    line-height: 1.2;
}
h1 { font-size: 3rem; font-weight: 900; }
h2 { font-size: 2.5rem; font-weight: 800; }
h3 { font-size: 2rem; font-weight: 700; }
h4 { font-size: 1.5rem; font-weight: 600; }
h5 { font-size: 1.25rem; font-weight: 500; }
h6 { font-size: 1rem; font-weight: 500; }

/* Paragraphs */
p {
    margin-bottom: var(--spacing-md);
}

/* Links */
a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color var(--transition-fast);
}
a:hover, a:focus {
    color: var(--primary-dark);
    outline: none; /* Managed by focus-visible for accessibility */
}

/* Images */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Focus-visible for accessibility */
:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}
```

---

## 3. Utility Classes (Prefix `u-`)

```css
/* Text Alignment */
.u-text-center { text-align: center; }
.u-text-left   { text-align: left; }
.u-text-right  { text-align: right; }
.u-text-mono   { font-family: var(--font-mono); }
.u-text-uppercase { text-transform: uppercase; }
.u-text-primary { color: var(--primary-color); }
.u-text-dark   { color: var(--text-color-dark); }
.u-text-light  { color: var(--text-color-light); }

/* Display */
.u-block        { display: block; }
.u-inline-block { display: inline-block; }
.u-flex         { display: flex; }
.u-inline-flex  { display: inline-flex; }
.u-grid         { display: grid; }
.u-hidden       { display: none !important; }
.u-sr-only      { /* Visually hidden, but accessible for screen readers */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Spacing Helpers (e.g., u-margin-top-md, u-padding-all-lg) */
/* Margin */
.u-m-0 { margin: 0 !important; }
.u-mt-xs { margin-top: var(--spacing-xs) !important; }
.u-mt-sm { margin-top: var(--spacing-sm) !important; }
.u-mt-md { margin-top: var(--spacing-md) !important; }
.u-mt-lg { margin-top: var(--spacing-lg) !important; }
.u-mb-xs { margin-bottom: var(--spacing-xs) !important; }
.u-mb-sm { margin-bottom: var(--spacing-sm) !important; }
.u-mb-md { margin-bottom: var(--spacing-md) !important; }
.u-mb-lg { margin-bottom: var(--spacing-lg) !important; }
.u-mx-auto { margin-left: auto; margin-right: auto; }

/* Padding */
.u-p-0 { padding: 0 !important; }
.u-p-xs { padding: var(--spacing-xs) !important; }
.u-p-sm { padding: var(--spacing-sm) !important; }
.u-p-md { padding: var(--spacing-md) !important; }
.u-p-lg { padding: var(--spacing-lg) !important; }

/* Backgrounds */
.u-bg-primary { background-color: var(--primary-color); }
.u-bg-light   { background-color: var(--bg-light); }
.u-bg-medium  { background-color: var(--bg-medium); }
.u-bg-dark    { background-color: var(--bg-dark); }

/* Containers */
.u-container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
}
```

---

## 4. Estetika Neobrutalism & Raycast (Prefix `nb-` dan `ray-`)

### 4.1. Neobrutalism Core Styles (`nb-`)

```css
/* Block/Card Element - Stark, bordered block */
.nb-block {
    background-color: var(--bg-medium);
    border: 2px solid var(--border-color);
    padding: var(--spacing-lg);
    box-shadow: 4px 4px 0px var(--shadow-color); /* Strong, offset shadow */
    margin-bottom: var(--spacing-xl);
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.nb-block:hover {
    transform: translate(-2px, -2px); /* Slight lift */
    box-shadow: 6px 6px 0px var(--shadow-color); /* Emphasize lift */
}

/* Button */
.nb-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-sm) var(--spacing-md);
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--text-color-dark);
    background-color: var(--bg-light);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-none); /* No rounded corners */
    box-shadow: 2px 2px 0px var(--shadow-color);
    cursor: pointer;
    transition: all var(--transition-fast);
    text-decoration: none; /* For button-like links */
}

.nb-button:hover,
.nb-button:focus {
    color: var(--text-color-light);
    background-color: var(--primary-color);
    box-shadow: 4px 4px 0px var(--shadow-color);
    transform: translate(-1px, -1px);
    outline: none;
}

.nb-button--primary {
    background-color: var(--primary-color);
    color: var(--text-color-light);
    border-color: var(--primary-dark);
}
.nb-button--primary:hover,
.nb-button--primary:focus {
    background-color: var(--primary-dark);
    box-shadow: 4px 4px 0px var(--shadow-color);
}

/* Input Fields */
.nb-input,
.nb-textarea,
.nb-select {
    width: 100%;
    padding: var(--spacing-sm);
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    color: var(--text-color-dark);
    background-color: var(--bg-light);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-none);
    box-shadow: none; /* No shadow by default */
    transition: border-color var(--transition-fast);
}

.nb-input:focus,
.nb-textarea:focus,
.nb-select:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 1px 1px 0px var(--primary-color);
}

.nb-label {
    display: block;
    margin-bottom: var(--spacing-xs);
    font-family: var(--font-heading);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
}

/* Thick Border Element */
.nb-border-thick {
    border: 4px solid var(--border-color);
}

/* Highlight Text */
.nb-highlight {
    background-color: var(--primary-color);
    color: var(--text-color-light);
    padding: var(--spacing-xs) var(--spacing-sm);
    display: inline-block;
    font-family: var(--font-mono);
}
```

### 4.2. Raycast-inspired Refinements (`ray-`)

```css
/* Nav Item (Subtle, functional, like Raycast command palette entries) */
.ray-nav-item {
    display: block;
    padding: var(--spacing-xs) var(--spacing-sm);
    color: var(--text-color-dark);
    font-family: var(--font-body);
    text-decoration: none;
    transition: background-color var(--transition-fast), color var(--transition-fast);
    border-radius: var(--radius-sm); /* Slight curve */
}

.ray-nav-item:hover,
.ray-nav-item:focus {
    background-color: var(--primary-color);
    color: var(--text-color-light);
    outline: none;
}

.ray-nav-item.is-active {
    background-color: var(--primary-dark);
    color: var(--text-color-light);
    font-weight: 600;
}

/* Command-Palette Trigger (e.g., search icon/button) */
.ray-command-palette-trigger {
    background: none;
    border: none;
    padding: var(--spacing-sm);
    color: var(--text-color-dark);
    cursor: pointer;
    font-size: 1.2rem;
    transition: color var(--transition-fast);
}
.ray-command-palette-trigger:hover,
.ray-command-palette-trigger:focus {
    color: var(--primary-color);
    outline: none;
}
```

---

## 5. Scrollbar Styling

Untuk memberikan tampilan yang lebih bersih dan sesuai dengan estetika neobrutalism.

```css
/* For Webkit browsers (Chrome, Safari) */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-track {
    background: var(--bg-light);
    border-left: 1px solid var(--border-color); /* Neobrutalist touch */
}

::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: var(--radius-none);
    border: 1px solid var(--bg-light);
}

::-webkit-scrollbar-thumb:hover {
    background-color: var(--primary-color);
}

/* For Firefox */
html {
    scrollbar-width: thin;
    scrollbar-color: var(--border-color) var(--bg-light);
}
```

---

## 6. Animations (Minimalist & Direct)

Neobrutalism menghindari animasi yang berlebihan. Fokus pada transisi yang cepat dan fungsional.

```css
/* All transitions should use var(--transition-fast) by default */

/* Example: Basic hover on an icon */
.icon-hover-effect {
    transition: color var(--transition-fast), transform var(--transition-fast);
}
.icon-hover-effect:hover {
    color: var(--primary-color);
    transform: scale(1.05);
}

/* Example: Simple fade in for content blocks (if absolutely necessary, keep it fast) */
/* .fade-in {
    opacity: 0;
    animation: fadeIn var(--transition-normal) forwards;
}
@keyframes fadeIn {
    to { opacity: 1; }
} */
```

---

**CATATAN PENTING:** Pastikan semua kode CSS di atas diimplementasikan secara modular (misal: menggunakan SCSS `@import`) sesuai dengan struktur folder `src/scss` yang dijelaskan di `design.md`.

---