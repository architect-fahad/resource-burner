# Contributing to Resource Burner

First off, thank you for considering contributing to Resource Burner! It's people like you that make the open source community such an amazing place to learn, inspire, and create.

## 🛠️ Development Setup

1.  **Fork and Clone** the repository:
    ```bash
    git clone https://github.com/YOUR-USERNAME/resource-burner.git
    cd resource-burner
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Tests** to ensure everything is working:
    ```bash
    npm test
    ```

## 🧪 Running Tests

We use the native Node.js test runner. Please ensure all code changes are accompanied by relevant tests.

```bash
# Run all tests
npm test

# Run a specific test file
node --test test/cli.test.js
```

## 📝 Coding Guidelines

-   **Zero Dependencies**: This project aims to be zero-dependency (runtime). Please do not add runtime dependencies unless absolutely necessary and discussed first.
-   **Dual Support**: We support both CommonJS and ES Modules. Ensure any changes to `src/lib` work in both environments.
-   **Style**: Keep code clean and readable. Use standard JavaScript features supported by Node.js LTS versions.

## 🚀 Submitting a Pull Request

1.  Create a new branch for your feature or fix: `git checkout -b feature/amazing-feature`.
2.  Commit your changes with clear, descriptive commit messages.
3.  Push to your fork and submit a Pull Request against the `main` branch.
4.  Ensure CI passes (GitHub Actions will run tests automatically).

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License defined in the `LICENSE` file.
