## 🚀 **Project Overview**

### **CSS Library Folder (Sass Project)** 🧑‍💻

In this folder, you'll find  **Sass project** organized into clean and modular directories. The styles for your website are written in **Sass** (Syntactically Awesome Style Sheets), which is an extension of CSS that allows you to write more powerful, maintainable, and organized styles.

### **Project Structure** 📂

The **`/src`** folder is the heart of project, where all the Sass and compiled CSS files reside.

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

* **/scss**: This is where all source Sass files. It is further organized into subfolders:

  * **/abstract**: Contains **variables**, **mixins**, **functions**, and other Sass helpers that are used globally across styles.
  * **/base**: This folder includes global styles like **CSS resets**, **typography**, and other foundational styles that apply across site.
  * **/components**: For reusable elements like **buttons**, **cards**, **forms**, etc.
  * **/layouts**: Contains the styles for the main **layout structure** of the site, such as headers, footers, and navigation.
  * **/themes**: Any theme-related styles that control color schemes, fonts, or custom styling for specific design themes.
  * **/utilities**: Includes utility classes for **spacing**, **text styles**, or other atomic styles used throughout the website.

* **/css**: This folder will contain your compiled, and purged CSS files. These are the files that are actually used by the browser to style your website.

* **gulpfile.js**: A configuration file for **Gulp**, a task runner that automates tasks like **Sass compilation**, and **CSS purging**.

---

### **Crash Course Folder (General Info About Sass)** 🎓

In the **Crash Course** folder, you’ll find a more **general overview** of Sass, including essential information about its features, syntax, and best practices.

Here’s a glimpse of the content:

* **Sass Basics**: Learn the core concepts of Sass, like **variables**, **mixins**, **nesting**, and **inheritance**.
* **Advanced Sass Techniques**: Dive deeper into Sass's advanced capabilities such as **functions**, **loops**, **conditional statements**, and more.
* **Modules and Features**: Understand Sass modules like **sass\:math**, **map**, and **color**, which provide powerful utilities for handling complex styles.
* **Sass Compilation Process**: Learn about the **Sass-to-CSS compilation** process, how it works, and how it integrates into modern web development tools like **Gulp**.