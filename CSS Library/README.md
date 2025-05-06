# 📚 **CSS Design Library & Gulp Workflow Documentation** 🌐

## **Overview** 🌟

Welcome to the **CSS Design Library** and **Gulp Workflow**! This project is a **modular CSS library** for fast and flexible web design, combined with an **automated Gulp workflow** to **compile Sass**, **minify CSS**, and **purge unused CSS**, ensuring that your styles are both optimized and easy to manage.

---

## **CSS Library Features** 🖌️

This **CSS Design Library** provides a set of customizable, reusable styles that can be applied across your website. It follows a **modular approach**, with a focus on simplicity, flexibility, and optimization.

### **1. Layout & Grid System** 📐

The grid system is based on **Flexbox** to create **responsive layouts** effortlessly.

* **Responsive Grid**:

  * Classes like `col-12-xs`, `col-5-md`, `col-6-md`, and `col-3-lg` define the width of columns based on the screen size.

* **Flexbox Layout**:

  * Classes like `display-f`, `justify-center`, and `align-center` help easily manage layout alignment and content placement.

---

### **2. Typography & Text Styling** ✍️

A variety of typography and text utilities are provided to style text quickly:

* **Font Sizes**:

  * Use classes like `font-xxl` and `font-md` to apply predefined font sizes.

* **Text Colors**:

  * Classes like `text-secondary`, `text-gray`, and `text-white` are available for text color styling.

* **Text Hover Effects**:

  * Text can change color on hover with classes like `text-hover-secondary`.

---

### **3. Buttons & Links** 🔘

The library includes button and link styles with hover effects for interactive elements.

* **Buttons**:

  * Use `btn-outlined-secondary`, `btn-secondary`, etc., to create stylized buttons.
* **Links**:

  * Links styled with hover effects (e.g., `text-hover-secondary`) for interactive behavior.

---

### **4. Utility Classes** ⚡

Utility classes allow for fine-tuned control over the layout and design elements:

* **Spacing**:

  * Use margin and padding utilities like `mt-5`, `mb-3`, `p-0` to control spacing.

* **Background Colors**:

  * Set background colors using classes such as `bg-secondary-light-9` and `bg-gray-light-7`.

---

## **Gulp Workflow Features** 🛠️

The **Gulp workflow** streamlines the process of **auto-compiling Sass**, **purging unused CSS**, and **minifying** the resulting stylesheet. This ensures your project is efficient, optimized, and ready for production.

### **1. Auto-Compiling Sass to CSS** ✂️

Gulp automatically compiles your **Sass files** into **minified CSS**.

* **Sass Compilation**:

  * The `.scss` files from the `/scss` folder are compiled into a single CSS file, minified for performance.

  Example Gulp Task:

  ```js
  gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')  // Source Sass files
      .pipe(sass().on('error', sass.logError))  // Compile Sass
      .pipe(cssnano())                        // Minify CSS
      .pipe(gulp.dest('dist/css'));            // Output to dist folder
  });
  ```

---

### **2. Purging Unused CSS** 🧹

Gulp integrates **PurgeCSS** to remove unused CSS, ensuring your final CSS is as small and efficient as possible.

* **CSS Purging**:

  * PurgeCSS scans your HTML and JavaScript files for used CSS classes and removes unused ones.

  Example Gulp Task:

  ```js
  gulp.task('purgecss', () => {
    return gulp.src('dist/css/style.min.css')  // Input CSS
      .pipe(purgecss({
        content: ['src/**/*.html', 'src/**/*.js'] // HTML and JS files to scan
      }))
      .pipe(gulp.dest('dist/css'));             // Output the purged CSS
  });
  ```

---

### **3. Watch for Changes** 👀

The Gulp watch task listens for changes in Sass files and triggers an automatic recompilation.

* **Watch Task**:

  * Gulp watches `.scss` files and re-runs the tasks (compiling Sass and purging CSS) whenever changes are detected.

  Example Gulp Task:

  ```js
  gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass', 'purgecss'));
  });
  ```

---

### **4. Running Everything Automatically** ✅

With a single command, you can run the entire workflow: **Sass compilation**, **CSS purging**, and **file watching**.

* **Default Gulp Task**:

  * This task runs Sass compilation, purges unused CSS, and watches for file changes.

  Example Gulp Task:

  ```js
  gulp.task('default', gulp.series('sass', 'purgecss', 'watch'));
  ```

---

## **Project Directory Structure** 📂

Here’s a breakdown of the project structure:

```
/src
  /css                 # Compiled and purged CSS files (e.g., style.min.css)
  /html                # HTML files for your website 
  /scss                # Sass source files (e.g., styles.scss)
    /abstract          # Sass abstract files (variables, mixins, etc.)
    /base              # Global styles like resets and typography
    /components        # Reusable components like buttons, forms, etc.
    /layouts           # Layouts for header, footer, etc.
    /themes            # Theme-related styles
    /utilities         # Utility classes (spacing, text styles, etc.)
  
/gulpfile.js           # Gulp configuration file
```

---

## **Conclusion** 🎉

The **CSS Design Library** combined with **Gulp's automated workflow** simplifies your web development process. **Sass compilation**, **CSS minification**, and **purging unused styles** are handled automatically, helping you create optimized websites quickly and efficiently. 🚀